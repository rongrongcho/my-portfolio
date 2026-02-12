import type { ProjectDetail } from '../../../types/project'
import { consultingResourcePlannerDetail } from './consultingResourcePlannerDetail'
import { erpIntegrationDashboardDetail } from './erpIntegrationDashboardDetail'
import { legacySystemModernizationDetail } from './legacySystemModernizationDetail'
import { portfolioWebV2Detail } from './portfolioWebV2Detail'
import { salesInsightServiceDetail } from './salesInsightServiceDetail'
import { teamCollaborationPortalDetail } from './teamCollaborationPortalDetail'

export const allProjectDetails: ProjectDetail[] = [
  portfolioWebV2Detail,
  erpIntegrationDashboardDetail,
  consultingResourcePlannerDetail,
  salesInsightServiceDetail,
  legacySystemModernizationDetail,
  teamCollaborationPortalDetail,
]
