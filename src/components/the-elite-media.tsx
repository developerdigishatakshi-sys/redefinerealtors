"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/properties/the-elite/lower-ground-floor.jpg",
    alt: "Lower Ground - Omaxe Lucknow",
  },
  {
    src: "/images/properties/the-elite/second-floor.jpg",
    alt: "Second Floor - Omaxe Lucknow",
  },
  {
    src: "/images/properties/the-elite/third-floor.jpg",
    alt: "Third Floor - Omaxe Lucknow",
  },
];

export default function TheEliteMedia() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <section className="the-elite-media__carousel">
      <div className="property-detail__section-heading">
        <span className="property-detail__eyebrow property-detail__eyebrow--dark">
          FLOOR PLAN
        </span>
        <h2>Floor Plan</h2>
      </div>

      <div className="the-elite-media__image">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 760px) 100vw, 1100px"
        />
      </div>

      <div className="the-elite-media__controls">
        <button
          type="button"
          onClick={() => setActive((i) => (i - 1 + slides.length) % slides.length)}
        >
          Previous
        </button>

        <span>{active + 1} / {slides.length}</span>

        <button
          type="button"
          onClick={() => setActive((i) => (i + 1) % slides.length)}
        >
          Next
        </button>
      </div>
    </section>
  );
}