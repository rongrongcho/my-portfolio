import type { ProjectDetail } from '../../../types/project'
import { consultingResourcePlannerDetail } from './consultingResourcePlannerDetail'
import { legacySystemModernizationDetail } from './legacySystemModernizationDetail'
import { pioSyncIntegrationHubDetail } from './pioSyncIntegrationHubDetail'
import { portfolioWebV2Detail } from './portfolioWebV2Detail'
import { salesInsightServiceDetail } from './salesInsightServiceDetail'
import { teamCollaborationPortalDetail } from './teamCollaborationPortalDetail'

export const allProjectDetails: ProjectDetail[] = [
  portfolioWebV2Detail,
  pioSyncIntegrationHubDetail,
  consultingResourcePlannerDetail,
  salesInsightServiceDetail,
  legacySystemModernizationDetail,
  teamCollaborationPortalDetail,
]
