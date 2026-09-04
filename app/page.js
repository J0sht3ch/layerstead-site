import ConsultationForm from "./ConsultationForm";

const services = [
  ['Home Networking', 'Wi-Fi improvements, router and access point upgrades, segmentation, device connectivity, and practical troubleshooting.'],
  ['Small Business Networking', 'Reliable wired and wireless networks designed around how your team actually works.'],
  ['Wi-Fi & Site Surveys', 'Evaluate coverage, access-point placement, interference, and performance before buying more equipment.'],
  ['Ethernet & Cable Runs', 'Clean network connections for computers, TVs, access points, cameras, and other connected equipment.'],
  ['Network Troubleshooting', 'Slow speeds, random drops, mystery cabling, or a network that just does not feel right—we trace the issue.'],
  ['Technology Consulting', 'Clear recommendations before you spend money on hardware, subscriptions, or unnecessary upgrades.'],
];

const steps = [
  ['01', 'Tell us what’s going on.', 'Start with a consultation. Explain the problem in normal terms—we’ll handle the technical translation.'],
  ['02', 'We assess the environment.', 'We look at the network, equipment, cabling, coverage, and how the space is actually being used.'],
  ['03', 'You get a clear recommendation.', 'We explain what we found, what should change, what can stay, and what the practical options are.'],
  ['04', 'We get it working.', 'If you want Layerstead to handle the fix or upgrade, we take it from there.'],
];

function Logo() {
  return (
    <a href="#top" className="brand-lockup" aria-label="Layerstead Technologies home">
      <span className="brand-mark"><img src="/layerstead-mark.png" alt="" aria-hidden="true" /></span>
      <span className="brand-name-wrap">
        <span className="brand-name">Layerstead</span>
        <span className="brand-subtitle">Technologies</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white text-neutral-950">
      <header className="site-header">
        <div className="container-shell header-inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Our Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="button button-dark desktop-cta">Request a Consultation</a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#process">Our Process</a>
              <a href="#contact">Contact</a>
              <a href="#contact" className="button button-dark">Request a Consultation</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero-section">
        <div className="grid-bg" />
        <div className="container-shell hero-grid">
          <div>
            <p className="eyebrow mb-6">Hampton Roads, Virginia • Homes + Small Businesses</p>
            <h1 className="hero-title">Better technology starts with a better network.</h1>
            <p className="hero-copy">
              Reliable Wi-Fi, cleaner networks, and practical technology solutions—without the corporate runaround.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-dark">Request a Consultation</a>
              <a href="#services" className="button button-light">Explore Services</a>
            </div>
            <p className="hero-note">Local help for the network problems that make your home or business harder to use.</p>
          </div>

          <aside className="problem-card" aria-label="Common problems Layerstead helps solve">
            <div className="problem-card-topline">
              <p className="text-sm font-black">Common problems we help solve</p>
              <span className="status-dot" aria-hidden />
            </div>
            <div className="problem-list">
              {['Dead zones & weak Wi-Fi', 'Random drops and slow speeds', 'Messy or mystery cabling', 'Router / access point upgrades', 'Small business network cleanup'].map((item) => (
                <div key={item} className="problem-row">
                  <span>{item}</span><span aria-hidden>→</span>
                </div>
              ))}
            </div>
            <p className="problem-card-foot">Not sure what the technical problem is? That’s completely fine.</p>
          </aside>
        </div>
      </section>

      <section className="trust-strip" aria-label="Layerstead service focus">
        <div className="container-shell trust-grid">
          <span>Residential</span>
          <span>Small Business</span>
          <span>Churches & Nonprofits</span>
          <span>Hampton Roads, VA</span>
        </div>
      </section>

      <section className="container-shell section-pad">
        <div className="problem-section-grid">
          <div>
            <p className="eyebrow">The problem</p>
            <div className="mini-proof">
              <span>Slow Wi-Fi</span>
              <span>Dead zones</span>
              <span>Random disconnects</span>
            </div>
          </div>
          <div>
            <h2 className="section-heading max-w-4xl">Technology should make your life easier—not become another problem to solve.</h2>
            <p className="section-copy max-w-3xl">
              Slow Wi-Fi. Dead zones. Devices that disconnect. A network that grew over time and nobody quite knows how it works anymore. Layerstead helps you understand what’s wrong, fix what matters, and build technology that works the way it should.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container-shell">
          <div className="services-intro">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="section-heading mt-4">Practical help. Clean results.</h2>
            </div>
            <p className="max-w-md text-neutral-600">Built for real homes and small businesses—not bloated enterprise projects you never asked for.</p>
          </div>

          <div className="service-grid">
            {services.map(([title, body], i) => (
              <article key={title} className="service-card">
                <div className="service-card-topline">
                  <p className="service-number">0{i + 1}</p>
                  <span aria-hidden>↗</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container-shell section-pad">
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-inner">
              <p className="eyebrow text-neutral-400">Why Layerstead</p>
              <div>
                <p className="about-quote">No unnecessary upgrades. No confusing sales pitch.</p>
                <p className="about-card-copy">We start with what you already have, then recommend only what actually helps.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Local technology help</p>
            <h2 className="section-heading mt-5">We diagnose before we recommend.</h2>
            <p className="section-copy">Good technology starts with understanding the problem first. We assess what you already have, identify what’s actually causing the issue, and recommend a practical path forward.</p>
            <p className="section-copy mt-5">That means we don’t show up assuming you need the most expensive router, a brand-new network, or thousands of dollars of equipment.</p>
            <div className="local-note">
              <span className="local-note-label">The Layerstead approach</span>
              <span>Understand first. Recommend second. Build only what makes sense.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="container-shell">
          <p className="eyebrow">Our Process</p>
          <h2 className="section-heading mt-4 max-w-3xl">Simple from first message to finished network.</h2>
          <div className="process-grid">
            {steps.map(([num, title, body]) => (
              <article key={num} className="process-card">
                <p className="process-number">{num}</p>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container-shell contact-grid">
          <div>
            <p className="eyebrow text-neutral-400">Request a consultation</p>
            <h2 className="contact-title">Not sure what’s wrong? That’s okay.</h2>
            <p className="contact-copy">Tell us what you’re experiencing. You don’t need to diagnose the problem before contacting us.</p>
            <div className="contact-meta">
              <span>Homes</span>
              <span>Small Businesses</span>
              <span>Hampton Roads</span>
            </div>
          </div>

          <ConsultationForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container-shell footer-inner">
          <div>
            <div className="footer-brand">LAYERSTEAD TECHNOLOGIES</div>
            <p>Better technology starts with a better network.</p>
          </div>
          <div>© 2026 Layerstead Technologies • Hampton Roads, Virginia</div>
        </div>
      </footer>
    </main>
  );
}
