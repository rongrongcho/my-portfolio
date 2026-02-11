export type Project = {
  id: number
  title: string
  summary: string
  period: string
  techStack: string[]
  role: string
  description: string
  githubUrl: string
  detailUrl: string
  thumbnail: string
  status: 'completed' | 'in-progress'
}
