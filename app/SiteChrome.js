export function Header() {
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Layerstead Technologies home">
        <img src="/layerstead-mark.png" alt="" />
        <span>
          Layerstead<small>TECHNOLOGIES</small>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/#services">Services</a>
        <a href="/about">Meet Josiah</a>
        <a href="/#process">The process</a>
        <a className="nav-cta" href="/#contact">
          Let’s talk ↗
        </a>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <a className="wordmark" href="/">
          Layerstead.
        </a>
        <p>
          Better technology starts
          <br />
          with a better network.
        </p>
        <div>
          <a href="tel:+18122529644">(812) 252-9644</a>
          <a href="mailto:breckenridge.josiah@layersteadtech.com">
            breckenridge.josiah@layersteadtech.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Layerstead Technologies LLC · Hampton
          Roads, VA
        </span>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Website terms</a>
        </div>
      </div>
    </footer>
  );
}
