"use client";
import { useEffect, useState } from "react";
import { ServiceFinder, NetworkExplorer, ProcessJourney, ReadingProgress } from "./components/Experience";
import ServiceIcon from "./components/ServiceIcon";
import ConsultationForm from "./ConsultationForm";
import { site, services } from "./site-config";
const faqs = [
  [
    "Where do you work?",
    "Layerstead serves Hampton Roads, including Virginia Beach, Norfolk, and Chesapeake. Tell us your city and what you need so we can confirm whether your location is within the service area.",
  ],
  [
    "Do I need to know what is wrong?",
    "No. Describe what happens, where it happens, and what you want to improve. Josiah will help work out the technical details.",
  ],
  [
    "Should I buy a new router first?",
    "An assessment can help determine whether the issue is equipment, placement, interference, cabling, configuration, or the internet service itself. Recommendations come after understanding your setup.",
  ],
  [
    "How much will my project cost?",
    "Pricing depends on the assessment and agreed scope. Layerstead confirms pricing, payment terms, equipment responsibilities, and any applicable warranties in a separate service agreement before work is authorized.",
  ],
  [
    "Does this form book an appointment?",
    "No. It sends a consultation request. Availability, scheduling, and next steps are confirmed directly. Submitting a request does not authorize work.",
  ],
  [
    "Can you guarantee my internet speed?",
    "No. ISP service, existing equipment, building layout, and third-party services can affect performance. Recommendations depend on the environment and the project scope.",
  ],
  [
    "Will I understand the changes afterward?",
    "The handoff is part of the conversation. We can define network diagrams, equipment notes, and configuration documentation in your scope so you know what changed and how to use it.",
  ],
];
export default function Home() {
  const [interest, setInterest] = useState("");
  const [projectContext, setProjectContext] = useState("");
  const [faqQuery, setFaqQuery] = useState("");
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("reveal-ready");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  function selectConcern(value, context = "") {
    setProjectContext(context);
    setInterest(value);
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    setTimeout(
      () =>
        document
          .querySelector('[name="service_interest"]')
          ?.focus({ preventScroll: true }),
      50,
    );
  }
  return (
    <main id="main">
      <ReadingProgress />
      <section className="welcome-hero" id="home" aria-labelledby="welcome-title">
        <div className="wrap welcome-hero-inner">
          <div className="welcome-brand">
            <img
              src="/images/layerstead-welcome.webp"
              alt="Layerstead Technologies"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </div>
          <div className="welcome-copy">
            <p className="eyebrow">Veteran-owned · Locally operated</p>
            <h1 id="welcome-title">
              Reliable Networks.<br />Secure Systems.<br />Smarter Technology.
            </h1>
            <p className="welcome-description">
              Layerstead Technologies LLC delivers professional network installation,
              structured cabling, Wi-Fi solutions, endpoint security, and practical IT support
              for homes and small businesses throughout Hampton Roads.
            </p>
            <div className="welcome-actions">
              <a className="button light" href="#contact">Request a Consultation</a>
              <a className="text-link" href="#services">Explore Our Services <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="welcome-bottom">
            <span>Hampton Roads, Virginia</span>
            <a href="#services">Discover Layerstead <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>
      <section className="wrap section" id="services">
        <div className="section-intro reveal">
          <p className="eyebrow">01 / Services</p>
          <div>
            <h2>
              Practical solutions.<br />Built around you.
            </h2>
            <p>
              Network cabling, Wi-Fi, Windows support, and practical security for homes
              and small businesses in Virginia Beach, Norfolk, Chesapeake, and Hampton Roads.
            </p>
          </div>
        </div>
        <div className="service-cards">
          {services.map((s) => (
            <article className="service-card reveal" id={s.id} key={s.id}>
              <ServiceIcon kind={s.id} />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <details className="service-offerings">
                <summary>Learn More<span className="sr-only"> about {s.title}</span><span className="expand" aria-hidden="true" /></summary>
                <ul>{s.offerings.map(offering => <li key={offering}>{offering}</li>)}</ul>
                <p>{s.detail}</p>
              </details>
              <button className="text-link service-consult" onClick={() => selectConcern(s.interest)} aria-label={`Request a consultation for ${s.title}`}>Request a Consultation <span aria-hidden="true">↗</span></button>
            </article>
          ))}
        </div>
      </section>
      <ServiceFinder onSelect={selectConcern} />
      <NetworkExplorer />
      <section className="about-section" id="about">
        <div className="wrap about-grid">
          <figure className="portrait reveal">
            <img
              src={site.portrait}
              alt="Josiah Breckenridge, founder of Layerstead Technologies, smiling in a blue sweater"
              width="975"
              height="1219"
              loading="lazy"
            />
            <figcaption>
              Josiah Breckenridge <span>Founder, Layerstead Technologies</span>
            </figcaption>
          </figure>
          <div className="about-copy reveal">
            <p className="eyebrow">02 / About Layerstead</p>
            <h2>
              A person behind
              {" "}<br />
              the network.
            </h2>
            <p className="lead">
              Hi, I’m Josiah. Layerstead Technologies LLC is my veteran-owned, locally
              operated technology services company, helping Hampton Roads homeowners
              and small businesses get more from their technology.
            </p>
            <p>
              My path into technology began in the Army, where I served as a 25B
              Information Technology Specialist. Today, I’m an Army veteran and
              network engineer and technology contractor. I bring professional network
              engineering experience, technical knowledge, and attention to detail to every project.
            </p>
            <p>
              Good work starts with listening. From organized cabling and dependable
              infrastructure to practical endpoint security, network segmentation,
              and Windows support, I focus on quality workmanship and solutions
              that fit your needs. You get clear explanations and a useful handoff.
            </p>
            <aside className="contact-panel" aria-label="Contact Josiah">
              <p className="eyebrow">{site.founder}</p>
              <dl>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={"mailto:" + site.email}>{site.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={"tel:" + site.phoneHref}>{site.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Service area</dt>
                  <dd>{site.serviceArea}</dd>
                </div>
              </dl>
              <a className="button dark" href="#contact">
                Request a Consultation
              </a>
            </aside>
          </div>
        </div>
      </section>
      <ProcessJourney />
      <section className="faq-section" id="faq">
        <div className="wrap faq-grid">
          <div className="reveal">
            <p className="eyebrow">04 / A few answers</p>
            <h2>
              Before
              {" "}<br />
              we connect.
            </h2>
            <p>
              Still have a question?
              {" "}<br />
              Include it in your consultation request.
            </p>
          </div>
          <div>
            <label className="faq-search">Find an answer<input type="search" value={faqQuery} onChange={e => setFaqQuery(e.target.value)} placeholder="Try pricing, service area, or equipment" /></label>
            {faqs.filter(([q,a]) => (q+" "+a).toLowerCase().includes(faqQuery.trim().toLowerCase())).length === 0 && <p className="faq-empty" role="status">No matching answers. Try another word or include your question in a consultation request.</p>}
            {faqs.filter(([q,a]) => (q+" "+a).toLowerCase().includes(faqQuery.trim().toLowerCase())).map(([q, a]) => (
              <details className="faq-detail" key={q}>
                <summary>
                  {q}
                  <span className="expand" aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section" id="testimonial" aria-labelledby="testimonial-title">
        <p className="eyebrow" id="testimonial-title">From a local client</p>
        <figure style={{ marginTop: "1.5rem", maxWidth: "960px" }}>
          <blockquote style={{ margin: 0, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.35, letterSpacing: "-0.025em" }}>
            <p>“Our network had been down almost 4 days, and Josiah got it up and running in 30 minutes. That way, we could at least get online and stream services.”</p>
          </blockquote>
          <figcaption style={{ marginTop: "1.5rem", fontSize: "1rem" }}>
            <strong>Pastor Gatlin</strong>{" "}<br />
            <span className="muted">Ebenezer Baptist Church</span>
          </figcaption>
        </figure>
        <details className="faq-detail" style={{ marginTop: "2rem", maxWidth: "960px", borderTop: "1px solid var(--line)" }}>
          <summary>
            Read the full testimonial
            <span className="expand" aria-hidden="true" />
          </summary>
          <blockquote style={{ margin: 0 }}>
            <p style={{ maxWidth: "780px", fontSize: "1rem" }}>{"We were having trouble with our network at the church. I’m just to give you an idea of the size of our network, we have 35 security cameras, wireless sound equipment, remote sound control, 6 routers, 8 PCs, 7 printers and copies, and several other devices that rely on consistent and reliable network connectivity. Each time we called our carrier, they said that the problem stemmed from our equipment and not theirs. That meant we had to call out a service tech."}</p>
            <p style={{ maxWidth: "780px", fontSize: "1rem" }}>{"A reliable wireless network is essential in today’s church. We stream Sunday service, Sunday school, and Wednesday Night Bible study. Our network is essential to our everyday operations as well. The issues with our network became more frequent as our infrastructure aged. We were on the verge of doing an almost $6000 overhaul when Josiah from Layerstead introduced himself."}</p>
            <p style={{ maxWidth: "780px", fontSize: "1rem" }}>{"Our network had been down almost 4 days, and Josiah got it up and running in 30 minutes. That way, we could at least get online and stream services. But there were some deeper, more serious issues with our entire network. He took the time to do a complete assessment, and he took the necessary steps to fix our network and restore consistent connectivity throughout our building. He was truly a godsend to Ebenezer Baptist Church."}</p>
          </blockquote>
        </details>
      </section>
      <section className="contact-section" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">05 / Request a consultation</p>
            <h2>
              Let’s make
              {" "}<br />
              technology{" "}
              {" "}<br />
              work for you.
            </h2>
            <p>
              Tell Josiah what is happening.
              {" "}<br />
              We’ll work out the next step together.
            </p>
            <a href={"mailto:" + site.email}>{site.email}</a>
            <a href={"tel:" + site.phoneHref}>{site.phone}</a>
            <p className="contact-area">
              Serving Hampton Roads,
              {" "}<br />
              including Virginia Beach, Norfolk, and Chesapeake.
            </p>
          </div>
          <ConsultationForm interest={interest} setInterest={setInterest} projectContext={projectContext} clearContext={() => setProjectContext("")} />
        </div>
      </section>
    </main>
  );
}
