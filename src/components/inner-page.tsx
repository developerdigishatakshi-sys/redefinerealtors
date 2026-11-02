import Link from "next/link";
import SiteHeader from "@/components/site-header";

type InnerPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function InnerPage({
  eyebrow,
  title,
  description,
  children,
}: InnerPageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero">
          <div className="container inner-hero-content">
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-line" />
              {eyebrow}
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </section>
        <section className="inner-content section-pad">
          <div className="container">{children}</div>
        </section>
        <section className="inner-contact">
          <div className="container inner-contact-row">
            <div>
              <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
              <h2>Let&apos;s find the right property for you.</h2>
            </div>
            <Link className="button button-dark" href="/contact/">
              Talk to our team <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <footer className="inner-footer">
        <div className="container inner-footer-row">
          <Link className="brand" href="/">
            <span className="brand-copy">
              <strong>REDEFINE</strong>
              <span>R E A L T O R S</span>
            </span>
          </Link>
          <div className="inner-footer-links">
            <Link href="/about-us/">About Us</Link>
            <Link href="/properties/">Properties</Link>
            <Link href="/blogs/">Blogs</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <a href="tel:+919335167888">+91 93351 67888</a>
        </div>
        <div className="container inner-footer-bottom">
          © 2026 Redefine Realtors. All rights reserved.
        </div>
      </footer>
    </>
  );
}
