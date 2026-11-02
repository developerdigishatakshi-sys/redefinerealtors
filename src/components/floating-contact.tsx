"use client";

import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [visitOpen, setVisitOpen] = useState(false);

  useEffect(() => {
    if (!visitOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisitOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visitOpen]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();

    const message = [
      "Hello Redefine Realtors, I would like to book a property visit.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/919335167888?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setVisitOpen(false);
    event.currentTarget.reset();
  }

  return (
    <>
      <aside className="floating-contact" aria-label="Quick contact options">
        <a
          className="floating-contact__button"
          href="tel:+919335167888"
          title="Call Redefine Realtors"
          aria-label="Call Redefine Realtors"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z" />
          </svg>
        </a>

        <a
          className="floating-contact__button"
          href="https://wa.me/919335167888"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Redefine Realtors"
          aria-label="WhatsApp Redefine Realtors"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z" />
            <path d="M9 8.5c.3-.5.6-.5.9-.1l1 1.5c.2.3.1.6-.2.9l-.6.6c.7 1.3 1.7 2.3 3 3l.6-.6c.3-.3.6-.4.9-.2l1.5 1c.4.3.4.6-.1.9-.6.5-1.3.7-2 .6-2.6-.5-5.6-3.5-6.1-6.1-.1-.7.1-1.4.6-2Z" />
          </svg>
        </a>

        <button
          className="floating-contact__button"
          type="button"
          title="Enquire Now"
          aria-label="Book a property visit"
          onClick={() => setVisitOpen(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
            <path d="M14 3v5h5M9 13h6M9 17h6" />
          </svg>
        </button>
      </aside>

      <button
        type="button"
        className="floating-contact-label"
        onClick={() => setVisitOpen(true)}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M16 2v8.4a2 2 0 0 1-2 2H11.9V16l-4.2-3.6H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
        </svg>
        Contact Us
      </button>

      {visitOpen && (
        <div
          className="property-visit-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setVisitOpen(false);
          }}
        >
          <section
            className="property-visit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-visit-title"
          >
            <button
              type="button"
              className="property-visit-close"
              onClick={() => setVisitOpen(false)}
              aria-label="Close property visit form"
            >
              ×
            </button>

            <h2 id="property-visit-title">Book a Property Visit</h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="visit-name">Name</label>
              <input
                id="visit-name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
              />

              <label htmlFor="visit-phone">Phone</label>
              <input
                id="visit-phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                required
              />

              <label htmlFor="visit-email">Email (optional)</label>
              <input
                id="visit-email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />

              <button className="property-visit-submit" type="submit">
                Submit
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}