import ConsultationForm from "./ConsultationForm";
import ServiceFinder from "./ServiceFinder";
import { Header, Footer } from "./SiteChrome";
import Image from "next/image";
const services = [
  [
    "01",
    "Wi-Fi that reaches your space",
    "Coverage assessments, access point placement, interference checks, and practical upgrades.",
    "Wi-Fi & site surveys",
  ],
  [
    "02",
    "Connections where you need them",
    "Ethernet runs and cleaner cabling for desks, access points, TVs, and connected equipment.",
    "Ethernet & cabling",
  ],
  [
    "03",
    "A network your business can rely on",
    "Wired and wireless networking, segmentation, equipment upgrades, and documentation.",
    "Business networking",
  ],
  [
    "04",
    "An answer to “why does it keep doing that?”",
    "Trace disconnects, slow connections, and mystery network behavior before buying more gear.",
    "Troubleshooting",
  ],
];
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> VIRGINIA BEACH · HAMPTON ROADS
            </p>
            <h1>
              Your network
              <br />
              shouldn’t be
              <br />
              <em>the problem.</em>
            </h1>
            <p className="lead">
              The back room with no signal. The call that keeps dropping. The
              cables nobody can trace. Let’s work out what’s wrong—and what will
              actually help.
            </p>
            <div className="actions">
              <ServiceFinder />
              <a className="text-link" href="#services">
                Explore the services ↓
              </a>
            </div>
            <p className="hero-caption">
              Local network help for homes, small businesses & churches.
            </p>
          </div>
          <div
            className="network-panel"
            aria-label="Illustration of connections between internet, router, and devices"
          >
            <div className="panel-label">
              <span>THE CONNECTION MATTERS</span>
              <span>LS / 01</span>
            </div>
            <div className="network-art">
              <div className="signal-rings" />
              <div className="network-core">
                <img src="/layerstead-mark.png" alt="" />
              </div>
              <span className="node node-a">WORKSPACE</span>
              <span className="node node-b">WI-FI</span>
              <span className="node node-c">HOME</span>
              <span className="node node-d">DEVICES</span>
            </div>
            <div className="panel-foot">
              <span>
                Thoughtful design.
                <br />
                Practical troubleshooting.
              </span>
              <span>
                BUILT AROUND
                <br />
                YOUR SPACE ↗
              </span>
            </div>
          </div>
        </section>
        <div className="trust-band">
          <span>VETERAN OWNED</span>
          <span>PERSONAL SERVICE</span>
          <span>DIAGNOSE FIRST</span>
          <span>EXPLAIN IT CLEARLY</span>
        </div>
        <section className="wrap section" id="services">
          <div className="section-intro">
            <div>
              <p className="eyebrow">01 / WHAT WE DO</p>
              <h2>
                Small frustrations.
                <br />
                <em>Real solutions.</em>
              </h2>
            </div>
            <p>
              You don’t need an enterprise-sized project to get a network that
              works for your space.
            </p>
          </div>
          <div className="services">
            {services.map(([n, title, desc, label]) => (
              <a
                className="service-card"
                key={n}
                href={"/?service=" + encodeURIComponent(label) + "#contact"}
              >
                <div className="card-top">
                  <span>{n}</span>
                  <span>↗</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="service-label">{label}</span>
              </a>
            ))}
          </div>
          <p className="service-note">
            Planning something new? We also help you choose equipment and map
            out a sensible upgrade.
          </p>
        </section>
        <section className="founder-strip">
          <div className="wrap founder-grid">
            <div>
              <p className="eyebrow">02 / THE PERSON BEHIND THE NETWORK</p>
              <h2>
                I’m Josiah.
                <br />
                Let’s make your
                <br />
                <em>technology make sense.</em>
              </h2>
              <Image
                className="founder-portrait founder-portrait-home"
                src="/josiah-breckenridge.jpeg"
                alt="Josiah Breckenridge, founder of Layerstead Technologies"
                width={864}
                height={1536}
                sizes="(max-width: 650px) 100vw, 40vw"
              />
            </div>
            <div>
              <p className="lead">
                I got my start in technology as an Army 25B. Today, I’m a
                contractor and network engineer serving my community through
                Layerstead.
              </p>
              <p>
                I started Layerstead to bring hands-on networking experience to
                people and businesses here in Hampton Roads. I want you to
                understand the problem, the options, and what you’re paying for.
              </p>
              <a className="text-link" href="/about">
                Meet the founder ↗
              </a>
            </div>
          </div>
        </section>
        <section className="wrap section" id="process">
          <div className="section-intro">
            <div>
              <p className="eyebrow">03 / HOW IT WORKS</p>
              <h2>
                No mystery.
                <br />
                <em>Just a clear next step.</em>
              </h2>
            </div>
            <p>
              A conversation first. An assessment when needed. Work you
              understand before it begins.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Tell me what’s happening",
                "Describe the issue in your own words. Start with the symptoms, not the technical terminology.",
              ],
              [
                "02",
                "Find the cause",
                "We assess the setup, equipment, coverage, and connections relevant to your problem.",
              ],
              [
                "03",
                "Agree on the work",
                "You get a recommendation. Scope, pricing, and scheduling are agreed before work starts.",
              ],
              [
                "04",
                "Make the change",
                "We carry out the agreed work, verify the result, and explain the setup.",
              ],
            ].map(([n, t, p]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section faq">
          <p className="eyebrow">A FEW GOOD QUESTIONS</p>
          <h2>Before you reach out.</h2>
          {[
            [
              "Do I need to know what’s wrong?",
              "No. Tell us what you notice, where it happens, and whether it affects one device or several. That’s enough to start a conversation.",
            ],
            [
              "Will I need new equipment?",
              "Not necessarily. We assess what you have before recommending replacements. Sometimes placement, configuration, or a cable is the issue.",
            ],
            [
              "Where do you work?",
              "Layerstead serves homes, small businesses, churches, and nonprofits in the Hampton Roads area. Share your city when you contact us so we can confirm availability.",
            ],
            [
              "How much will it cost?",
              "Pricing depends on the problem, the space, and the agreed work. We discuss scope and pricing before starting. Submitting this form does not book a visit or authorize charges.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
        <section id="contact" className="contact">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">04 / LET’S TALK</p>
              <h2>
                Tell me what
                <br />
                <em>isn’t working.</em>
              </h2>
              <p>
                You don’t have to troubleshoot it alone. Share a little about
                your space and what you want to improve.
              </p>
              <div className="contact-direct">
                <strong>Josiah Breckenridge</strong>
                <span>Owner | Network Engineer</span>
                <a href="tel:+18122529644">(812) 252-9644 ↗</a>
                <a href="mailto:breckenridge.josiah@layersteadtech.com">
                  breckenridge.josiah@layersteadtech.com ↗
                </a>
              </div>
              <p className="small">Serving the Hampton Roads Area</p>
            </div>
            <ConsultationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
