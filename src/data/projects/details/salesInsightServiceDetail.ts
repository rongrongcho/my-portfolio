import type { ProjectDetail } from '../../../types/project'

export const salesInsightServiceDetail: ProjectDetail = {
  slug: 'sales-insight-service',
  demoImages: [
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2200&q=80',
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=2200&q=80',
  ],
  demoCaptions: ['파이프라인 리포트', '지표 집계 뷰'],
  detailSections: [
    {
      id: 'pipeline',
      title: '데이터 파이프라인',
      paragraphs: [
        '원천 데이터 품질 편차가 커서 정규화 규칙을 단계별로 분리하고, 실패 레코드는 재처리 큐로 보내는 구조를 적용했습니다.',
        '배치 결과와 API 응답의 기준 시점을 맞추기 위해 집계 버전 관리 테이블을 도입했습니다.',
      ],
    },
    {
      id: 'impact',
      title: '성과',
      paragraphs: [
        '기존 수동 리포트 작성 시간을 크게 줄였고, 반복 분석 요청 대응 속도를 안정적으로 개선했습니다.',
        '추가 지표 요청이 들어와도 동일한 집계 패턴으로 빠르게 확장 가능하도록 모듈화했습니다.',
      ],
    },
  ],
}
