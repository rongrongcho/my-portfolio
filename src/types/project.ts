export type ProjectDetailSection = {
  id: string
  title: string
  paragraphs: string[]
  highlights?: string[]
}

export type Project = {
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
  demoImages: string[]
  demoCaptions: string[]
  status: 'completed' | 'in-progress'
  detailSections: ProjectDetailSection[]
}
