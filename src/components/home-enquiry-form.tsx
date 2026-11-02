"use client";

import type { FormEvent } from "react";

export default function HomeEnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const requirement = String(form.get("requirement") || "").trim();
    const message = String(form.get("message") || "").trim();

    const enquiry = [
      "Hello Redefine Realtors, I would like to enquire about a property.",
      "",
      `Name: ${name}`,
      `Email: ${email || "Not provided"}`,
      `Phone: ${phone}`,
      `Requirement: ${requirement}`,
      `Message: ${message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919335167888?text=${encodeURIComponent(enquiry)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="home-enquiry-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        aria-label="Full Name"
        autoComplete="name"
        required
      />

      <div className="home-enquiry-fields">
        <input
          type="email"
          name="email"
          placeholder="Work Email"
          aria-label="Work Email"
          autoComplete="email"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          aria-label="Phone"
          autoComplete="tel"
          required
        />
      </div>

      <select name="requirement" aria-label="What are you looking for?" required defaultValue="">
        <option value="" disabled>What are you looking for?</option>
        <option value="Buy a property">Buy a property</option>
        <option value="Sell a property">Sell a property</option>
        <option value="Lease a property">Lease a property</option>
        <option value="Commercial property">Commercial property</option>
        <option value="Property consultation">Property consultation</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        aria-label="Message"
        rows={4}
      />

      <button className="button button-dark" type="submit">
        Send Enquiry
      </button>
      <p className="home-enquiry-note">
        Your enquiry will open in WhatsApp so you can send it directly to our team.
      </p>
    </form>
  );
}