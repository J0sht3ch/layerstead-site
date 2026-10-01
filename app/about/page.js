import { Header, Footer } from "../SiteChrome";
import Image from "next/image";
export const metadata = { title: "Meet Josiah | Layerstead Technologies" };
export default function About() {
  return (
    <>
      <Header />
      <main id="main" className="wrap section about-page">
        <p className="eyebrow">THE PERSON BEHIND LAYERSTEAD</p>
        <h1>
          A love of networks.
          <br />
          <em>A reason to help.</em>
        </h1>
        <div className="about-columns">
          <aside>
            <Image
              className="founder-portrait"
              src="/josiah-breckenridge.jpeg"
              alt="Josiah Breckenridge, founder of Layerstead Technologies"
              width={864}
              height={1536}
              sizes="(max-width: 650px) 100vw, 35vw"
              priority
            />
            <p>
              Founder & Network Engineer
              <br />
              Army veteran · Virginia Beach
            </p>
          </aside>
          <div>
            <h2>Hi, I’m Josiah.</h2>
            <p className="lead">
              I started Layerstead Technologies to bring practical networking
              help to homes and small businesses throughout Hampton Roads.
            </p>
            <h3>Where it started</h3>
            <p>
              I got my start in technology in the U.S. Army as a 25B—an
              Information Technology Specialist. That experience gave me a
              foundation in supporting systems and troubleshooting the problems
              people depend on you to solve.
            </p>
            <p>
              Today, I work as a contractor and network engineer. Outside of
              work, I keep learning in my own lab: building networks, testing
              configurations, and tracing problems until I understand what’s
              happening. Layerstead grew out of that same interest in making
              technology work for people.
            </p>
            <h3>Why Layerstead</h3>
            <p>
              A home or small business still needs a dependable network, even
              without an IT team down the hall. I started Layerstead to bring
              practical networking help to people here in Hampton Roads—from
              finding Wi-Fi dead zones to sorting out cabling and planning an
              upgrade. You should be able to explain what’s wrong in your own
              words and understand what I recommend and why.
            </p>
            <h3>What you can expect from me</h3>
            <p>
              I listen before recommending equipment. I explain the options and
              agree on the work before starting. And I treat your home or
              business as a space people rely on—not just a collection of
              devices.
            </p>
            <a href="/#contact" className="button primary">
              Let’s talk about your network ↗
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
