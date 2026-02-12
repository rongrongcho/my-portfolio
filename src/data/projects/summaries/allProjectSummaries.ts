import type { ProjectSummary } from '../../../types/project'
import { consultingResourcePlannerSummary } from './consultingResourcePlannerSummary'
import { erpIntegrationDashboardSummary } from './erpIntegrationDashboardSummary'
import { legacySystemModernizationSummary } from './legacySystemModernizationSummary'
import { portfolioWebV2Summary } from './portfolioWebV2Summary'
import { salesInsightServiceSummary } from './salesInsightServiceSummary'
import { teamCollaborationPortalSummary } from './teamCollaborationPortalSummary'

export const allProjectSummaries: ProjectSummary[] = [
  portfolioWebV2Summary,
  erpIntegrationDashboardSummary,
  consultingResourcePlannerSummary,
  salesInsightServiceSummary,
  legacySystemModernizationSummary,
  teamCollaborationPortalSummary,
]
