import type { ProjectSummary } from '../../../types/project'
import { consultingResourcePlannerSummary } from './consultingResourcePlannerSummary'
import { legacySystemModernizationSummary } from './legacySystemModernizationSummary'
import { pioSyncIntegrationHubSummary } from './pioSyncIntegrationHubSummary'
import { portfolioWebV2Summary } from './portfolioWebV2Summary'
import { salesInsightServiceSummary } from './salesInsightServiceSummary'
import { teamCollaborationPortalSummary } from './teamCollaborationPortalSummary'

export const allProjectSummaries: ProjectSummary[] = [
  portfolioWebV2Summary,
  pioSyncIntegrationHubSummary,
  consultingResourcePlannerSummary,
  salesInsightServiceSummary,
  legacySystemModernizationSummary,
  teamCollaborationPortalSummary,
]
