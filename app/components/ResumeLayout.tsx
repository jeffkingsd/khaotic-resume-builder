import { resumeSetupType } from '@lib/entities/resumeType'
import { ResumeAboutMe } from './ResumeSections/ResumeAboutMe'
import { ResumeAward } from './ResumeSections/ResumeAward'
import { ResumeCertification } from './ResumeSections/ResumeCertification'
import { ResumeEduction } from './ResumeSections/ResumeEduction'
import { ResumeHeader } from './ResumeSections/ResumeHeader'
import { ResumeJob } from './ResumeSections/ResumeJobs'
import { ResumeSkill } from './ResumeSections/ResumeSkills'

type ResumeSetupConfigProps = {
  setupType?: string
}

export const ResumeSetupConfig = (props: ResumeSetupConfigProps) => {
  const setupType = props.setupType

  switch (setupType) {
    case resumeSetupType.NoWorkExperience:
      return (
        <>
          <ResumeHeader />
          <ResumeAboutMe />
          <ResumeEduction />
          <ResumeSkill />
          <ResumeCertification />
          <ResumeAward />
        </>
      )
    case resumeSetupType.WorkExperinceFirst:
      return (
        <>
          <ResumeHeader />
          <ResumeAboutMe />
          <ResumeJob />
          <ResumeSkill />
          <ResumeEduction />
          <ResumeCertification />
          <ResumeAward />
        </>
      )
    default:
      return (
        <>
          <ResumeHeader />
          <ResumeAboutMe />
          <ResumeSkill />
          <ResumeJob />
          <ResumeEduction />
          <ResumeCertification />
          <ResumeAward />
        </>
      )
  }
}

export const ResumeLayout = () => {
  return ResumeSetupConfig
}
