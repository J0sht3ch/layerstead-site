"use client";
import { useRef, useState } from "react";
import { site } from "../site-config";
export function Logo({ variant = "light" }) {
  return (
    <a
      className={"logo " + (variant === "footer" ? "footer-logo" : "")}
      href="/"
      aria-label="Layerstead Technologies home"
    >
      <picture>
        {variant === "light" && (
          <source media="(max-width: 700px)" srcSet={site.logos.mobile} />
        )}
        <img
          src={site.logos[variant]}
          alt="Layerstead Technologies"
          width="695"
          height="463"
        />
      </picture>
    </a>
  );
}
const links = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["About Josiah", "/#about"],
  ["How It Works", "/#process"],
  ["FAQ", "/#faq"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className="header"
        onKeyDown={(e) => {
          if (e.key === "Escape" && open) {
            setOpen(false);
            trigger.current?.focus();
          }
        }}
      >
        <div className="wrap header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.slice(1).map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="button dark header-cta" href="/#contact">
            Request a Consultation
          </a>
          <button
            ref={trigger}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {" "}
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav"
          hidden={!open}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              trigger.current?.focus();
            }
          }}
        >
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)}>
            Request a Consultation
          </a>
        </nav>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <Logo variant="footer" />
          <p>
            Better technology starts
            <br />
            with a better network.
          </p>
          <a className="button light" href="/#contact">
            Request a Consultation
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}
            <br />
            {site.serviceArea}
          </p>
          <nav aria-label="Footer navigation">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Website Terms of Use</a>
            <a href="/service-disclaimer">Service Disclaimer</a>
            <a href="/service-agreement">Service Agreement</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
