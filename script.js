/**
 * Portfolio data schema
 * profile: { name, role, summary, location }
 * skills: Array<{ category, items: string[] }>
 * projects: Array<{ title, description, focus: string[], caseUrl, referenceUrl, highlights: string[] }>
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
      category: "시장/고객 분석",
      items: [
        "시장 규모 산정(TAM/SAM/SOM)",
        "고객 세그먼트 정의",
        "경쟁사/대체재 분석",
        "정성·정량 인사이트 도출",
      ],
    },
    {
      category: "사업 전략 수립",
      items: [
        "신사업 기회 발굴",
        "비즈니스 모델 설계",
        "수익성/손익 구조 검토",
        "중장기 로드맵 수립",
      ],
    },
    {
      category: "실행 및 운영",
      items: [
        "KPI/OKR 설계",
        "유관부서 협업 리딩",
        "프로젝트 일정·리스크 관리",
        "PoC 및 파일럿 운영",
      ],
    },
    {
      category: "문서화·커뮤니케이션",
      items: [
        "경영진 보고 자료 작성",
        "제안서/사업계획서 작성",
        "의사결정 회의 퍼실리테이션",
        "대내외 파트너 커뮤니케이션",
      ],
    },
  ],
  projects: [
    {
      title: "사내벤처 프로그램 고도화",
      description:
        "아이디어 접수부터 사내 실증까지 단계별 평가 체계를 재설계해, 실행력 중심의 사내벤처 운영 모델을 구축한 사례입니다.",
      focus: [
        "시장성 검증 프레임 설계",
        "단계 게이트 심사 체계 운영",
        "예산·리소스 배분 우선순위화",
        "성과지표(KPI) 구조 정비",
      ],
      caseUrl: "https://demo.example.com/internal-venture-program",
      referenceUrl: "https://github.com/github-username/internal-venture-program",
      highlights: [
        "연간 사내벤처 제안 접수 건수 1.8배 확대",
        "1차 검토 리드타임 3주에서 8일로 단축",
        "파일럿 전환율 22%에서 37%로 개선",
      ],
    },
    {
      title: "오픈이노베이션 PoC 연계 프로그램",
      description:
        "스타트업·외부 파트너와 사내 사업부를 연결해 PoC를 빠르게 실행할 수 있도록 과제 발굴-매칭-평가 프로세스를 통합한 사례입니다.",
      focus: [
        "협업 과제 소싱 및 우선순위화",
        "사내 요구사항-파트너 역량 매칭",
        "PoC 운영 가이드 및 일정 관리",
        "성과평가 및 후속사업 전환 설계",
      ],
      caseUrl: "https://demo.example.com/open-innovation-poc",
      referenceUrl: "https://github.com/github-username/open-innovation-poc",
      highlights: [
        "연간 협업 과제 발굴 수 14건에서 31건으로 확대",
        "PoC 착수까지 평균 소요기간 45일에서 19일로 단축",
        "후속 계약/공동사업 전환율 29% 달성",
      ],
    },
    {
      title: "CBDC 결제수단 도입 추진",
      description:
        "규제·기술·운영 관점을 통합해 CBDC 결제수단 도입 타당성을 검토하고 단계별 도입 로드맵을 수립한 사업기획 프로젝트입니다.",
      focus: [
        "정책·규제 영향 분석",
        "결제 시나리오 및 고객 여정 설계",
        "운영 리스크 및 통제 방안 수립",
        "도입 단계별 실행 로드맵 설계",
      ],
      caseUrl: "https://demo.example.com/cbdc-payment-rollout",
      referenceUrl: "https://github.com/github-username/cbdc-payment-rollout",
      highlights: [
        "핵심 이해관계자 합의안 도출 기간 2개월 단축",
        "시범 도입 대상 채널 3개 선정 및 PoC 착수",
        "운영 리스크 대응 체크리스트 표준안 수립",
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

    const focus = document.createElement("div");
    focus.className = "project-focus";
    project.focus.forEach((item) => {
      const token = document.createElement("span");
      token.textContent = item;
      focus.appendChild(token);
    });

    const links = document.createElement("div");
    links.className = "project-links";
    links.append(
      createExternalLink(project.caseUrl, "케이스 보기"),
      createExternalLink(project.referenceUrl, "관련 자료"),
    );

    card.append(title, description, highlights, focus, links);
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

  const githubLink = createExternalLink(portfolioData.contacts.github, "온라인 프로필");
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
