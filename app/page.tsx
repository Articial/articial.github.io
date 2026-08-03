const projects = [
  {
    number: "01",
    title: "Autofix",
    description:
      "A TypeScript web application exploring a simpler, more direct vehicle-service experience.",
    stack: "TypeScript · Web App",
    href: "https://autofix-coral.vercel.app",
    source: "https://github.com/Articial/autofix",
  },
  {
    number: "02",
    title: "Chat Saver",
    description:
      "A JavaScript utility project for keeping conversations organized and easier to revisit.",
    stack: "JavaScript · Utility",
    href: "https://github.com/Articial/chat-saver",
    source: "https://github.com/Articial/chat-saver",
  },
  {
    number: "03",
    title: "Chickunyah",
    description:
      "A lightweight web experiment built with the fundamentals and shipped as a live experience.",
    stack: "HTML · Frontend",
    href: "https://chickunyah.vercel.app",
    source: "https://github.com/Articial/chickunyah",
  },
  {
    number: "04",
    title: "BMW Market Clustering",
    description:
      "Market segmentation analysis using hierarchical clustering across price, production year, and mileage.",
    stack: "Jupyter · Data Analysis",
    href: "https://github.com/Articial/Hierarchy-Clustering-Kelompok-2",
    source: "https://github.com/Articial/Hierarchy-Clustering-Kelompok-2",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Articial, back to top">
          ARTICIAL<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="status"
          href="https://github.com/Articial"
          target="_blank"
          rel="noreferrer"
        >
          <span className="status-dot" aria-hidden="true" />
          Open to build
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Akbar · Developer / Builder</p>
        <h1>
          Digital ideas,
          <br />
          <span>built to work.</span>
        </h1>
        <div className="hero-bottom">
          <p className="intro">
            I turn ideas into useful digital experiences—combining clean code,
            thoughtful interfaces, and a bias toward shipping.
          </p>
          <a className="round-link" href="#work" aria-label="Explore selected work">
            <span>Explore</span>
            <span className="arrow" aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-dot" />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          DESIGN WITH INTENT <span>✦</span> BUILD WITH PURPOSE <span>✦</span>
          SHIP WHAT MATTERS <span>✦</span> DESIGN WITH INTENT <span>✦</span>
        </div>
      </div>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <p className="section-index">01 / Selected work</p>
          <h2>Things I&apos;ve made.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <span className="project-number">{project.number}</span>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <p className="project-stack">{project.stack}</p>
              <div className="project-actions">
                <a href={project.source} target="_blank" rel="noreferrer">
                  Code <span aria-hidden="true">↗</span>
                </a>
                {project.href !== project.source && (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Live <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <p className="section-index">02 / About</p>
        <div className="about-grid">
          <h2>
            Curious by nature.
            <br />
            Practical by choice.
          </h2>
          <div className="about-copy">
            <p>
              I&apos;m Akbar, a developer working under the name Articial. I enjoy
              taking an early idea, finding the clearest version of it, and
              bringing it all the way to the web.
            </p>
            <p>
              My projects move between frontend development, useful tools, and
              data exploration. The common thread is simple: learn fast, make
              deliberately, and leave things better than I found them.
            </p>
          </div>
          <div className="capabilities">
            <p>Currently exploring</p>
            <ul>
              <li>Web Development</li>
              <li>Product Thinking</li>
              <li>Data Exploration</li>
              <li>Creative Technology</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="section-index">03 / Contact</p>
        <div className="contact-grid">
          <h2>Have an idea?</h2>
          <a
            className="contact-link"
            href="https://github.com/Articial"
            target="_blank"
            rel="noreferrer"
          >
            Let&apos;s build it <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a href="#top">ARTICIAL.</a>
        <p>Built with intention · Jakarta, Indonesia</p>
        <p>© {new Date().getFullYear()} Akbar</p>
      </footer>
    </main>
  );
}
