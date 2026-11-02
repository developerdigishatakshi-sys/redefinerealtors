"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "919335167888";

export default function BookPropertyVisitForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const property = String(form.get("property") || "General property visit");

    const message = [
      "Hello Redefine Realtors, I would like to book a property visit.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Property of interest: ${property}`,
      "",
      "Please contact me to confirm a suitable visit time.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="book-visit-form" onSubmit={handleSubmit}>
      <div className="book-visit-form__heading">
        <span>PERSONALISED PROPERTY ASSISTANCE</span>
        <h2 id="booking-title">Book a Property Visit</h2>
        <p>Share your details and our team will help arrange your visit.</p>
      </div>

      <label htmlFor="visit-name">Name</label>
      <input id="visit-name" name="name" type="text" placeholder="Your full name" autoComplete="name" required />

      <label htmlFor="visit-phone">Phone</label>
      <input id="visit-phone" name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" inputMode="tel" pattern="[+]?[0-9\s()-]{8,18}" title="Enter a valid phone number" required />

      <label htmlFor="visit-email">Email <span>(optional)</span></label>
      <input id="visit-email" name="email" type="email" placeholder="Your email address" autoComplete="email" />

      <label htmlFor="visit-property">Interested in</label>
      <select id="visit-property" name="property" defaultValue="">
        <option value="" disabled>Select a property</option>
        <option>The Elite by Rohit Group</option>
        <option>Purvanchal Royal Atlantis Phase 1</option>
        <option>Eldeco Echoes of Eden</option>
        <option>Omaxe Centre Point</option>
        <option>Sahu City Pearl</option>
        <option>Not sure yet — help me choose</option>
      </select>

      <button type="submit">Request a Visit <span aria-hidden="true">↗</span></button>
      <p className="book-visit-form__note">Your request opens in WhatsApp so you can send it directly to our team.</p>
    </form>
  );
}
