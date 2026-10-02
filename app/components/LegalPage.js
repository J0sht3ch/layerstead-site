import { site } from "../site-config";
export default function LegalPage({ title, intro, sections, review }) {
  return (
    <main id="main" className="legal wrap">
      <header className="legal-header">
        <a className="text-link" href="/">
          Layerstead home
        </a>
        <p className="eyebrow" style={{ marginTop: 32 }}>
          Layerstead / Website & service information
        </p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <p className="legal-version">
          Updated: October 2, 2026 · Version{" "}
          {site.documentVersion}
        </p>
      </header>
      <div className="legal-layout">
        <nav className="legal-toc" aria-label={title + " contents"}>
          {sections.map((s, i) => (
            <a href={"#section-" + i} key={s.title}>
              {s.title}
            </a>
          ))}
        </nav>
        <article className="legal-body">
          {sections.map((s, i) => (
            <section id={"section-" + i} key={s.title}>
              <h2>{s.title}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </section>
          ))}
          <section>
            <h2>Contact Layerstead</h2>
            <p>
              {site.founder}, {site.name}
              <br />
              <a href={"mailto:" + site.email}>{site.email}</a>
              <br />
              <a href={"tel:" + site.phoneHref}>{site.phone}</a>
              <br />
              {site.serviceArea}
            </p>
          </section>
          <a className="button dark legal-return" href="/#contact">
            Request a Consultation
          </a>
        </article>
      </div>
    </main>
  );
}
