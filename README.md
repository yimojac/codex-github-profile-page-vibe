# GitHub Pages 개발자 포트폴리오 (v1)

정적 `HTML/CSS/JS`로 만든 원페이지 개발자 포트폴리오 템플릿입니다.  
한국어 단일, 취업 지원용 흐름(소개 → 기술 → 프로젝트 → 연락처)을 기준으로 구성했습니다.

## 파일 구조

```text
.
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   ├─ favicon-placeholder.svg
   └─ profile-placeholder.svg
```

## 로컬에서 미리보기

브라우저로 `index.html`을 직접 열어도 되지만, 간단한 로컬 서버 사용을 권장합니다.

```bash
python -m http.server 8080
```

그 뒤 브라우저에서 `http://localhost:8080` 접속

## 콘텐츠 교체 포인트

### 1) 기본 정보/기술/프로젝트/연락처
- 파일: `script.js`
- 객체: `portfolioData`
- 교체 항목:
  - `profile.name`, `profile.role`, `profile.summary`, `profile.location`
  - `skills` 배열
  - `projects` 배열(각 프로젝트의 `title`, `description`, `tech`, `githubUrl`, `demoUrl`, `highlights`)
  - `contacts.email`, `contacts.github`

### 2) 프로필 이미지
- 파일 경로: `assets/profile-placeholder.svg`
- 원하는 이미지 파일로 교체하고 `index.html`의 `<img src>`를 맞춰 주세요.
- 브라우저 탭 아이콘은 `assets/favicon-placeholder.svg`를 교체하면 됩니다.

### 3) 페이지 타이틀/메타 설명
- 파일: `index.html`
- `<title>`, `<meta name="description">`를 본인 정보에 맞게 수정

## GitHub Pages 배포 (`<github-username>.github.io`)

1. GitHub에서 저장소 이름을 `<github-username>.github.io`로 생성
2. 이 프로젝트 파일을 저장소 루트에 업로드
3. 기본 브랜치를 `main`으로 맞춤
4. GitHub 저장소 `Settings > Pages`에서 `Deploy from a branch`
5. Branch: `main`, Folder: `/(root)` 선택 후 저장
6. 배포 완료 후 `https://<github-username>.github.io` 접속

## 점검 체크리스트

- 내비게이션/CTA 클릭 시 해당 섹션으로 이동하는지
- 프로젝트 링크(Demo/GitHub), 연락처 링크(`mailto`, GitHub)가 정상 동작하는지
- 모바일(375px), 태블릿(768px), 데스크톱(1280px)에서 레이아웃이 깨지지 않는지
- Lighthouse에서 Performance/Accessibility/Best Practices 각 항목 85+ 달성 여부

## v2 확장 아이디어

- 한국어/영어 다국어 토글
- 프로젝트 상세 페이지 분리
- 블로그 또는 글 모아보기 섹션 추가
- 외부 폼 서비스 연동(Formspree 등)
