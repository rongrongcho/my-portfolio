import type { ProjectDetail } from '../../../types/project'

export const pioSyncIntegrationHubDetail: ProjectDetail = {
  slug: 'piosync-integration-hub',
  demoImages: [
    'https://images.unsplash.com/photo-1551281044-8b5bd95d8f25?auto=format&fit=crop&w=2200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=80',
  ],
  demoCaptions: ['업무 허브 대시보드', '승인 및 전표 처리 흐름'],
  detailSections: [
    {
      id: 'my-role',
      title: '핵심 기여 및 역할',
      paragraphs: [
        '총 2인 체계(백엔드 1 / 프론트엔드 1)에서 백엔드를 단독 담당했고, API 설계/구현, DB 모델링, ERP 연동 로직, 인증/권한, 예외 처리 및 로그 설계를 수행했습니다.',
        '외부 연동 API와 ERP 인터페이스를 고려한 데이터 흐름과 API 계약을 주도적으로 정의했고, 프론트엔드와 연동 기준을 명확히 정리해 개발 리스크를 줄였습니다.',
        '구현뿐 아니라 아키텍처/우선순위/확장 전략까지 함께 관리하는 역할로 프로젝트 전반의 기술 의사결정을 담당했습니다.',
      ],
      highlights: ['백엔드 단독 개발', '연동 아키텍처/DB/API 설계 주도', '프론트엔드와 API 계약 정립'],
    },
    {
      id: 'overview',
      title: '프로젝트 정보',
      paragraphs: [
        'PioSync는 외국계 ERP 직접 사용을 최소화하기 위해, 국세청/은행 연동과 전표·지출결의 승인 흐름을 통합한 중간 허브 시스템입니다.',
        'ERP를 직접 교체하는 대신 ERP 앞단에 실무형 업무 시스템을 두고, 처리 결과를 ERP에 자동 반영하는 전략으로 도입했습니다.',
      ],
      highlights: [
        '기간: 2025.09 - 2026.03',
        '팀 구성: 총 2명 (백엔드 1 / 프론트엔드 1)',
        '대상 사용자: 본사 약 60~70명',
        '핵심 연동: 국세청 · 은행 · 외국계 ERP',
        '핵심 기능: 전표 입력 대행 · 지출결의 승인 · ERP 자동 반영',
      ],
    },
    {
      id: 'problem-solving',
      title: '문제 해결 과정',
      paragraphs: [
        '문제 1: 승인·전표 처리가 여러 화면으로 분리되어 단계 추적이 어려웠습니다. 해결: 입력/결의/승인 상태를 하나의 업무 흐름으로 통합하고 상태 기반 API를 정의해 화면-백엔드 간 동기화를 단순화했습니다.',
        '문제 2: 국세청·은행 연동이 업무 흐름과 분리되어 수작업이 반복되었습니다. 해결: 외부 연동 결과를 표준 포맷으로 정규화하고, 전표 생성/반영 단계와 연결해 중복 입력을 줄였습니다.',
        '문제 3: ERP 직접 사용 확산으로 교육·라이선스 비용이 증가했습니다. 해결: ERP 앞단에서 실무 업무를 처리하고 승인 완료 데이터를 ERP에 자동 반영하는 허브 구조를 적용해 ERP 접근 범위를 최소화했습니다.',
      ],
      highlights: ['문제-원인-해결 구조로 설계', '연동 데이터 표준화', 'ERP 접근 최소화'],
    },
  ],
}
