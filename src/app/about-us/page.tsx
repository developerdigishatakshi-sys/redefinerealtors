import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Us | Redefine Realtors",
  description:
    "Learn about Redefine Realtors, our mission, services and commitment to real estate clients in Lucknow and Noida.",
};

const reasons = [
  {
    title: "RERA Registered & Compliant",
    text: (
      <>
        Your trust is our foundation. Our status as a{" "}
        <strong>RERA registered agent (UPRERAAGT14935)</strong> guarantees
        adherence to the highest standards of professionalism, accountability,
        and ethical practices as mandated by the Uttar Pradesh Real Estate
        Regulatory Authority (
        <a href="https://www.up-rera.in/" target="_blank" rel="noreferrer">
          www.up-rera.in
        </a>
        ).
      </>
    ),
  },
  {
    title: "GST Registered Business",
    text: (
      <>
        We operate as a fully compliant, transparent entity
        (GSTIN: 09AJUPG9618D2ZR), ensuring all our transactions are official
        and professional.
      </>
    ),
  },
  {
    title: "Deep Regional Expertise",
    text: (
      <>
        Our core focus is on <strong>Lucknow, Noida, and key regions across
        Eastern Uttar Pradesh.</strong> This hyper-local expertise means we
        have unmatched knowledge of market trends, property values, and
        emerging opportunities in these areas.
      </>
    ),
  },
  {
    title: "Client-Centric Approach",
    text: (
      <>
        From first-time buyers to seasoned investors, we listen to your unique
        needs. Our mission is to <strong>redefine</strong> your real estate
        experience by delivering personalized service, expert negotiation,
        and end-to-end support.
      </>
    ),
  },
  {
    title: "Curated Property Portfolio",
    text: (
      <>
        We work with a selective range of quality properties, typically
        between <strong>₹40 lakhs to ₹2.5 Crore</strong>, ensuring we offer
        valuable investments and homes that meet stringent standards.
      </>
    ),
  },
];

const services = [
  ["Residential Real Estate", "Find your dream home from our curated selection of apartments, villas, and plots."],
  ["Commercial Real Estate", "Discover strategic commercial spaces, offices, and retail properties for business growth."],
  ["Property Leasing", "Expert assistance for both landlords and tenants in residential and commercial leasing."],
  ["Investment Consulting", "Strategic advice for property investors seeking profitable opportunities."],
];

const promises = [
  ["Transparency", "No hidden charges, no false promises"],
  ["Expertise", "Deep market knowledge and professional guidance"],
  ["Quality", "Carefully vetted properties that match your requirements"],
  ["Support", "Continuous assistance from initial search to final possession"],
];

const projects = [
  "Sahu Pearl",
  "Omaxe Lucknow",
  "Purvanchal Royal Atlantis Phase 1 Lucknow",
  "Eldeco Yamuna Expressway",
  "The Elite by Rohit Group in Gomti Nagar Extension Lucknow",
];

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader />

      <main className="about-replica">
        <div className="about-replica__title">
          <h1>About Us</h1>
        </div>

        <div className="about-replica__content">
          <section className="about-replica__mission">
            <h2>Our Mission &amp; Vision</h2>

            <p>
              At Redefine Realtors, we don’t just find properties; we find
              possibilities. We understand that buying, selling, or leasing a
              property is more than a transaction—it’s a pivotal life decision.
              As a <strong>RERA registered real estate agent</strong> in{" "}
              <strong>Lucknow</strong> and <strong>Noida</strong>, we are
              committed to making this journey transparent, seamless, and
              successful for you.
            </p>

            <p>
              Founded on the principles of integrity and excellence, we have
              built a reputation as a trusted advisor in the dynamic real
              estate markets of Lucknow and Noida.
            </p>

            <ul>
              <li>
                <strong>Our Mission:</strong> To redefine the real estate
                experience by providing personalized, transparent, and
                professional services that empower our clients to make
                confident property decisions.
              </li>
              <li>
                <strong>Our Vision:</strong> To be the most trusted and
                respected real estate agency in Uttar Pradesh, known for our
                unwavering commitment to client satisfaction and market
                expertise.
              </li>
            </ul>
          </section>

          <section className="about-replica__section">
            <h2>Why Choose Redefine Realtors?</h2>

            <div className="about-replica__reasons">
              {reasons.map((item) => (
                <article className="about-replica__reason" key={item.title}>
                  <h3>
                    <span className="about-replica__check" aria-hidden="true">
                      ✓
                    </span>
                    {item.title}
                  </h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-replica__section">
            <h2>Our Services</h2>
            <p>
              We offer comprehensive real estate solutions tailored to diverse
              needs:
            </p>
            <ul className="about-replica__list">
              {services.map(([title, text]) => (
                <li key={title}>
                  <strong>{title}:</strong> {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="about-replica__section">
            <h2>Our Promise to You</h2>
            <p>When you choose Redefine Realtors, you choose:</p>
            <ul className="about-replica__list">
              {promises.map(([title, text]) => (
                <li key={title}>
                  <strong>{title}:</strong> {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="about-replica__section about-replica__connect">
            <h2>Connect With Us</h2>
            <p>
              Ready to begin your property journey? We’re here to help you find
              the perfect solution.
            </p>

            <ul className="about-replica__list">
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://redefinerealtors.com/">
                  www.redefinerealtors.com
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@redefinerealtors.com">
                  info@redefinerealtors.com
                </a>
              </li>
              <li>
                <strong>Phone/WhatsApp:</strong>{" "}
                <a href="tel:+919335167888">+91 9335167888</a>
              </li>
              <li>
                <strong>Office Address:</strong> D-6/860, Sector 6, Gomti Nagar
                Extension, Beside HDFC Bank, Lucknow, Uttar Pradesh 226010
              </li>
            </ul>

            <p className="about-replica__closing">
              <strong>Let’s find your perfect property together.</strong>
            </p>
          </section>
        </div>
      </main>

      <footer className="about-replica__footer">
        <div className="about-replica__footer-inner">
          <Link href="/" className="about-replica__footer-logo">
            <img
              src="/images/branding/redefine-logo.svg"
              alt="Redefine Realtors"
            />
          </Link>

          <div className="about-replica__footer-projects">
            <h2>Projects</h2>
            <ul>
              {projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="about-replica__footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link href="/about-us/">About Us</Link></li>
              <li><Link href="/blogs/">Blogs</Link></li>
              <li><Link href="/contact/">Contact Us</Link></li>
              <li><a href="https://redefinerealtors.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="https://redefinerealtors.com/terms-conditions/">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="about-replica__footer-bottom">
          <span>© 2026 Redefine Realtors.</span>
        </div>
      </footer>
    </>
  );
}