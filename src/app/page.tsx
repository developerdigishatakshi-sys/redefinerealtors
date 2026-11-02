
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import HeroBackground from "@/components/hero-background";
import HomeEnquiryForm from "@/components/home-enquiry-form";

const services = [
  {
    number: "01",
    title: "Buy a property",
    text: "Find your dream home or prime investment. We guide you to the perfect apartment, villa, or plot in Lucknow & Noida.",
    action: "Find a home",
    href: "/properties/",
    image: "/images/services/houses.png",
    alt: "Illustration of two elegant residential buildings",
  },
  {
    number: "02",
    title: "Sell property",
    text: "Find your dream home or prime investment. We guide you to the perfect apartment, villa, or plot in Lucknow & Noida.",
    action: "Sell property",
    href: "/contact/",
    image: "/images/services/for-sale.png",
    alt: "Illustration of a house with a property for sale sign",
  },
  {
    number: "03",
    title: "Leasing a property",
    text: "Find your dream home or prime investment. We guide you to the perfect apartment, villa, or plot in Lucknow & Noida.",
    action: "Find a rental",
    href: "/contact/",
    image: "/images/services/leasing.png",
    alt: "Illustration of a woman exploring residential buildings",
  },
];

const differences = [
  {
    number: "01",
    title: "Experienced",
    text: "Local market understanding in Lucknow and Noida to help you make informed property decisions.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Competitive price",
    text: "Thoughtful property comparisons and negotiation support focused on meaningful value.",
    icon: "₹",
  },
  {
    number: "03",
    title: "On time",
    text: "Clear communication and coordinated next steps throughout your property journey.",
    icon: "◷",
  },
  {
    number: "04",
    title: "Quality first",
    text: "Guidance to help you evaluate project details, specifications and the features that matter.",
    icon: "◇",
  },
];

const articles = [
  {
    date: "17 SEP 2026",
    title: "Are Omaxe Flats in Lucknow a Smart Choice for Home Buyers?",
    text: "What to consider when comparing location, layout, amenities and long-term suitability.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    href: "/blogs/",
  },
  {
    date: "17 SEP 2026",
    title: "Is Sahu City Pearl Lucknow the Right Home for Your Family?",
    text: "Explore the questions that can help you evaluate a residential project for your family.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85",
    href: "/blogs/",
  },
  {
    date: "11 SEP 2026",
    title: "How to Choose the Best Real Estate Agents in Lucknow",
    text: "A practical approach to finding professional guidance for your next property decision.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    href: "/blogs/",
  },
];

const galleryImages = Array.from({ length: 11 }, (_, index) => ({
  src: `/images/gallery/property-${index + 1}.jpg`,
  alt: `Redefine Realtors property gallery image ${index + 1}`,
}));

const galleryTrackImages = [
  ...galleryImages,
  ...galleryImages,
  ...galleryImages,
];
const partnerLogos = [
  { src: "/images/partners/deserve.png", alt: "Deserve" },
  { src: "/images/partners/kohinoor.png", alt: "Kohinoor" },
  { src: "/images/partners/pearl.png", alt: "Pearl" },
  { src: "/images/partners/omaxe.png", alt: "Omaxe" },
  { src: "/images/partners/jashn-elevate.png", alt: "Jashn Elevate" },
];

const partnerTrackLogos = [...partnerLogos, ...partnerLogos];
function Arrow() {
  return (
    <span aria-hidden="true" className="arrow-icon">
      ↗
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <HeroBackground />
          <div className="hero-shade" aria-hidden="true"></div>

          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light">
                <span className="eyebrow-line"></span>
                YOUR PROPERTY JOURNEY, REDEFINED
              </div>

              <h1>
                Find Your Dream Property in <em>Lucknow &amp; Noida</em>
              </h1>

              <p>
                From luxurious apartments and commercial spaces to seamless
                leasing, we provide expert guidance, transparent pricing and
                dedicated support at every step.
              </p>

              <div className="hero-actions">
                <a className="button button-gold" href="/properties/">
                  Explore Properties <Arrow />
                </a>

                <a className="button button-outline-light" href="/contact/">
                  Talk to an Expert
                </a>
              </div>

              <div className="hero-trust">
                <span className="trust-symbol">✓</span>
                <span>Personalised guidance</span>
                <span className="trust-dot">·</span>
                <span>Transparent process</span>
              </div>
            </div>

            <div className="hero-side-note">
              <span className="side-note-line"></span>
              <span>
                FIND A PLACE
                <br />
                TO CALL YOUR OWN
              </span>
            </div>

            <a className="hero-scroll" href="#services">
              <span className="scroll-icon">↓</span>
              <span>SCROLL TO DISCOVER</span>
            </a>
          </div>

          <div className="hero-location">
            <span className="location-pulse"></span>
            LUCKNOW <span>·</span> NOIDA
          </div>
        </section>

        <div className="property-ticker" aria-label="Property services">
          <div className="property-ticker-track">
            <div className="property-ticker-group">
              <span>FIND YOUR DREAM HOME</span><i>✳</i>
              <span>LUCKNOW · NOIDA</span><i>✳</i>
              <span>RESIDENTIAL · COMMERCIAL · LEASING</span><i>✳</i>
              <span>YOUR PROPERTY JOURNEY, REDEFINED</span><i>✳</i>
            </div>
            <div className="property-ticker-group" aria-hidden="true">
              <span>FIND YOUR DREAM HOME</span><i>✳</i>
              <span>LUCKNOW · NOIDA</span><i>✳</i>
              <span>RESIDENTIAL · COMMERCIAL · LEASING</span><i>✳</i>
              <span>YOUR PROPERTY JOURNEY, REDEFINED</span><i>✳</i>
            </div>
          </div>
        </div>

        <section
          className="reference-services section-pad"
          id="services"
          aria-labelledby="reference-services-heading"
        >
          <div className="reference-services-container">
            <div className="reference-services-heading">
              <h2 id="reference-services-heading">Our Services</h2>
            </div>

            <div className="reference-service-grid">
              {services.map((service) => (
                <article
                  className="reference-service-card"
                  key={service.number}
                >
                  <a
                    className="reference-service-image-link"
                    href={service.href}
                    aria-label={service.title}
                  >
                    <img
                      className="reference-service-image"
                      src={service.image}
                      alt={service.alt}
                      width="245"
                      height="245"
                      loading="lazy"
                    />
                  </a>

                  <div className="reference-service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="about-section section-pad">
          <div className="container about-grid">
            <div className="about-visual">
              <div
                className="about-photo-main"
                role="img"
                aria-label="Modern luxury home architecture"
              ></div>

              <div
                className="about-photo-small"
                role="img"
                aria-label="Elegant living room interior"
              ></div>

              <div className="about-stamp">
                <span className="stamp-icon">⌂</span>
                <span>
                  YOUR TRUSTED
                  <br />
                  PROPERTY PARTNER
                </span>
              </div>

              <div className="about-vertical-label">
                REDEFINING REAL ESTATE
              </div>
            </div>

            <div className="about-copy">
              <div className="eyebrow">
                <span className="eyebrow-line"></span> A BETTER WAY TO FIND
                HOME
              </div>

              <h2>
                Your Trusted Partners
                <br />
                in <em>Real Estate</em>
              </h2>

              <p className="about-lead">
                At Redefine Realtors, we don&apos;t just find properties; we
                find possibilities.
              </p>

              <p>
                Buying, selling or leasing a property is more than a
                transaction. It is a meaningful life decision. As a RERA
                registered real estate agent in Lucknow and Noida, we aim to
                make the journey transparent, seamless and personal.
              </p>

              <div className="about-points">
                <div>
                  <span>01</span>
                  <p>
                    <strong>Residential real estate</strong>
                    Homes, apartments, villas and plots for different needs.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    <strong>Commercial real estate</strong>
                    Workspaces and commercial opportunities for businesses.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    <strong>Leasing services</strong>
                    Support for both property owners and prospective tenants.
                  </p>
                </div>
              </div>

              <a className="button button-dark" href="/about-us/">
                Discover Our Approach <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="difference-section section-pad">
          <div className="container">
            <div className="section-heading centered-heading">
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                THE REDEFINE DIFFERENCE
                <span className="eyebrow-line"></span>
              </div>

              <h2>
                What makes us <em>different?</em>
              </h2>

              <p>
                Good property guidance starts with listening, understanding
                and putting your needs first.
              </p>
            </div>

            <div className="difference-grid">
              {differences.map((item) => (
                <article className="difference-card" key={item.number}>
                  <div className="difference-card-top">
                    <span className="difference-icon">{item.icon}</span>
                    <span className="difference-number">{item.number}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="difference-rule"></span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="gallery-section" aria-labelledby="gallery-heading">
          <div className="gallery-heading">
            <span className="gallery-eyebrow">A CLOSER LOOK</span>
            <h2 id="gallery-heading">Photo <em>Gallery</em></h2>
            <p>A glimpse into spaces, homes and possibilities.</p>
          </div>

          <div className="gallery-marquee" aria-label="Property photo gallery">
            <div className="gallery-row">
              <div className="gallery-track gallery-track--forward">
                {galleryTrackImages.map((image, index) => (
                  <img
                    key={`gallery-top-${index}`}
                    src={image.src}
                    alt={image.alt}
                    width="400"
                    height="225"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
              <div className="gallery-track gallery-track--forward" aria-hidden="true">
                {galleryTrackImages.map((image, index) => (
                  <img
                    key={`gallery-top-copy-${index}`}
                    src={image.src}
                    alt=""
                    width="400"
                    height="225"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
            </div>

            <div className="gallery-row">
              <div className="gallery-track gallery-track--reverse">
                {galleryTrackImages.map((image, index) => (
                  <img
                    key={`gallery-bottom-${index}`}
                    src={galleryImages[galleryImages.length - 1 - (index % galleryImages.length)].src}
                    alt={image.alt}
                    width="400"
                    height="225"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
              <div className="gallery-track gallery-track--reverse" aria-hidden="true">
                {galleryTrackImages.map((image, index) => (
                  <img
                    key={`gallery-bottom-copy-${index}`}
                    src={galleryImages[galleryImages.length - 1 - (index % galleryImages.length)].src}
                    alt=""
                    width="400"
                    height="225"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="partners-section" aria-labelledby="partners-heading">
          <div className="partners-heading">
            <h2 id="partners-heading">Meet Our Partners</h2>
          </div>

          <div className="partners-marquee" aria-label="Our real estate partners">
            <div className="partners-track">
              {partnerTrackLogos.map((logo, index) => (
                <div className="partner-logo" key={`partner-${index}`}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width="160"
                    height="80"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <div className="partners-track" aria-hidden="true">
              {partnerTrackLogos.map((logo, index) => (
                <div className="partner-logo" key={`partner-copy-${index}`}>
                  <img
                    src={logo.src}
                    alt=""
                    width="160"
                    height="80"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-enquiry-section" aria-labelledby="home-enquiry-heading">
          <div className="home-enquiry-panel container">
            <div className="home-enquiry-heading">
              <h2 id="home-enquiry-heading">Let&apos;s Find Your Dream Property Together</h2>
              <p>
                Ready to take the next step in your property journey? We&apos;re here to help!
                Whether you&apos;re looking to buy, sell, or lease a property in Lucknow or Noida,
                our team at Redefine Realtors is just a call or click away.
              </p>
            </div>

            <div className="home-enquiry-content">
              <div className="home-enquiry-details">
                <a className="home-enquiry-detail" href="tel:+919335167888">
                  <span className="home-enquiry-icon" aria-hidden="true">☎</span>
                  <span>
                    <strong>+91 9335167888</strong>
                    <small>Free support</small>
                  </span>
                </a>

                <a className="home-enquiry-detail" href="mailto:info@redefinerealtors.com">
                  <span className="home-enquiry-icon" aria-hidden="true">✉</span>
                  <span>
                    <strong>info@redefinerealtors.com</strong>
                    <small>Help Email support</small>
                  </span>
                </a>
              </div>

              <HomeEnquiryForm />
            </div>
          </div>
        </section>


        <section className="dream-section section-pad">
          <div className="dream-cta">
            <h2>Looking for a dream home?</h2>
            <p>We can help you find your dream of a new home</p>
            <a className="button button-dark" href="/properties/">
              Explore Properties <Arrow />
            </a>
          </div>
        </section>


        <section className="blog-section section-pad">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line"></span> INSIGHTS &amp; ADVICE
                </div>

                <h2>
                  Ideas for your
                  <br />
                  <em>property journey.</em>
                </h2>
              </div>

              <a className="text-link blog-all-link" href="/blogs/">
                Explore all articles <Arrow />
              </a>
            </div>

            <div className="blog-grid">
              {articles.map((article) => (
                <article className="blog-card" key={article.title}>
                  <a
                    className="blog-image-link"
                    href={article.href}
                    aria-label={article.title}
                  >
                    <div
                      className="blog-image"
                      role="img"
                      aria-label="Residential property"
                      style={{
                        backgroundImage: `url("${article.image}")`,
                      }}
                    ></div>

                    <span className="blog-image-arrow">
                      <Arrow />
                    </span>
                  </a>

                  <div className="blog-card-body">
                    <span className="blog-date">
                      {article.date} <span>·</span> PROPERTY INSIGHTS
                    </span>

                    <h3>
                      <a href={article.href}>{article.title}</a>
                    </h3>

                    <p>{article.text}</p>

                    <a className="text-link" href={article.href}>
                      Read Article <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-column">
            <Link className="brand footer-brand" href="/">
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
                </svg>
              </span>

              <span className="brand-copy">
                <strong>REDEFINE</strong>
                <span>R E A L T O R S</span>
              </span>
            </Link>

            <p>
              Helping you make informed property decisions with clarity,
              care and local market understanding.
            </p>

            <span className="footer-rera">
              RERA Registered · UPRERAAGT14935
            </span>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            <a href="/about-us/">About Us</a>
            <a href="/properties/">Properties</a>
            <a href="/blogs/">Blog &amp; Insights</a>
            <a href="/contact/">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>
            <a href="/properties/">Buy a property</a>
            <a href="/contact/">Sell property</a>
            <a href="/contact/">Leasing</a>
            <a href="/contact/">Property consultation</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get in touch</h3>
            <a href="tel:+919335167888">+91 93351 67888</a>
            <a href="mailto:info@redefinerealtors.com">
              info@redefinerealtors.com
            </a>
            <p>
              D-6/860, Sector 6, Gomti Nagar Extension, Lucknow, Uttar Pradesh
              226010
            </p>

            <a
              className="footer-whatsapp"
              href="https://wa.me/919335167888"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <Arrow />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2026 Redefine Realtors. All rights reserved.</span>
            <span>Thoughtful guidance. Better property decisions.</span>
          </div>
        </div>
      </footer>
    </>
  );
}