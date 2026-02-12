import type { ProjectDetail } from '../../../types/project'

export const erpIntegrationDashboardDetail: ProjectDetail = {
  slug: 'erp-integration-dashboard',
  demoImages: [
    'https://images.unsplash.com/photo-1551281044-8b5bd95d8f25?auto=format&fit=crop&w=2200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=80',
  ],
  demoCaptions: ['모든 지표와 알림 흐름', '팀 조회 대시보드 스냅'],
  detailSections: [
    {
      id: 'context',
      title: '배경',
      paragraphs: [
        '여러 ERP 모듈의 상태를 각각 조회해야 해서 운영팀의 확인 동선이 길고, 장애 감지가 늦어지는 문제가 있었습니다.',
        '데이터 수집-가공-표시 흐름을 통합하여 운영 의사결정을 빠르게 만드는 것이 핵심 목표였습니다.',
      ],
    },
    {
      id: 'implementation',
      title: '구현 내용',
      paragraphs: [
        '도메인별 API를 표준 응답 포맷으로 정리하고, 프론트에서 공통 차트/테이블 컴포넌트로 재사용할 수 있게 구성했습니다.',
        '알림 정책은 임계치와 사용자 권한을 결합해 불필요한 노이즈를 줄이는 방식으로 설계했습니다.',
      ],
      highlights: ['권한 기반 지표 노출', '실시간 알림 규칙화', '운영용 대시보드 템플릿화'],
    },
  ],
}
