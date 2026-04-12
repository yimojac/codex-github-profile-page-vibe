/**
 * Portfolio data schema
 * profile: { name, role, summary, location }
 * skills: Array<{ category, items: string[] }>
 * projects: Array<{ title, description, tech: string[], githubUrl, demoUrl, highlights: string[] }>
 * contacts: { email, github }
 */
const portfolioData = {
  profile: {
    name: "이명준",
    role: "사업기획",
    summary:
      "사내벤처 프로그램 기획·운영, 오픈이노베이션 협업, CBDC 결제수단 도입 전략을 추진하며 실행 가능한 사업 기회를 발굴합니다.",
    location: "Based in Seoul, South Korea",
  },
  skills: [
    {
      category: "Language",
      items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      category: "Framework",
      items: ["React", "Next.js", "Node.js", "Express"],
    },
    {
      category: "Tooling",
      items: ["GitHub Actions", "Vite", "Jest", "Playwright"],
    },
    {
      category: "Collaboration",
      items: ["Figma", "Notion", "Slack", "Linear"],
    },
  ],
  projects: [
    {
      title: "채용 공고 탐색 대시보드",
      description:
        "여러 채용 채널 데이터를 한 화면에서 비교할 수 있도록 탐색 경험을 개선한 웹 대시보드입니다.",
      tech: ["React", "TypeScript", "TanStack Query", "Chart.js"],
      githubUrl: "https://github.com/github-username/job-dashboard",
      demoUrl: "https://demo.example.com/job-dashboard",
      highlights: [
        "검색/필터 UX를 재구성해 탐색 시간을 평균 34% 단축",
        "컴포넌트 단위 리팩터링으로 신규 기능 추가 시간을 2배 개선",
        "에러 경계와 로딩 상태를 표준화해 사용자 이탈을 감소",
      ],
    },
    {
      title: "팀 문서 자동화 워크플로",
      description:
        "반복되는 문서 작성 업무를 자동화해 기획-개발 협업 시간을 줄인 내부 도구입니다.",
      tech: ["Node.js", "Express", "OpenAPI", "SQLite"],
      githubUrl: "https://github.com/github-username/docs-automation",
      demoUrl: "https://demo.example.com/docs-automation",
      highlights: [
        "템플릿 기반 생성기로 주간 문서 작성 리드타임 40% 감소",
        "권한 분리와 감사 로그를 추가해 운영 안정성 향상",
        "문서 포맷 검증을 CI에 연결해 품질 편차 최소화",
      ],
    },
    {
      title: "개인 금융 리포트 서비스",
      description:
        "소비 패턴을 시각화하고 절약 목표를 추적할 수 있는 개인 재무 관리 서비스입니다.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Recharts"],
      githubUrl: "https://github.com/github-username/finance-reporter",
      demoUrl: "https://demo.example.com/finance-reporter",
      highlights: [
        "월별 리포트 생성 과정을 자동화해 재방문율 증가",
        "접근성 기준을 반영해 키보드 전용 내비게이션 지원",
        "캐싱 전략 조정으로 주요 화면 로딩 속도 27% 개선",
      ],
    },
  ],
  contacts: {
    email: "youremail@example.com",
    github: "https://github.com/github-username",
  },
};

const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderSkills();
  renderProjects();
  renderContacts();
  bindSmoothScroll();
  setupActiveNavigation();
  setupReveal();
  setFooterYear();
});

function renderProfile() {
  const { profile } = portfolioData;
  $("profile-name").textContent = profile.name;
  $("profile-role").textContent = profile.role;
  $("profile-summary").textContent = profile.summary;
  $("profile-location").textContent = profile.location;
}

function renderSkills() {
  const container = $("skills-grid");
  container.innerHTML = "";

  portfolioData.skills.forEach((group, index) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    card.style.setProperty("--reveal-delay", `${index * 80}ms`);

    const title = document.createElement("h3");
    title.textContent = group.category;

    const badgeList = document.createElement("ul");
    badgeList.className = "badge-list";

    group.items.forEach((item) => {
      const badge = document.createElement("li");
      badge.textContent = item;
      badgeList.appendChild(badge);
    });

    card.append(title, badgeList);
    container.appendChild(card);
  });
}

function renderProjects() {
  const container = $("projects-grid");
  container.innerHTML = "";

  portfolioData.projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.setProperty("--reveal-delay", `${index * 90}ms`);

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const highlights = document.createElement("ul");
    highlights.className = "project-highlights";
    project.highlights.forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      highlights.appendChild(item);
    });

    const tech = document.createElement("div");
    tech.className = "project-tech";
    project.tech.forEach((item) => {
      const token = document.createElement("span");
      token.textContent = item;
      tech.appendChild(token);
    });

    const links = document.createElement("div");
    links.className = "project-links";
    links.append(
      createExternalLink(project.demoUrl, "Demo"),
      createExternalLink(project.githubUrl, "GitHub"),
    );

    card.append(title, description, highlights, tech, links);
    container.appendChild(card);
  });
}

function renderContacts() {
  const container = $("contact-links");
  container.innerHTML = "";

  const emailLink = document.createElement("a");
  emailLink.className = "contact-link";
  emailLink.href = `mailto:${portfolioData.contacts.email}`;
  emailLink.textContent = `Email: ${portfolioData.contacts.email}`;

  const githubLink = createExternalLink(portfolioData.contacts.github, "GitHub 프로필");
  githubLink.classList.add("contact-link");

  container.append(emailLink, githubLink);
}

function createExternalLink(url, label) {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  return link;
}

function bindSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("href");
      if (!targetSelector || targetSelector === "#") {
        return;
      }

      const target = document.querySelector(targetSelector);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupActiveNavigation() {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const links = Array.from(document.querySelectorAll(".main-nav a"));
  let current = "about";

  const toggle = (id) => {
    links.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  toggle(current);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          current = entry.target.id;
          toggle(current);
        }
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.01,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupReveal() {
  const targets = document.querySelectorAll(".reveal, .skill-card, .project-card");
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.1,
    },
  );

  targets.forEach((item) => observer.observe(item));
}

function setFooterYear() {
  $("current-year").textContent = String(new Date().getFullYear());
}
