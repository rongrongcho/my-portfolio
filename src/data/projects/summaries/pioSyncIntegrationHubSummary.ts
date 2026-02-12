import type { ProjectSummary } from '../../../types/project'

export const pioSyncIntegrationHubSummary: ProjectSummary = {
  id: 5,
  slug: 'piosync-integration-hub',
  title: 'PioSync Integration Hub',
  summary:
    '외국계 ERP 직접 사용을 줄이기 위해 국세청·은행 연동과 전표/지출결의 승인 흐름을 통합한 중간 업무 허브 시스템',
  period: '2025.09 - 2026.03',
  techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS'],
  role: '백엔드 (총 2명 개발)',
  description:
    '국세청·은행 입출금 내역 연동, 전표 입력 대행, 지출결의 승인 흐름, ERP 자동 반영을 한 흐름으로 통합했습니다.',
  githubUrl: 'https://github.com/',
  thumbnail: 'https://images.unsplash.com/photo-1551281044-8b5bd95d8f25?auto=format&fit=crop&w=1200&q=80',
  status: 'in-progress',
  projectContext: 'company',
  collaborationType: 'team',
  teamSize: 2,
}
