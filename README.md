# 이초롱 포트폴리오

React + TypeScript + Vite로 제작한 개인 포트폴리오 웹사이트입니다.  
프로필, 프로젝트 목록, 프로젝트 상세, 커리어 섹션을 단일 페이지 흐름으로 구성했습니다.

## Live Demo
- 배포 URL: https://rongrongcho.github.io/my-portfolio/

## 주요 기능
- 섹션 기반 홈 화면 (Profile / Projects / Career)
- 프로젝트 카드 목록, 필터, 정렬, 페이지네이션
- 프로젝트 상세 페이지 (목차, 섹션별 설명, 데모 이미지 뷰어)
- 해시 라우팅 기반 페이지 전환

## 프로젝트 구조
```text
src/
  components/      # 화면 컴포넌트
  pages/           # Home / Project Detail 페이지
  data/            # profile, career, projects 데이터
  styles/          # 기능 단위 CSS 파일
  types/           # 공통 타입
```

## 기술 스택
- React 19
- TypeScript
- Vite
- ESLint

## 로컬 실행
```bash
npm install
npm run dev
```

## 빌드
```bash
npm run build
npm run preview
```

