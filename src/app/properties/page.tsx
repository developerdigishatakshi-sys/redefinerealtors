import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import BookPropertyVisitForm from "@/components/book-property-visit-form";

export const metadata: Metadata = {
  title: "Properties Archive | Redefine Realtors",
  description:
    "Explore residential and commercial properties from Redefine Realtors, including The Elite, Purvanchal Royal Atlantis, Eldeco, Omaxe and Sahu Pearl.",
};

const properties = [
  {
    title: "The Elite by Rohit Group in Gomti Nagar Extension Lucknow",
    location: "Gomti Nagar Extension, Lucknow",
    description:
      "Premium 3 and 4 BHK residences at Vardan Khand, Gomti Nagar Extension.",
    image: "/images/properties/the-elite.jpg",
    href: "/property/the-elite-by-rohit-group-in-gomti-nagar-extension-lucknow/",
    alt: "The Elite by Rohit Group residential development",
  },
  {
    title: "Purvanchal Royal Atlantis Phase 1 Lucknow",
    location: "CG City, Gomti Nagar Extension, Lucknow",
    description:
      "Spacious 5 BHK residences in the Royal Atlantis development.",
    image: "/images/properties/purvanchal-royal-atlantis.jpg",
    href: "/property/purvanchal-royal-atlantis-phase-1-lucknow/",
    alt: "Purvanchal Royal Atlantis Phase 1 development",
  },
  {
    title: "Eldeco Yamuna Expressway",
    location: "Sector 22D, Yamuna Expressway",
    description:
      "Eldeco Echoes of Eden premium 3 BHK residential development.",
    image: "/images/properties/eldeco-yamuna.jpg",
    href: "/property/eldeco/",
    alt: "Eldeco Echoes of Eden residential development",
  },
  {
    title: "Omaxe",
    location: "Vibhuti Khand, Gomti Nagar, Lucknow",
    description:
      "Omaxe Centre Point — retail, food court, hospitality and office spaces.",
    image: "/images/properties/omaxe.jpg",
    href: "/property/omaxe/",
    alt: "Omaxe Centre Point commercial tower",
  },
  {
    title: "Sahu Pearl",
    location: "Main Sultanpur Road, Lucknow",
    description:
      "Sahu City Pearl — thoughtfully planned 2 and 3 BHK apartments.",
    image: "/images/properties/sahu-pearl.webp",
    href: "/property/sahu-pearl/",
    alt: "Sahu City Pearl residential development",
  },
];

export default function PropertiesPage() {
  return (
    <>
      <SiteHeader />

      <main className="properties-page">
        <section className="properties-page__content" aria-labelledby="properties-title">
          <h1 id="properties-title">Our Properties</h1>

          <div className="properties-page__layout">
            <div className="properties-page__grid">
            {properties.map((property, index) => (
              <article className="properties-page__card" key={property.href}>
                <Link
                  href={property.href}
                  className="properties-page__image-link"
                  aria-label={`View ${property.title}`}
                >
                  <div className="properties-page__image">
                    <Image
                      src={property.image}
                      alt={property.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 450px"
                      priority={index < 2}
                    />
                  </div>
                </Link>

                <div className="properties-page__details">
                  <h2>
                    <Link href={property.href}>{property.title}</Link>
                  </h2>
                  <p className="properties-page__location">
                    {property.location}
                  </p>
                  <p className="properties-page__description">
                    {property.description}
                  </p>
                  <Link
                    href={property.href}
                    className="properties-page__view"
                  >
                    View Property <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
            </div>

            <aside className="properties-page__booking" aria-labelledby="booking-title">
              <BookPropertyVisitForm />
            </aside>
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
            <Link href="/contact/">Contact Us</Link>
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