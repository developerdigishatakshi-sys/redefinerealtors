"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero/property-10.jpg",
    alt: "Redefine Realtors original residential property slide one",
  },
  {
    image: "/images/hero/property-2.jpg",
    alt: "Redefine Realtors original residential property slide two",
  },
  {
    image: "/images/hero/property-9.jpg",
    alt: "Redefine Realtors original residential property slide three",
  },
];

export default function HeroBackground() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (motionPreference.matches) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-image hero-slideshow" aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-slide${index === activeSlide ? " is-active" : ""}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
          role="img"
          aria-label={slide.alt}
        />
      ))}
    </div>
  );
}