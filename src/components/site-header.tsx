
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Properties", href: "/properties/" },
  { label: "Blogs", href: "/blogs/" },
  { label: "Contact", href: "/contact/" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);
        ticking = false;
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>RERA Registered Real Estate Consultant</span>

          <div className="top-contact">
            <a href="tel:+919335167888">+91 93351 67888</a>
            <span className="top-divider">|</span>
            <a href="mailto:info@redefinerealtors.com">
              info@redefinerealtors.com
            </a>
          </div>
        </div>
      </div>

      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="Redefine Realtors home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M5 22 24 6l19 16v20H5V22Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M16 42V25h16v17M12 21l12-10 12 10"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M21 32h6"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          </span>

          <span className="brand-copy">
            <strong>REDEFINE</strong>
            <span>R E A L T O R S</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="nav-cta-wrap">
            <Link
              className="nav-cta"
              href="/contact/"
              onClick={() => setOpen(false)}
            >
              <span className="nav-cta-label">Let&apos;s Talk</span>

              <span className="nav-cta-arrow" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>

              <span className="nav-cta-phone">
                <Phone
                  className="nav-cta-phone-icon"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span className="nav-cta-phone-caption">
                  CALL OUR TEAM
                </span>

                <span className="nav-cta-phone-number">
                  +91 93351 67888
                </span>
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}