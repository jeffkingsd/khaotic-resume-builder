export const resumeSetupType = {
  NoWorkExperience: 'no-work-experience',
  WorkExperinceFirst: 'work-experince-first',
} as const

export type ResumeTypes = (typeof resumeSetupType)[keyof typeof resumeSetupType]
