import type { ProjectSummary } from '../../../types/project'

export const salesInsightServiceSummary: ProjectSummary = {
  id: 3,
  slug: 'sales-insight-service',
  title: 'Sales Insight Service',
  summary: '거래 데이터 분석 기반의 매출 인사이트 리포트 서비스',
  period: '2024.04 - 2024.09',
  techStack: ['Python', 'FastAPI', 'MongoDB', 'AWS'],
  role: '데이터 파이프라인 및 API 개발',
  description: '자동 집계 배치와 리포트 생성 API를 구축해 분석 속도를 개선했습니다.',
  githubUrl: 'https://github.com/',
  thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
  status: 'completed',
}
