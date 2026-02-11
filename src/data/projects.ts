import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 6,
    slug: 'portfolio-web-v2',
    title: 'Portfolio Web v2',
    summary: '스크롤 스냅과 반응형 인터랙션을 적용한 개인 포트폴리오 SPA',
    period: '2026.01 - 2026.02',
    techStack: ['React', 'TypeScript', 'Vite', 'CSS Scroll Snap'],
    role: '기획, 디자인, 프론트엔드 구현',
    description: '섹션 스냅, 네비게이션 active 연동, 프로젝트 페이징 UI를 구현했습니다.',
    githubUrl: 'https://github.com/',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    demoImages: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2200&q=80',
    ],
    demoCaptions: ['코드 기반 레이아웃 실험', '인터랙션 흐름 스냅샷', '반응형 애니메이션 리듬'],
    status: 'in-progress',
    detailSections: [
      {
        id: 'overview',
        title: '프로젝트 개요',
        paragraphs: [
          '기존 포트폴리오에서 전달력이 부족했던 부분을 보완하기 위해 섹션별 스냅 구조와 정보 밀도 조절에 집중했습니다.',
          '프로필, 프로젝트, 커리어를 하나의 흐름으로 묶되, 각 섹션은 독립적으로 확장할 수 있도록 컴포넌트 구조를 정리했습니다.',
          '이번 상세 페이지에서는 읽는 흐름을 강화하기 위해 프로젝트 설명을 목차 중심으로 재배치하고, 긴 문장에서도 가독성이 유지되도록 문단 단위를 세분화했습니다.',
        ],
      },
      {
        id: 'approach',
        title: '설계 접근',
        paragraphs: [
          '스크롤 인터랙션은 데스크톱과 모바일의 사용 맥락이 달라 별도 동작으로 분기했습니다.',
          '프로젝트 섹션은 데이터 중심으로 렌더링하여 카드, 필터, 정렬, 페이지네이션 정책을 조합 가능하게 구성했습니다.',
          '상세 페이지는 좌측 정보 영역과 우측 콘텐츠 영역을 명확히 분리해, 탐색 행동과 읽기 행동이 서로 방해되지 않도록 설계했습니다.',
        ],
        highlights: ['휠 제스처 큐잉 처리', '섹션 이동 애니메이션 커스텀', '모바일 자연 스크롤 우선'],
      },
      {
        id: 'ia',
        title: '정보 구조(IA) 설계',
        paragraphs: [
          '상세 문서는 개요, 문제 정의, 접근 방식, 구현 세부, 트러블슈팅, 회고 순으로 배치해 읽는 순서가 자연스럽게 이어지도록 구성했습니다.',
          '목차 항목은 실제 콘텐츠 블록과 1:1 매핑되도록 유지하여, 데이터만 확장해도 메뉴와 본문이 자동으로 동기화되게 만들었습니다.',
          '추가 섹션이 생겨도 컴포넌트 수정 없이 데이터 배열만 늘리면 렌더링되도록 타입을 단순화했습니다.',
        ],
      },
      {
        id: 'ux-flow',
        title: '사용자 흐름',
        paragraphs: [
          '프로젝트 카드에서 Detail 버튼을 클릭하면 즉시 상세로 이동하고, 복귀 시에는 홈의 프로젝트 섹션으로 복귀하도록 흐름을 고정했습니다.',
          '상세 페이지에서는 사용자가 현재 읽는 블록을 놓치지 않도록 목차 active 상태를 스크롤 위치 기반으로 표시합니다.',
          '문서를 위아래로 길게 읽는 상황을 고려해 버튼 대신 목차 네비게이션을 중심으로 탐색 비용을 줄였습니다.',
        ],
        highlights: ['카드->상세 직행', '상세->프로젝트 섹션 복귀', '스크롤 기반 목차 active'],
      },
      {
        id: 'layout',
        title: '레이아웃 전략',
        paragraphs: [
          '데스크톱에서는 3:7 분할 레이아웃으로 좌측은 탐색, 우측은 콘텐츠에 집중하도록 화면을 분리했습니다.',
          '우측 영역은 내부 스크롤 컨테이너로 동작해, 페이지 전체가 흔들리지 않고 본문에만 집중할 수 있게 구성했습니다.',
          '모바일/태블릿에서는 단일 컬럼으로 자동 전환해 스크롤 경험이 깨지지 않도록 반응형 폴백을 적용했습니다.',
        ],
      },
      {
        id: 'component',
        title: '컴포넌트 분리',
        paragraphs: [
          '프로젝트 카드, 상세 페이지, 라우트 유틸을 분리해 화면 책임을 작게 유지했습니다.',
          '상세 본문은 `detailSections` 데이터만 바꾸면 되도록 설계해 콘텐츠 운영 속도를 높였습니다.',
          '이 구조는 추후 섹션별 커스텀 블록(이미지, 코드, 표)을 추가하기 위한 기반으로도 사용할 수 있습니다.',
        ],
      },
      {
        id: 'routing',
        title: '라우팅 정책',
        paragraphs: [
          'GitHub Pages 환경을 고려해 해시 라우팅을 기본으로 선택했고, 프로젝트 slug를 이용해 상세 페이지를 안정적으로 식별합니다.',
          '잘못된 slug로 접근한 경우에는 not found 안내와 홈 복귀 링크를 제공해 사용자가 막히지 않게 처리했습니다.',
          '라우트 파싱 유틸은 별도 파일로 분리되어 향후 경로 패턴이 늘어나도 유지보수가 쉽습니다.',
        ],
      },
      {
        id: 'performance',
        title: '성능 고려사항',
        paragraphs: [
          '이미지는 지연 로딩과 decode 힌트를 유지해 초기 렌더링 부담을 줄였습니다.',
          '목차 클릭 스크롤은 대상 컨테이너 내부에서만 동작하게 하여 불필요한 레이아웃 계산을 줄였습니다.',
          '섹션 활성 상태는 현재 보이는 블록과의 거리 계산으로 단순하게 처리해 데이터가 늘어나도 안정적으로 동작합니다.',
        ],
        highlights: ['지연 로딩 유지', '컨테이너 내부 스크롤', '거리 기반 active 계산'],
      },
      {
        id: 'troubleshooting',
        title: '트러블슈팅 메모',
        paragraphs: [
          '복귀 시 첫 섹션이 잠깐 노출되는 현상은 초기 스크롤 위치 적용 타이밍과 관련된 문제였습니다.',
          '현재는 라우트 상태를 통해 복귀 섹션을 지정하고, 홈 화면에서 해당 섹션 위치로 정렬하는 방식으로 해결했습니다.',
          '브라우저별 스크롤 차이를 줄이기 위해 CSS와 스크롤 처리 로직을 함께 보정했습니다.',
        ],
      },
      {
        id: 'retrospective',
        title: '회고',
        paragraphs: [
          '이번 리팩터링의 핵심은 시각적 완성도보다 구조적 확장성에 우선순위를 둔 점입니다.',
          '처음부터 데이터 스키마를 섹션 단위로 정의해두니, 콘텐츠가 늘어도 코드 변경량이 크게 늘지 않았습니다.',
          '다음 단계에서는 각 섹션에 이미지, 인용, 코드 블록 같은 타입별 렌더러를 도입해 문서 표현력을 확장할 계획입니다.',
        ],
      },
      {
        id: 'next',
        title: '다음 확장 계획',
        paragraphs: [
          '프로젝트 상세 페이지를 추가하면서 카드 목록과 상세 콘텐츠를 느슨하게 연결하는 라우팅 구조를 적용했습니다.',
          '추후에는 프로젝트별 회고, 트러블슈팅, 아키텍처 다이어그램 등 긴 글 콘텐츠를 지속적으로 누적할 예정입니다.',
          '테스트 목적으로는 현재 더미 데이터가 충분히 길게 구성되어 있어 목차 이동, active 표시, 내부 스크롤 동작을 쉽게 확인할 수 있습니다.',
        ],
      },
    ],
  },
  {
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
    demoImages: [
      'https://images.unsplash.com/photo-1551281044-8b5bd95d8f25?auto=format&fit=crop&w=2200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=80',
    ],
    demoCaptions: ['모든 지표와 알림 흐름', '팀 조회 대시보드 스냅'],
    status: 'in-progress',
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
  },
  {
    id: 4,
    slug: 'consulting-resource-planner',
    title: 'Consulting Resource Planner',
    summary: '컨설팅 인력 배치와 일정 관리를 자동화한 내부 도구',
    period: '2024.11 - 2025.03',
    techStack: ['Spring Boot', 'Java', 'Oracle', 'MSSQL'],
    role: '요구사항 분석, 백엔드 개발, DB 모델링',
    description: '리소스 배치 시뮬레이션과 이력 관리 기능으로 운영 시간을 단축했습니다.',
    githubUrl: 'https://github.com/',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    demoImages: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=80',
    ],
    demoCaptions: ['스케줄 시뮬레이션', '배치 모니터 화면'],
    status: 'completed',
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
  },
  {
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
    demoImages: [
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2200&q=80',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=2200&q=80',
    ],
    demoCaptions: ['파이프라인 리포트', '지표 집계 뷰'],
    status: 'completed',
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
  },
  {
    id: 2,
    slug: 'legacy-system-modernization',
    title: 'Legacy System Modernization',
    summary: '기존 ERP 모듈을 웹 기반 환경으로 전환한 프로젝트',
    period: '2023.07 - 2024.01',
    techStack: ['Spring Framework', 'Java', 'Oracle', 'React'],
    role: '백엔드 마이그레이션 및 프론트 연동',
    description: '핵심 프로세스 API화와 화면 재구성으로 유지보수성을 향상했습니다.',
    githubUrl: 'https://github.com/',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    demoImages: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=80',
    ],
    demoCaptions: ['마이그레이션 흐름', 'API 작업 로그'],
    status: 'completed',
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
  },
  {
    id: 1,
    slug: 'team-collaboration-portal',
    title: 'Team Collaboration Portal',
    summary: '사내 협업과 문서 공유를 위한 포털 서비스',
    period: '2023.01 - 2023.05',
    techStack: ['Node.js', 'React', 'PostgreSQL'],
    role: '백엔드 개발 및 배포 자동화',
    description: '문서 권한관리, 공지, 댓글 기능을 통합하여 협업 효율을 높였습니다.',
    githubUrl: 'https://github.com/',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    demoImages: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80',
    ],
    demoCaptions: ['협업 UI 스냅샷', '배포 파이프라인뷰'],
    status: 'completed',
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
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
