import type { Project, ProjectDetail, ProjectSummary } from '../../types/project'
import { allProjectDetails } from './details/allProjectDetails'
import { allProjectSummaries } from './summaries/allProjectSummaries'

export const projectSummaries: ProjectSummary[] = allProjectSummaries

const projectDetails: ProjectDetail[] = allProjectDetails
const detailBySlug = new Map(projectDetails.map((detail) => [detail.slug, detail]))

export function getProjectBySlug(slug: string): Project | undefined {
  const summary = projectSummaries.find((item) => item.slug === slug)
  if (!summary) {
    return undefined
  }

  const detail = detailBySlug.get(slug)
  if (!detail) {
    return {
      ...summary,
      demoImages: [],
      demoCaptions: [],
      detailSections: [],
    }
  }

  return {
    ...summary,
    ...detail,
  }
}

export function getProjectStats() {
  return {
    total: projectSummaries.length,
    completed: projectSummaries.filter((project) => project.status === 'completed').length,
    inProgress: projectSummaries.filter((project) => project.status === 'in-progress').length,
  }
}
