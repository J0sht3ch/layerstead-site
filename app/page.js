"use client";
import { useEffect, useRef, useState } from "react";
import ConsultationForm from "./ConsultationForm";
import { site, services, concerns } from "./site-config";
const faqs = [
  [
    "Where do you work?",
    "Layerstead serves Hampton Roads, including Virginia Beach. Tell us your city and what you need so we can confirm whether your location is within the service area.",
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
  const [welcome, setWelcome] = useState(false);
  const welcomeRef = useRef(null);
  useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem("layerstead-welcome");
    } catch {}
    if (seen) return;
    const timer = setTimeout(() => {
      setWelcome(true);
      try {
        sessionStorage.setItem("layerstead-welcome", "1");
      } catch {}
    }, 9000);
    return () => clearTimeout(timer);
  }, []);
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
  function selectConcern(value) {
    setInterest(value);
    setWelcome(false);
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
  function closeWelcome() {
    const focused = welcomeRef.current?.contains(document.activeElement);
    setWelcome(false);
    if (focused)
      document.querySelector(".hero .button")?.focus({ preventScroll: true });
  }
  return (
    <main id="main">
      <section className="hero wrap" id="home">
        <div className="hero-top">
          <p className="eyebrow">Local expertise. A thoughtful approach.</p>
          <p className="location">
            Hampton Roads, Virginia
            <br />
            Homes & small businesses
          </p>
        </div>
        <h1>
          Better technology
          <br />
          starts with a<br />
          <span>better network.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Wi-Fi that reaches your space. Connections that make sense.
            Practical technology help from someone who takes the time to
            understand.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#contact">
              Request a Consultation
            </a>
            <a className="text-link" href="#services">
              Explore the services
            </a>
          </div>
        </div>
        <div className="hero-rule">
          <span>Understand.</span>
          <span>Connect.</span>
          <span>Simplify.</span>
          <span className="hero-rule-note">Layerstead Technologies</span>
        </div>
      </section>
      <section className="concern-section" aria-labelledby="concern-title">
        <div className="wrap concern-layout">
          <div>
            <p className="eyebrow">Start with the problem</p>
            <h2 id="concern-title">
              What is getting
              <br />
              in your way?
            </h2>
            <p>
              You do not need the technical answer.
              <br />
              Just tell us what you are experiencing.
            </p>
          </div>
          <div className="concern-list">
            {concerns.map((s, i) => (
              <button key={s} onClick={() => selectConcern(s)}>
                <span className="index">0{i + 1}</span>
                <span>{s}</span>
                <span className="concern-action">Let’s talk</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section" id="services">
        <div className="section-intro reveal">
          <p className="eyebrow">01 / Services</p>
          <div>
            <h2>
              Good networks.
              <br />
              Everyday confidence.
            </h2>
            <p>
              From one frustrating dead zone to a new small business setup, the
              right solution starts with your space and your needs.
            </p>
          </div>
        </div>
        <div className="service-list">
          {services.map((s, i) => (
            <details className="service-detail reveal" key={s.title}>
              <summary>
                <span className="index">0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <span className="expand" aria-hidden="true" />
              </summary>
              <div className="service-expanded">
                <p>{s.detail}</p>
                <button
                  className="text-link"
                  onClick={() => selectConcern(s.interest)}
                >
                  Ask about this service
                </button>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="wrap about-grid">
          <figure className="portrait reveal">
            <img
              src={site.portrait}
              alt="Josiah Breckenridge seated in a white shirt"
              width="864"
              height="1536"
              loading="lazy"
            />
            <figcaption>
              Josiah Breckenridge <span>Founder, Layerstead Technologies</span>
            </figcaption>
          </figure>
          <div className="about-copy reveal">
            <p className="eyebrow">02 / About Josiah</p>
            <h2>
              A person behind
              <br />
              the network.
            </h2>
            <p className="lead">
              Hi, I’m Josiah. I started Layerstead to make everyday technology
              easier to understand and easier to use.
            </p>
            <p>
              My path into technology began in the Army, where I served as a 25B
              Information Technology Specialist. Today, I’m an Army veteran and
              technology contractor, and I bring that experience to Layerstead
              Technologies.
            </p>
            <p>
              For me, good work starts with listening. I want to understand what
              is happening, build a dependable network around your needs, and
              explain the recommendations in a way that makes sense. Homeowners
              and small businesses should feel confident using their technology.
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
      <section className="wrap section" id="process">
        <div className="section-intro reveal">
          <p className="eyebrow">03 / How it works</p>
          <div>
            <h2>
              Clarity at
              <br />
              every step.
            </h2>
            <p>
              A conversation first. A practical plan next.
              <br />
              Work begins when the scope is agreed.
            </p>
          </div>
        </div>
        <ol className="process-list">
          {[
            [
              "Tell me what is happening.",
              "Send a consultation request with the problem, your city, and what you would like to improve.",
            ],
            [
              "Understand the environment.",
              "We confirm availability and discuss the assessment needed to understand the space, equipment, and network.",
            ],
            [
              "Agree on a practical plan.",
              "Review the recommendations. Scope, pricing, responsibilities, and terms go into a separate signed agreement.",
            ],
            [
              "Build, explain, and hand off.",
              "Approved work follows the agreed plan, with the documentation and handoff defined for your project.",
            ],
          ].map(([title, copy], i) => (
            <li className="reveal" key={title}>
              <span className="index">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="faq-section" id="faq">
        <div className="wrap faq-grid">
          <div className="reveal">
            <p className="eyebrow">04 / A few answers</p>
            <h2>
              Before
              <br />
              we connect.
            </h2>
            <p>
              Still have a question?
              <br />
              Include it in your consultation request.
            </p>
          </div>
          <div>
            {faqs.map(([q, a]) => (
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
      <section className="contact-section" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">05 / Request a consultation</p>
            <h2>
              Let’s make
              <br />
              technology
              <br />
              work for you.
            </h2>
            <p>
              Tell Josiah what is happening.
              <br />
              We’ll work out the next step together.
            </p>
            <a href={"mailto:" + site.email}>{site.email}</a>
            <a href={"tel:" + site.phoneHref}>{site.phone}</a>
            <p className="contact-area">
              Serving Hampton Roads,
              <br />
              including Virginia Beach.
            </p>
          </div>
          <ConsultationForm interest={interest} setInterest={setInterest} />
        </div>
      </section>
      {welcome && (
        <aside
          ref={welcomeRef}
          className="welcome"
          aria-label="Welcome to Layerstead"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              closeWelcome();
            }
          }}
        >
          <button
            className="welcome-close"
            onClick={closeWelcome}
            aria-label="Close welcome message"
          >
            ×
          </button>
          <p className="eyebrow">A quick hello</p>
          <h3>
            Hi, welcome to Layerstead.
            <br />
            What can we help you solve?
          </h3>
          <div className="welcome-options">
            {concerns.map((s) => (
              <button key={s} onClick={() => selectConcern(s)}>
                {s}
              </button>
            ))}
          </div>
          <p>No technical explanation needed.</p>
        </aside>
      )}
    </main>
  );
}
