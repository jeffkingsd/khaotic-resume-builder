import { ResumeAboutMe } from './ResumeSections/ResumeAboutMe'
import { ResumeAward } from './ResumeSections/ResumeAward'
import { ResumeCertification } from './ResumeSections/ResumeCertification'
import { ResumeEduction } from './ResumeSections/ResumeEduction'
import { ResumeHeader } from './ResumeSections/ResumeHeader'
import { ResumeJob } from './ResumeSections/ResumeJobs'
import { ResumeSkill } from './ResumeSections/ResumeSkills'

export const ResumeLayout = () => {
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
