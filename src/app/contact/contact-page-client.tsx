"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Property enquiry");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:info@redefinerealtors.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <>
      <SiteHeader />

      <main className="cr-contact-page">
        <section className="cr-contact-heading">
          <span className="cr-contact-kicker">WE'RE HERE TO HELP</span>
          <h1>Get in touch with us</h1>
          <span className="cr-contact-headingLine" />
        </section>

        <section className="cr-contact-contactSection">
          <div className="cr-contact-contactPanel">
            <div className="cr-contact-panelHeading">
              <span className="cr-contact-panelEyebrow">LET'S CONNECT</span>
              <h2>Let's Find Your Dream Property Together</h2>
              <p>
                Ready to take the next step in your property journey?
                We're here to help! Whether you're looking to buy, sell,
                or lease a property in Lucknow or Noida, our team at
                Redefine Realtors is just a call or click away.
              </p>
            </div>

            <div className="cr-contact-panelBody">
              <div className="cr-contact-contactDetails">
                <a
                  className="cr-contact-detail"
                  href="tel:+919335167888"
                >
                  <span className="cr-contact-detailIcon">
                    <Phone size={23} />
                  </span>
                  <span className="cr-contact-detailText">
                    <strong>+91 9335167888</strong>
                    <span>Free support</span>
                  </span>
                </a>

                <a
                  className="cr-contact-detail"
                  href="mailto:info@redefinerealtors.com"
                >
                  <span className="cr-contact-detailIcon">
                    <Send size={23} />
                  </span>
                  <span className="cr-contact-detailText">
                    <strong>info@redefinerealtors.com</strong>
                    <span>Help Email support</span>
                  </span>
                </a>

                <div className="cr-contact-office">
                  <MapPin size={19} />
                  <span>
                    <strong>Visit our office</strong>
                    <span>
                      D-6/860, Sector 6, Gomti Nagar Extension,
                      Lucknow, Uttar Pradesh 226010.
                    </span>
                  </span>
                </div>
              </div>

              <div className="cr-contact-formColumn">
                {submitted && (
                  <div className="cr-contact-success" role="status">
                    <CheckCircle2 size={18} />
                    Your email application has been opened. Please send
                    the prepared message from your email client.
                  </div>
                )}

                <form
                  className="cr-contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="cr-contact-inputRow">
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      aria-label="Full Name"
                      autoComplete="name"
                      required
                    />
                    <input
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      aria-label="Company Name"
                      autoComplete="organization"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    placeholder="Work Email"
                    aria-label="Work Email"
                    autoComplete="email"
                    required
                  />

                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    aria-label="Subject"
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    aria-label="Message"
                    rows={6}
                    required
                  />

                  <button type="submit" className="cr-contact-submit">
                    Send Message
                    <ArrowUpRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="cr-contact-dream">
          <span className="cr-contact-dreamEyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Looking for a dream home?</h2>
          <p>
            Let us help you find a place that feels like home.
            Explore our carefully selected properties in Lucknow.
          </p>
          <Link href="/properties/" className="cr-contact-explore">
            Explore Properties
            <ArrowUpRight size={17} />
          </Link>
        </section>
      </main>

      <footer className="cr-contact-footer">
        <div className="cr-contact-footerInner">
          <Link href="/" className="cr-contact-footerBrand">
            <span className="cr-contact-footerMark">R</span>
            <strong>REDEFINE</strong>
            <span>REALTORS</span>
          </Link>

          <div className="cr-contact-footerColumn">
            <h3>Projects</h3>
            <Link href="/property/sahu-pearl/">Sahu Pearl</Link>
            <Link href="/properties/">Omaxe Lucknow</Link>
            <Link href="/properties/">Purvanchal Royal Atlantis Phase 1 Lucknow</Link>
            <Link href="/properties/">Eldeco Yamuna Expressway</Link>
            <Link href="/properties/">The Elite by Rohit Group in Gomti Nagar Extension</Link>
          </div>

          <div className="cr-contact-footerColumn">
            <h3>Quick Links</h3>
            <Link href="/about-us/">About Us</Link>
            <Link href="/blogs/">Blogs</Link>
            <Link href="/contact/">Contact Us</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-and-conditions/">Terms & Conditions</Link>
          </div>
        </div>

        <div className="cr-contact-footerBottom">
          <span>© 2026 Redefine Realtors. All rights reserved.</span>
          <a href="tel:+919335167888">+91 93351 67888</a>
        </div>
      </footer>
    </>
  );
}