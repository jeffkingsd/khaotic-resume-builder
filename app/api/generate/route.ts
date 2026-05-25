import { ApiError } from '@/lib/error/apiError'
import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const client = new Anthropic() // reads ANTHROPIC_API_KEY from the environment

const GUIDELINES_DIR = path.join(process.cwd(), 'app', 'Guidelines')

// Maps a section key to its guideline file. `formatStandards.md` is always loaded.
const SECTION_FILES: Record<string, string> = {
  personalInfo: 'personalInfo.md',
  aboutMe: 'aboutMe.md',
  job: 'job.md',
  skills: 'skills.md',
  education: 'education.md',
  userLink: 'userLink.md',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const section = body.section
    const answers = body.answers

    if (!body) {
      throw new ApiError('Request body is empty', 404)
    }

    const sectionFile = SECTION_FILES[section]

    if (!sectionFile) {
      throw new ApiError('Unknown section "${section}', 402)
    }

    const [formatStandards, sectionGuide] = await Promise.all([
      readFile(path.join(GUIDELINES_DIR, 'formatStandards.md'), 'utf8'),
      readFile(path.join(GUIDELINES_DIR, sectionFile), 'utf8'),
    ])

    if (!formatStandards && !sectionGuide) {
      throw new ApiError('Failed to load guideline files', 500)
    }

    // The guideline files are identical for every request to a given section,
    // so they form a stable, cacheable prefix. The volatile user answers go
    // after, in the user message.
    const stream = client.messages.stream({
      model: 'claude-opus-4-7',
      max_tokens: 64000,
      system: [
        {
          type: 'text',
          text:
            `<format_standards>\n${formatStandards}\n</format_standards>\n\n` +
            `<section_guide>\n${sectionGuide}\n</section_guide>`,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        {
          role: 'user',
          content:
            `Generate the "${section}" resume section from the user's answers below. ` +
            `Follow every rule in the format standards and section guide. ` +
            `Return only the section content as plain text.\n\n` +
            `<user_answers>\n${JSON.stringify(answers, null, 2)}\n</user_answers>`,
        },
      ],
    })

    const encoder = new TextEncoder()
    const fileBody = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
          controller.close()
        } catch (err) {
          controller.error(err)
        }
      },
    })

    return new Response(fileBody, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    if (error instanceof ApiError) {
      Response.json(
        {
          error: error.message,
        },
        { status: error.statusCode },
      )
    }

    Response.json({ error: 'Unknown Error has occured' }, { status: 400 })
  }
}
