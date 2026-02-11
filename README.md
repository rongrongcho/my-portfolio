# 이초롱 포트폴리오

React + TypeScript + Vite로 만든 개인 포트폴리오 웹사이트입니다.

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
```

빌드 결과물은 `dist/`에 생성됩니다.

## GitHub Pages 자동 배포
- `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`로 자동 배포됩니다.
- GitHub에서 `Settings > Pages > Build and deployment`를 `GitHub Actions`로 설정하세요.
- 배포 URL
- 프로젝트 저장소: `https://<github-id>.github.io/<repo-name>/`
- 유저 사이트 저장소(`<github-id>.github.io`): `https://<github-id>.github.io/`
