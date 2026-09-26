const projects = [
  { number: "01", title: "Autofix", category: "Product / Web development", description: "A clearer digital journey for vehicle service, from discovery to booking.", href: "https://autofix-coral.vercel.app" },
  { number: "02", title: "BMW Market Clustering", category: "Data / Market analysis", description: "Finding useful market segments across price, year, and mileage.", href: "https://github.com/Articial/Hierarchy-Clustering-Kelompok-2" },
  { number: "03", title: "Chat Saver", category: "Utility / Information design", description: "A lightweight way to keep useful conversations easy to find.", href: "https://github.com/Articial/chat-saver" },
  { number: "04", title: "Chickunyah", category: "Frontend / Web experiment", description: "A playful web experiment built and shipped as a live experience.", href: "https://chickunyah.vercel.app" },
];

export default function Home() {
  return (
    <main id="top" className="desktop">
      <div className="portfolio-window">
        <header className="window-bar">
          <a className="wordmark" href="#top" aria-label="Articial, back to top"><span className="wordmark-dot" />articial<span>.tech</span></a>
          <span className="window-address">articial.tech / akbar</span>
          <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact ↗</a></nav>
        </header>
        <div className="content-wrap">
          <section className="intro" aria-labelledby="intro-title">
            <div className="avatar" role="img" aria-label="Articial monogram">A</div>
            <p className="eyebrow intro-label">Independent digital practice · Jakarta, Indonesia</p>
            <h1 id="intro-title">Hi, I&apos;m Akbar — I build useful digital things. <span>Across web, data, and strategy.</span></h1>
            <p className="intro-copy">I connect technology, information, and clear thinking to turn scattered ideas into digital experiences people can use.</p>
            <div className="intro-actions">
              <a className="intro-note" href="#about" aria-label="Read my approach"><span className="play-icon">↗</span><span className="waveform" aria-hidden="true">{Array.from({ length: 34 }, (_, i) => <i key={i} style={{ height: `${7 + ((i * 13 + i * i * 3) % 23)}px` }} />)}</span><span>Read my approach</span><span>→</span></a>
              <a className="availability" href="#contact"><span /> Let&apos;s collaborate</a>
            </div>
          </section>

          <section className="bento" aria-label="Portfolio highlights">
            <article className="tile practice" id="about">
              <span className="tag">▦ &nbsp; Practice</span>
              <div className="practice-list">
                <div><small>Now</small><strong>Digital builder</strong><span>Web · Data · Strategy</span></div>
                <div><small>01</small><strong>Make it clear</strong><span>Understand the problem</span></div>
                <div><small>02</small><strong>Make it useful</strong><span>Ship what matters</span></div>
              </div>
              <p className="practice-note">Curious by nature. Practical by choice.</p>
            </article>

            <a className="tile feature" href="https://autofix-coral.vercel.app" target="_blank" rel="noreferrer" aria-label="View Autofix live project">
              <span className="tag">◇ &nbsp; Featured project</span>
              <div className="feature-art" aria-hidden="true"><div className="feature-sidebar"><i /><i /><i /></div><div className="feature-screen"><b>AUTO<span>FIX</span></b><div className="feature-car"><i /><i /></div><small>Service, made simpler.</small></div></div>
              <div className="feature-bottom"><div><h2>Autofix</h2><p>A smoother path from service discovery to booking.</p></div><span className="round-arrow">↗</span></div>
            </a>

            <article className="tile thinking">
              <span className="tag">✳ &nbsp; How I think</span>
              <div className="thinking-graphic" aria-hidden="true"><span>IDEAS</span><span>→</span><span>IMPACT</span></div>
              <h2>Good work should make sense.</h2>
              <p>Clear structure, thoughtful details, and enough momentum to make an idea real.</p>
            </article>

            <article className="tile location">
              <div className="map-art" aria-hidden="true"><span className="map-pin" /></div>
              <span className="tag">⌖ &nbsp; Based in</span>
              <div className="location-title"><span>Indonesia</span><strong>Jakarta</strong></div>
              <p>Working across places and disciplines.</p>
            </article>

            <a className="tile experiment" href="https://chickunyah.vercel.app" target="_blank" rel="noreferrer" aria-label="Visit Chickunyah live project">
              <span className="tag">↗ &nbsp; Web experiment</span>
              <div className="experiment-art" aria-hidden="true"><span /><span /><b>C</b></div>
              <div className="experiment-caption"><strong>Chickunyah</strong><small>Playful by design ↗</small></div>
            </a>

            <article className="tile contact" id="contact">
              <span className="tag">✉ &nbsp; Let&apos;s connect</span>
              <div className="contact-content"><small>01 / 03</small><h2>Have something in mind?</h2><p>Tell me what you&apos;re building. Let&apos;s find a clear way forward.</p></div>
              <a href="https://github.com/Articial" target="_blank" rel="noreferrer">Start on GitHub <span>↗</span></a>
            </article>
          </section>

          <section className="selected-work" id="work" aria-labelledby="work-title">
            <div className="section-heading"><div><span className="eyebrow">A few things I&apos;ve made</span><h2 id="work-title">Selected work<span>.</span></h2></div><p>Products, analysis, and experiments built with intent.</p></div>
            <div className="work-list">{projects.map((project) => <a className="work-row" key={project.number} href={project.href} target="_blank" rel="noreferrer"><span>{project.number}</span><strong>{project.title}</strong><span>{project.description}</span><span>{project.category}</span><span>↗</span></a>)}</div>
          </section>
          <footer><span>© {new Date().getFullYear()} Akbar Alfa</span><span>Made with curiosity in Jakarta.</span><a href="#top">Back to top ↑</a></footer>
        </div>
      </div>
    </main>
  );
}
