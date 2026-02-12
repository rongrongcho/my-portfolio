import type { ProjectDetail } from '../../../types/project'

export const consultingResourcePlannerDetail: ProjectDetail = {
  slug: 'consulting-resource-planner',
  demoImages: [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=80',
  ],
  demoCaptions: ['스케줄 시뮬레이션', '배치 모니터 화면'],
  detailSections: [
    {
      id: 'problem',
      title: '문제 정의',
      paragraphs: [
        '인력 배치 요청이 이메일/메신저로 분산되어 일정 충돌과 커뮤니케이션 비용이 반복적으로 발생했습니다.',
        '배치 변경 이력이 남지 않아 사후 분석과 회고가 어려웠습니다.',
      ],
    },
    {
      id: 'solution',
      title: '해결 방식',
      paragraphs: [
        '배치 후보 시뮬레이션 로직을 별도 서비스로 분리해 조합 결과를 빠르게 비교할 수 있게 만들었습니다.',
        '승인/반려 이력과 변경 로그를 구조화해 운영 리포트 자동화를 지원했습니다.',
      ],
    },
  ],
}
