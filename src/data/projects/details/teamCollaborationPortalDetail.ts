import type { ProjectDetail } from '../../../types/project'

export const teamCollaborationPortalDetail: ProjectDetail = {
  slug: 'team-collaboration-portal',
  demoImages: [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80',
  ],
  demoCaptions: ['협업 UI 스냅샷', '배포 파이프라인뷰'],
  detailSections: [
    {
      id: 'core',
      title: '핵심 기능',
      paragraphs: [
        '문서/공지/댓글 기능을 단일 권한 체계로 묶어 사용자별 접근 제어를 단순하게 유지했습니다.',
        '조직 변경 시 권한 재매핑이 자동으로 반영되도록 배치 작업을 설계했습니다.',
      ],
    },
    {
      id: 'ops',
      title: '운영 관점 개선',
      paragraphs: [
        '배포 파이프라인과 점검 체크리스트를 표준화해 릴리즈 품질 편차를 줄였습니다.',
        '관리자 화면에서 주요 활동 로그를 조회할 수 있도록 하여 이슈 대응 시간을 줄였습니다.',
      ],
    },
  ],
}
