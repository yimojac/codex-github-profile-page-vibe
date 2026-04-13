# GitHub Pages 사업기획 포트폴리오 (v2)

정적 `HTML/CSS/JS`로 만든 원페이지 사업기획 포트폴리오 템플릿입니다.
핵심 역량과 주요 사례를 중심으로 성과를 전달하도록 구성되어 있습니다.

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
  - `skills` 배열 (`category`, `items`)
  - `projects` 배열 (`title`, `description`, `focus`, `caseUrl`, `referenceUrl`, `highlights`)
  - `contacts.email`, `contacts.github` (온라인 프로필 링크 용도)
- 이미지:
  - 프로필: `assets/profile-placeholder.svg`
  - 파비콘: `assets/favicon-placeholder.svg`

## UI 카피 가이드

- 내비게이션: `소개`, `역량`, `사례`, `연락처`
- 섹션 타이틀: `핵심 역량`, `주요 사례`
- 사례 링크 라벨: `케이스 보기`, `관련 자료`

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

## 점검 체크리스트

- 내비게이션/CTA로 섹션 이동 정상 동작
- 사례 카드의 `focus` 배지 정상 노출
- `케이스 보기`/`관련 자료` 링크 정상 동작
- 연락처 `mailto`/온라인 프로필 링크 정상 동작
- 모바일(375px), 태블릿(768px), 데스크톱(1280px) 레이아웃 점검
