import type { ProjectDetail } from '../../../types/project'

export const legacySystemModernizationDetail: ProjectDetail = {
  slug: 'legacy-system-modernization',
  demoImages: [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=80',
  ],
  demoCaptions: ['마이그레이션 흐름', 'API 작업 로그'],
  detailSections: [
    {
      id: 'migration',
      title: '마이그레이션 전략',
      paragraphs: [
        '기존 모놀리식 로직을 도메인 기준으로 분해하고, 단계별 API 전환으로 서비스 중단 리스크를 낮췄습니다.',
        '레거시 화면과 신규 화면이 공존하는 기간을 고려해 데이터 호환 계층을 별도 운영했습니다.',
      ],
    },
    {
      id: 'stabilization',
      title: '안정화',
      paragraphs: [
        '핵심 트랜잭션에 대한 회귀 시나리오를 테스트 케이스로 정리하고 배포 전 자동 검증 흐름을 만들었습니다.',
        '운영 이슈를 빠르게 추적하기 위해 API 로깅 키를 표준화했습니다.',
      ],
    },
  ],
}
