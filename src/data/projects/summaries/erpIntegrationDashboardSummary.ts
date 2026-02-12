import type { ProjectSummary } from '../../../types/project'

export const erpIntegrationDashboardSummary: ProjectSummary = {
  id: 5,
  slug: 'erp-integration-dashboard',
  title: 'ERP Integration Dashboard',
  summary: 'ERP 데이터 모니터링을 위한 관리자 대시보드',
  period: '2025.06 - 2025.10',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  role: '백엔드 API 설계 및 프론트 통합',
  description: '실시간 지표 조회, 권한 기반 접근제어, 운영 알림 기능을 구현했습니다.',
  githubUrl: 'https://github.com/',
  thumbnail: 'https://images.unsplash.com/photo-1551281044-8b5bd95d8f25?auto=format&fit=crop&w=1200&q=80',
  status: 'in-progress',
}
