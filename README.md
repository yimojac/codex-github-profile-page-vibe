# GitHub Pages 개발자 포트폴리오 (v1)

정적 `HTML/CSS/JS`로 만든 원페이지 개발자 포트폴리오 템플릿입니다.

## 파일 구조

```text
.
├─ index.html
├─ styles.css
├─ script.js
├─ .github/
│  └─ workflows/
│     └─ deploy-pages.yml
└─ assets/
   ├─ favicon-placeholder.svg
   └─ profile-placeholder.svg
```

## 로컬 미리보기

```bash
python -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속

## 콘텐츠 교체 포인트

- 파일: `script.js`
- 객체: `portfolioData`
- 교체 항목:
  - `profile.name`, `profile.role`, `profile.summary`, `profile.location`
  - `skills` 배열
  - `projects` 배열 (`title`, `description`, `tech`, `githubUrl`, `demoUrl`, `highlights`)
  - `contacts.email`, `contacts.github`
- 이미지:
  - 프로필: `assets/profile-placeholder.svg`
  - 파비콘: `assets/favicon-placeholder.svg`

## 배포 방식

- GitHub Pages: **프로젝트 페이지**
- URL 형태: `https://<github-username>.github.io/<repo-name>/`
- 배포 자동화: `main` 브랜치 push 시 GitHub Actions에서 자동 배포

## GitHub Pages 설정 (프로젝트 페이지 + Actions)

1. GitHub에 일반 저장소 생성  
   예: `codex-github-profile-page-vibe` (중요: `<username>.github.io` 저장소가 아님)
2. 저장소 `Settings > Pages`로 이동
3. `Build and deployment`의 `Source`를 **GitHub Actions**로 선택
4. 이 저장소의 `main`에 push하면 `.github/workflows/deploy-pages.yml`가 자동 실행
5. 배포 완료 후 `https://<github-username>.github.io/<repo-name>/` 접속

## gh 인증 관련 (디바이스 코드)

`gh auth login --web` 실행 시 보통 아래 흐름이 맞습니다.

1. 터미널에 1회용 디바이스 코드 표시
2. 브라우저에서 `github.com/login/device` 또는 `Authorize your device` 페이지 열림
3. 코드 입력 후 승인
4. 터미널에 인증 성공 메시지 출력

인증이 끝나면 같은 세션에서 바로 아래 작업을 이어서 할 수 있습니다.

- `gh repo create ...`
- `git remote add origin ...`
- `git push -u origin main`

## 점검 체크리스트

- 내비게이션/CTA로 섹션 이동 정상 동작
- 프로젝트 Demo/GitHub 링크 정상 동작
- 연락처 `mailto`/GitHub 링크 정상 동작
- 모바일(375px), 태블릿(768px), 데스크톱(1280px) 레이아웃 점검
- Lighthouse(Performance/Accessibility/Best Practices) 85+ 목표
