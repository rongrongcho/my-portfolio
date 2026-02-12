export type ProjectDetailSection = {
  id: string
  title: string
  paragraphs: string[]
  highlights?: string[]
}

export type ProjectStatus = 'completed' | 'in-progress'

export type ProjectSummary = {
  id: number
  slug: string
  title: string
  summary: string
  period: string
  techStack: string[]
  role: string
  description: string
  githubUrl: string
  thumbnail: string
  status: ProjectStatus
}

export type ProjectDetail = {
  slug: string
  demoImages: string[]
  demoCaptions: string[]
  detailSections: ProjectDetailSection[]
}

export type Project = ProjectSummary & ProjectDetail
