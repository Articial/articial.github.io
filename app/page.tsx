const projects = [
  {
    number: "01",
    title: "Autofix",
    kicker: "Product / Web development",
    description:
      "A clearer digital journey for vehicle service—from discovery to booking.",
    stack: "TypeScript · Product thinking",
    href: "https://autofix-coral.vercel.app",
    source: "https://github.com/Articial/autofix",
    tone: "light",
    visual: "signal",
  },
  {
    number: "02",
    title: "BMW Market Clustering",
    kicker: "Data / Market analysis",
    description:
      "Market segments uncovered through hierarchical clustering across price, year, and mileage.",
    stack: "Jupyter · Data analysis",
    href: "https://github.com/Articial/Hierarchy-Clustering-Kelompok-2",
    source: "https://github.com/Articial/Hierarchy-Clustering-Kelompok-2",
    tone: "dark",
    visual: "clusters",
  },
  {
    number: "03",
    title: "Chat Saver",
    kicker: "Utility / Information design",
    description:
      "A lightweight tool for keeping useful conversations organized and easy to revisit.",
    stack: "JavaScript · Utility",
    href: "https://github.com/Articial/chat-saver",
    source: "https://github.com/Articial/chat-saver",
    tone: "dark",
    visual: "archive",
  },
  {
    number: "04",
    title: "Chickunyah",
    kicker: "Frontend / Web experiment",
    description:
      "A playful web experiment built from the fundamentals and shipped as a live experience.",
    stack: "HTML · Frontend",
    href: "https://chickunyah.vercel.app",
    source: "https://github.com/Articial/chickunyah",
    tone: "light",
    visual: "orbit",
  },
];

const capabilities = [
  {
    index: "01",
    title: "Product & Web",
    copy: "Useful interfaces, thoughtful flows, and clean implementation from first idea to shipped page.",
  },
  {
    index: "02",
    title: "Data & Operations",
    copy: "Analysis, data management, and systems that make information easier to act on.",
  },
  {
    index: "03",
    title: "Brand & Marketing",
    copy: "Positioning, marketing analysis, and clear brand narratives grounded in real signals.",
  },
  {
    index: "04",
    title: "Project Direction",
    copy: "Practical planning, structured collaboration, and momentum across moving parts.",
  },
];

function Asterisk() {
  return <span className="asterisk" aria-hidden="true">✳</span>;
}

export default function Home() {
  return (
    <main id="top">
      <div className="page-frame">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Articial, back to top">
            <Asterisk />
            <span>Articial</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#services">Expertise</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-cta" href="#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-meta">
            <p><span className="red-square" /> Independent digital practice</p>
            <p>Jakarta · Indonesia</p>
          </div>
          <h1 id="hero-title">
            Digital systems
            <span>for ideas that</span>
            need to move.
          </h1>
          <div className="hero-foot">
            <p className="hero-intro">
              I&apos;m Akbar—a multidisciplinary builder working across web,
              data, operations, and brand strategy.
            </p>
            <a className="circle-button" href="#work" aria-label="Explore selected work">
              <span>Explore</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-grid-mark" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
        </section>

        <div className="discipline-strip" aria-label="Professional disciplines">
          <p><span>01</span> Web development</p>
          <p><span>02</span> Data & operations</p>
          <p><span>03</span> Marketing analysis</p>
          <p><span>04</span> Brand strategy</p>
        </div>

        <section className="statement" id="about">
          <div className="section-label">
            <span className="red-square" /> Who I am
          </div>
          <p className="statement-copy">
            I connect <strong>technology</strong>, information, and strategy to
            turn scattered ideas into <em>clear digital outcomes.</em>
          </p>
          <div className="statement-notes">
            <p>Curious by nature. Practical by choice.</p>
            <p>
              The work can be a website, an analysis, a process, or a sharper
              story. The principle stays the same: make it useful and make it clear.
            </p>
          </div>
        </section>

        <section className="work" id="work">
          <div className="work-heading">
            <div>
              <div className="section-label"><span className="red-square" /> Selected work</div>
              <h2>Built with intent.</h2>
            </div>
            <p>Four selected explorations across products, data, and the web.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.title}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <p>{project.kicker}</p>
                  <span>2026</span>
                </div>
                <div className={`project-visual ${project.visual}`} aria-hidden="true">
                  {project.visual === "signal" && <><i /><i /><i /><i /></>}
                  {project.visual === "clusters" && <><i /><i /><i /><i /></>}
                  {project.visual === "archive" && <><i>KEEP</i><i>FIND</i><i>RETURN</i></>}
                  {project.visual === "orbit" && <><i /><i /><i /></>}
                </div>
                <div className="project-body">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <p className="project-stack">{project.stack}</p>
                </div>
                <div className="project-links">
                  <a href={project.source} target="_blank" rel="noreferrer">Source <span>↗</span></a>
                  {project.href !== project.source && (
                    <a href={project.href} target="_blank" rel="noreferrer">View live <span>↗</span></a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-intro">
            <div className="section-label"><span className="red-square" /> Areas of practice</div>
            <h2>One perspective.<br />Multiple lenses.</h2>
            <p>
              The best work rarely fits in one job title. I move between making,
              measuring, organizing, and communicating.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <Asterisk />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="numbers" aria-label="Working principles">
          <div className="section-label"><span className="red-square" /> By the numbers</div>
          <div className="numbers-grid">
            <article><strong>01</strong><h3>Clear direction</h3><p>One shared definition of what good looks like.</p></article>
            <article><strong>04</strong><h3>Connected disciplines</h3><p>Technology, data, operations, and brand.</p></article>
            <article><strong>100%</strong><h3>Bias to shipping</h3><p>Ideas become real when they reach people.</p></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-mark"><Asterisk /></div>
          <div>
            <p>Have a useful problem to solve?</p>
            <h2>Let&apos;s make it<br />clear—and real.</h2>
          </div>
          <a href="https://github.com/Articial" target="_blank" rel="noreferrer">
            Start on GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>

        <footer>
          <a className="brand" href="#top"><Asterisk /><span>Articial</span></a>
          <p>Akbar Alfa · Multidisciplinary digital builder</p>
          <p>© {new Date().getFullYear()} · Jakarta</p>
        </footer>
      </div>
    </main>
  );
}
