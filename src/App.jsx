function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.589 2 12.248c0 4.528 2.865 8.369 6.839 9.724.5.096.682-.223.682-.495 0-.244-.009-.891-.014-1.748-2.782.617-3.369-1.37-3.369-1.37-.455-1.19-1.11-1.507-1.11-1.507-.908-.636.069-.623.069-.623 1.004.072 1.531 1.056 1.531 1.056.892 1.567 2.341 1.114 2.91.852.091-.664.349-1.114.635-1.37-2.221-.258-4.556-1.14-4.556-5.075 0-1.121.39-2.038 1.029-2.756-.103-.259-.446-1.301.098-2.712 0 0 .839-.276 2.75 1.053A9.35 9.35 0 0 1 12 6.843c.85.004 1.705.118 2.504.346 1.909-1.329 2.747-1.053 2.747-1.053.546 1.411.203 2.453.1 2.712.64.718 1.027 1.635 1.027 2.756 0 3.944-2.339 4.813-4.566 5.066.359.319.679.947.679 1.908 0 1.378-.012 2.49-.012 2.829 0 .274.18.595.688.494C19.138 20.613 22 16.774 22 12.248 22 6.589 17.523 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.08-.81-1.94-1.91-1.94-1.1 0-1.91.86-1.91 1.94 0 1.06.8 1.94 1.88 1.94h.02c1.12 0 1.92-.88 1.92-1.94ZM20.44 13.01c0-3.48-1.86-5.09-4.34-5.09-2 0-2.9 1.12-3.4 1.91V8.5H9.31c.04.88 0 11.5 0 11.5h3.39v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.54V20H20v-6.99c0 .01.44.01.44 0Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.14.5L12 11.29 18.86 6H5.14ZM19 7.27l-6.39 4.92a1 1 0 0 1-1.22 0L5 7.27v11.23a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V7.27Z"
      />
    </svg>
  );
}

const projects = [
  {
    title: "Multi-Agent AI Workspace",
    blurb:
      "A production-style AI workspace with authenticated sessions, structured multi-agent workflows, streaming outputs, and persistent history.",
    stack: ["FastAPI", "React", "SQLAlchemy", "PostgreSQL-ready", "JWT", "Docker"],
    kind: "AI Systems",
    outcomes: ["Multi-agent planner, researcher, and executor flow", "Streaming workflow stages and saved user sessions"],
  },
  {
    title: "AI Project Management Platform",
    blurb:
      "A full-stack project management platform with sprint planning, task breakdown workflows, and a RAG-style code assistant.",
    stack: ["Spring Boot", "React", "Java", "REST APIs", "AI Workflows"],
    kind: "Full-Stack Product",
    outcomes: ["AI-assisted sprint planning and task decomposition", "Backend and frontend architecture for a project operations workspace"],
  },
  {
    title: "TestForge",
    blurb:
      "A Python automation framework for UI and API testing with reusable assertions, schema validation, fixtures, reporting, and page-object structure.",
    stack: ["Python", "Pytest", "Playwright", "Requests", "Pydantic"],
    kind: "Developer Tooling",
    outcomes: ["Reusable API schema validation and stronger test assertions", "Page-object UI automation foundation with maintainable fixtures"],
  },
];

const metrics = [
  { value: "3", label: "featured builds", detail: "AI systems, full-stack products, and developer tooling" },
  { value: "2", label: "focus areas", detail: "AI engineering and DevOps-oriented software delivery" },
  { value: "6+", label: "core technologies", detail: "Python, Java, C++, React, SQLAlchemy, Docker, and more" },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["React", "NumPy", "Pandas", "SQLAlchemy", "Pytest", "FastAPI"],
  },
  {
    title: "Engineering Focus",
    items: ["AI Systems", "Full-Stack Development", "DevOps Foundations", "Automation", "API Design"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Vite", "Playwright", "REST APIs"],
  },
];

const highlights = [
  "Software engineering student at San Jose State University",
  "Interested in specializing in AI and DevOps",
  "Built multiple full-stack projects across Java, Python, and React",
  "Comfortable moving between backend systems, frontend interfaces, and developer tooling",
];

const githubUrl = "https://github.com/abdullahahmed001";
const linkedinUrl = "https://www.linkedin.com/in/abdullahahmed001/";
const emailAddress = "hafahmed.abdullah22@gmail.com";
const resumePath = "./abdullah-ahmed-resume-2026.pdf";

export default function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <span className="topbar__name">Abdullah Ahmed</span>
        <nav className="topbar__nav">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__content">
          <span className="eyebrow">Abdullah Ahmed</span>
          <h1>Software engineering student building AI-driven and full-stack systems.</h1>
          <p>
            I am a software engineering student at San Jose State University interested in
            specializing in AI and DevOps. I enjoy building practical software across the
            stack, from backend systems and automation to React-based product experiences.
          </p>
          <div className="hero__actions">
            <a className="button" href="#projects">
              View Projects
            </a>
            <a className="button button--ghost" href="#skills">
              Explore Skills
            </a>
            <a className="button button--ghost" href={resumePath}>
              View Resume
            </a>
          </div>
          <div className="social-row" aria-label="social links">
            <a className="social-link" href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a className="social-link" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a className="social-link" href={`mailto:${emailAddress}`} aria-label="Email">
              <MailIcon />
              <span>Email</span>
            </a>
          </div>
        </div>
        <div className="hero__panel">
          <span className="eyebrow">Current Direction</span>
          <ul className="clean-list">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="eyebrow">About</span>
          <h2>Focused on building systems that combine engineering depth with product usefulness.</h2>
        </div>
        <div className="about-grid">
          <article className="panel">
            <h3>What I Like Building</h3>
            <p>
              I am especially interested in projects that sit at the intersection of software
              engineering, AI, and platform thinking. That includes agent workflows, backend
              APIs, full-stack product interfaces, and tools that improve developer or user
              efficiency.
            </p>
          </article>
          <article className="panel">
            <h3>Where I Want To Grow</h3>
            <p>
              My long-term direction is toward AI systems and DevOps. I want to keep getting
              stronger in scalable backend design, production workflows, cloud tooling, and
              the engineering patterns behind reliable AI-powered software.
            </p>
          </article>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="panel metric-card" key={metric.label}>
              <span className="metric-card__value">{metric.value}</span>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section__header">
          <span className="eyebrow">Skills</span>
          <h2>Core technologies and engineering areas I work with.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="panel skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section__header">
          <span className="eyebrow">Projects</span>
          <h2>Selected builds across AI workflows, full-stack systems, and automation.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="panel project-card" key={project.title}>
              <div className="project-card__top">
                <span className="project-kind">{project.kind}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.blurb}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <ul className="outcome-list">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <div className="project-card__actions">
                <a className="button button--ghost" href={githubUrl} target="_blank" rel="noreferrer">
                  View GitHub Profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__header">
          <span className="eyebrow">Strengths</span>
          <h2>Combining software fundamentals with modern product and AI tooling.</h2>
        </div>
        <div className="strength-grid">
          <article className="panel">
            <h3>Full-Stack Delivery</h3>
            <p>
              I have built projects that cover frontend interfaces, backend APIs, persistence,
              authentication, and project structure end to end.
            </p>
          </article>
          <article className="panel">
            <h3>AI Curiosity</h3>
            <p>
              I am actively exploring AI workflows, multi-agent patterns, and practical ways
              to bring intelligent features into real software products.
            </p>
          </article>
          <article className="panel">
            <h3>DevOps Interest</h3>
            <p>
              I have been exposed to Docker and I want to keep growing in deployment,
              infrastructure, automation, and reliable software delivery practices.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section__header">
          <span className="eyebrow">Contact</span>
          <h2>Open to opportunities where I can keep growing in AI, DevOps, and full-stack engineering.</h2>
        </div>
        <div className="contact-grid">
          <article className="panel contact-card">
            <h3>Where To Reach Me</h3>
            <div className="contact-list">
              <a href={`mailto:${emailAddress}`}>
                <MailIcon />
                <span>{emailAddress}</span>
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <GitHubIcon />
                <span>GitHub Profile</span>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <LinkedInIcon />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </article>
          <article className="panel contact-card">
            <h3>What I Am Looking For</h3>
            <p>
              I am interested in software engineering opportunities where I can contribute to
              backend systems, full-stack products, AI-powered features, or infrastructure and
              platform workflows.
            </p>
            <div className="hero__actions">
              <a className="button" href={`mailto:${emailAddress}`}>
                Contact Me
              </a>
              <a className="button button--ghost" href={resumePath}>
                Open Resume
              </a>
              <a className="button button--ghost" href={githubUrl} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <span>Abdullah Ahmed</span>
        <span>Software Engineering Student at San Jose State University</span>
      </footer>
    </main>
  );
}
