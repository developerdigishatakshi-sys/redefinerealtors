
import Image from "next/image";
import Link from "next/link";
import type { PropertyData } from "@/data/property-data";
import PurvanchalPropertyPage from "@/components/purvanchal-property-page";
import TheEliteMedia from "@/components/the-elite-media";
import EldecoPropertyPage from "@/components/eldeco-property-page";
import TheEliteVideo from "@/components/the-elite-video";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import OmaxePropertyPage from "@/components/omaxe-property-page";
import SahuPearlPropertyPage from "@/components/sahu-pearl-property-page";
const ELITE_SLUG =
  "the-elite-by-rohit-group-in-gomti-nagar-extension-lucknow";


const faqAnswersBySlug: Record<string, string[]> = {
  "the-elite-by-rohit-group-in-gomti-nagar-extension-lucknow": [
    "The Elite offers 3 BHK and 4 BHK residences, each described with a store and servant room.",
    "The stated carpet area of the 3 BHK residence is 1,692.90 sq. ft.",
    "The stated carpet area of the 4 BHK residence is 2,282.70 sq. ft.",
    "The supplied price list effective 15 June 2026 states ₹2,85,67,000 for the 3 BHK and ₹3,57,89,600 for the 4 BHK, before applicable GST and other charges. Obtain a current unit-specific quotation.",
    "The supplied project information lists UP RERA registration UPRERAPRJ831567/12/2025. Verify the registration and latest disclosures directly on the UP RERA portal.",
    "The listed amenities include indoor and outdoor gyms, swimming pool, jogging track, badminton court, basketball court and landscaped leisure spaces. Confirm final delivery specifications.",
    "The supplied price information excludes applicable GST and other payable amounts. Confirm parking, club-related charges and every additional cost in the current written cost sheet.",
    "The supplied information describes a construction-linked payment structure. Request the latest milestone schedule and payment demand terms before booking.",
    "Redefine Realtors can assist with configuration comparisons, current availability, floor plans, cost sheets and site-visit coordination."
  ],
  "purvanchal-royal-atlantis-phase-1-lucknow": [
    "Purvanchal Royal Atlantis Phase 1 is located in Chak Gajaria, CG City, Gomti Nagar Extension, Lucknow.",
    "The supplied project information describes a 5 BHK apartment configuration.",
    "The approximate carpet area stated in the supplied information is 2,995 sq. ft. The stated balcony area is 663 sq. ft. and super area is 4,825 sq. ft.",
    "The supplied project information lists UP RERA registration UPRERAPRJ573204/04/2026. Verify the registration and latest disclosures on the UP RERA portal."
  ],
  "eldeco": [
    "Eldeco Echoes of Eden is located in Sector 22D along the Yamuna Expressway.",
    "The supplied information lists 3 BHK + 2T at 1,550 sq. ft. and 3 BHK + 3T at 1,850 sq. ft. Confirm the area definition against the current floor plan.",
    "The captured pre-launch reference for Tower Caelum is approximately ₹9,300 per sq. ft. BSP. A separate price list effective 15 June 2026 lists ₹10,999 per sq. ft. for specified Tower Haven and Elysion inventory. These are different references, not one uniform current rate.",
    "The supplied information mentions approximately 3 acres of central greens, a half-Olympic swimming pool, clubhouse, podium planning and five high-speed lifts per tower. Confirm final specifications with the developer."
  ],
  "omaxe": [
    "Omaxe Centre Point is located in Vibhuti Khand, Gomti Nagar, Lucknow.",
    "The supplied information identifies retail shops, kiosks, food court and restaurant spaces, hotel suites and office spaces.",
    "The captured floor-wise BSP references range from ₹18,500 to ₹40,000 per sq. ft., depending on floor and unit type. These are dated source figures, not a current quotation. Taxes and additional charges may apply.",
    "Buyers may compare the commercial location, floor, unit type, total acquisition cost, occupancy potential and written lease or return conditions. Any assured-return or rental representation must be checked against the signed contractual documents; investment returns are not guaranteed."
  ],
  "sahu-pearl": [
    "Sahu City Pearl is located within Sahu City Phase 2 on Main Sultanpur Road, Lucknow, opposite Alpha Public School.",
    "The supplied information lists 2 BHK, 3 BHK + 2T and 3 BHK + 3T + Store configurations.",
    "The captured price list, stated as applicable from 1 July 2026, lists the 2 BHK BSP at ₹63,18,750. Additional charges are separate.",
    "The same captured price list lists ₹79,67,250 for 3 BHK + 2T and ₹87,49,500 for 3 BHK + 3T + Store. Additional charges are separate.",
    "The listed amenities include swimming pool, kids' pool, clubhouse, gymnasium, kids' play area, badminton court, skating rink, jogging and cycle tracks, senior citizen area and landscaped gardens.",
    "The supplied project information lists UP RERA registration UPRERAPRJ391104/02/2024. Verify the registration and latest disclosures directly on the UP RERA portal.",
    "The supplied schedule describes 10% of BSP at booking, followed by 5% on the 45th day and further construction-linked instalments. Confirm the current payment schedule with the promoter.",
    "The supplied brochure states an approximate 15-minute journey to Lucknow Airport. Actual travel time varies with traffic, route and road conditions."
  ]
};
function PropertySections({
  sections,
}: {
  sections: PropertyData["sections"];
}) {
  return (
    <div className="property-detail__sections">
      {sections.map((section, index) => (
        <section
          className="property-detail__section"
          key={section.title}
        >
          <div className="property-detail__section-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="property-detail__section-content">
            <h2>{section.title}</h2>

            {/* Main section paragraphs */}
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}

            {/* Main section bullet list */}
            {section.bullets && (
              <ul className="property-detail__bullet-list">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {/* Main section table */}
            {section.table && (
              <div className="property-detail__table-wrap">
                <table className="property-detail__table">
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {section.table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Nested subsections */}
            {section.subsections?.map((subsection) => (
              <div
                className="property-detail__subsection"
                key={subsection.title}
              >
                <h3>{subsection.title}</h3>

                {/* Subsection paragraphs */}
                {subsection.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {/* Subsection bullet list */}
                {subsection.bullets && (
                  <ul className="property-detail__bullet-list">
                    {subsection.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Subsection table */}
                {subsection.table && (
                  <div className="property-detail__table-wrap">
                    <table className="property-detail__table">
                      <thead>
                        <tr>
                          {subsection.table.headers.map((header) => (
                            <th key={header}>{header}</th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {subsection.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function PropertyContact({
  property,
}: {
  property: PropertyData;
}) {
  return (
    <section className="property-detail__contact">
      <span className="property-detail__eyebrow">
        YOUR PROPERTY SEARCH STARTS HERE
      </span>

      <h2>Interested in {property.title}?</h2>

      <p>
        Connect with Redefine Realtors for current availability, pricing,
        floor plans and site-visit assistance.
      </p>

      <div className="property-detail__contact-actions">
        <Link
          href="/contact/"
          className="property-detail__contact-primary"
        >
          Enquire About This Property
        </Link>

        <a
          href="tel:+919335167888"
          className="property-detail__contact-secondary"
        >
          Call +91 93351 67888
        </a>
      </div>
    </section>
  );
}


// Explicit optional fields keep every property's configuration shape type-safe.
type PropertyConfiguration = {
  name: string;
  area: string;
  carpet?: string;
  balcony?: string;
  bsp?: string;
  note?: string;
};

type PropertyOverview = {
  eyebrow: string;
  title: string;
  description: string;
  facts: { label: string; value: string }[];
  configurations?: PropertyConfiguration[];
  pricing?: { floor: string; rate: string }[];
  pricingNote?: string;
  features?: string[];
};

// Property-specific overview and configuration presentation
function PropertyQuickOverview({ property }: { property: PropertyData }) {
  const overviewBySlug: Record<string, PropertyOverview> = {
    "purvanchal-royal-atlantis-phase-1-lucknow": {
      eyebrow: "RESIDENCE AT A GLANCE",
      title: "A spacious 5 BHK residential experience",
      description:
        "Explore the key spatial specifications and lifestyle features listed in the supplied project information.",
      facts: [
        { label: "Configuration", value: "5 BHK" },
        { label: "Approx. carpet area", value: "2,995 sq. ft." },
        { label: "Balcony area", value: "663 sq. ft." },
        { label: "Super area", value: "4,825 sq. ft." },
      ],
      features: [
        "Three-level basement parking",
        "Club and recreational facilities",
        "Swimming pool and sports facilities",
        "Wellness amenities",
        "EV charging provisions",
        "Fibre-to-home connectivity",
      ],
    },
    eldeco: {
      eyebrow: "RESIDENCE AT A GLANCE",
      title: "Thoughtfully planned residential configurations",
      description:
        "Compare the two 3 BHK configurations documented for Eldeco Echoes of Eden.",
      facts: [
        { label: "Location", value: "Sector 22D, Yamuna Expressway" },
        { label: "Central greens", value: "Approx. 3 acres" },
        { label: "Lift provision", value: "5 high-speed lifts per tower" },
        { label: "Lifestyle", value: "Clubhouse and half-Olympic pool" },
      ],
      configurations: [
        {
          name: "3 BHK + 2T",
          area: "1,550 sq. ft.",
          note: "Reference configuration area",
        },
        {
          name: "3 BHK + 3T",
          area: "1,850 sq. ft.",
          note: "Reference configuration area",
        },
      ],
      features: [
        "Three-side-open corner residences",
        "Central landscaped greens",
        "Clubhouse facilities",
        "Half-Olympic swimming pool",
      ],
    },
    omaxe: {
      eyebrow: "COMMERCIAL PROPERTY OVERVIEW",
      title: "Explore the floor-wise commercial rate structure",
      description:
        "The supplied Omaxe Centre Point pricing references list different basic sale prices by floor. These are indicative source figures, not a live quotation.",
      facts: [
        { label: "Property type", value: "Commercial" },
        { label: "Location", value: "Vibhuti Khand, Gomti Nagar" },
        { label: "Property mix", value: "Retail, offices and hospitality" },
        { label: "Available formats", value: "Shops, kiosks and office spaces" },
      ],
      pricing: [
        { floor: "Lower Ground", rate: "₹32,000" },
        { floor: "Ground", rate: "₹40,000" },
        { floor: "First", rate: "₹28,000" },
        { floor: "Second", rate: "₹24,000" },
        { floor: "Third", rate: "₹20,000" },
        { floor: "Fifth–Fourteenth", rate: "₹18,500" },
      ],
      pricingNote:
        "Indicative BSP per sq. ft. from the supplied pricing information. Confirm current availability, applicable charges, taxes and commercial terms with the promoter before making a decision.",
      features: [
        "Retail spaces and kiosks",
        "Food court and restaurants",
        "Hotel suites",
        "Office spaces",
      ],
    },
    "sahu-pearl": {
      eyebrow: "RESIDENCE AT A GLANCE",
      title: "Find a configuration that fits your family",
      description:
        "Compare the residential configurations and reference areas listed in the supplied Sahu City Pearl price information.",
      facts: [
        { label: "Location", value: "Main Sultanpur Road, Lucknow" },
        { label: "Project phase", value: "Sahu City Phase 2" },
        { label: "RERA reference", value: "UPRERAPRJ391104/02/2024" },
        { label: "Project type", value: "2 and 3 BHK residences" },
      ],
      configurations: [
        {
          name: "2 BHK",
          area: "1,175 sq. ft.",
          carpet: "660.37 sq. ft.",
          balcony: "98.16 sq. ft.",
          bsp: "₹63,18,750",
        },
        {
          name: "3 BHK + 2T",
          area: "1,489 sq. ft.",
          carpet: "867.04 sq. ft.",
          balcony: "108.72 sq. ft.",
          bsp: "₹79,67,250",
        },
        {
          name: "3 BHK + 3T + Store",
          area: "1,638 sq. ft.",
          carpet: "980.49 sq. ft.",
          balcony: "105.81 sq. ft.",
          bsp: "₹87,49,500",
        },
      ],
      pricingNote:
        "BSP figures are reproduced from the supplied price list stated as applicable from 1 July 2026. Confirm the latest price, additional charges and availability with the promoter.",
    },
  };

  const overview = overviewBySlug[property.slug];

  if (!overview) return null;

  return (
    <section className="property-detail__overview">
      <div className="property-detail__overview-heading">
        <span>{overview.eyebrow}</span>
        <h2>{overview.title}</h2>
        <p>{overview.description}</p>
      </div>

      <div className="property-detail__overview-facts">
        {overview.facts.map((fact) => (
          <article
            className="property-detail__overview-fact"
            key={fact.label}
          >
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </article>
        ))}
      </div>

      {overview.configurations && (
        <div className="property-detail__configuration">
          <h3>Configuration comparison</h3>

          <div className="property-detail__configuration-grid">
            {overview.configurations.map((configuration) => (
              <article
                className="property-detail__configuration-card"
                key={configuration.name}
              >
                <span>{configuration.name}</span>
                <strong>{configuration.area}</strong>
                {configuration.carpet && (
                  <p>Carpet area: {configuration.carpet}</p>
                )}
                {configuration.balcony && (
                  <p>Balcony: {configuration.balcony}</p>
                )}
                {configuration.bsp && (
                  <p className="property-detail__configuration-price">
                    BSP: {configuration.bsp}
                  </p>
                )}
                {configuration.note && <p>{configuration.note}</p>}
              </article>
            ))}
          </div>
        </div>
      )}

      {overview.pricing && (
        <div className="property-detail__pricing">
          <h3>Floor-wise basic sale price</h3>

          <div className="property-detail__table-wrap">
            <table className="property-detail__table">
              <thead>
                <tr>
                  <th>Floor</th>
                  <th>Basic sale price / sq. ft.</th>
                </tr>
              </thead>
              <tbody>
                {overview.pricing.map((item) => (
                  <tr key={item.floor}>
                    <td>{item.floor}</td>
                    <td>{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="property-detail__pricing-note">
            {overview.pricingNote}
          </p>
        </div>
      )}

      {overview.features && (
        <div className="property-detail__overview-features">
          <h3>Key project features</h3>
          <ul>
            {overview.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {!overview.pricing && overview.configurations && (
        <p className="property-detail__pricing-note">
          {overview.pricingNote}
        </p>
      )}
    </section>
  );
}


export default function PropertyDetail({
  property,
}: {
  property: PropertyData;
}) {
  // Dedicated property page renderers
  // Keep these checks before the generic property layout.

  if (property.slug === "omaxe") {
    return <OmaxePropertyPage property={property} />;
  }

  if (property.slug === "eldeco") {
    return <EldecoPropertyPage property={property} />;
  }
  if (property.slug === "sahu-pearl") {
  return <SahuPearlPropertyPage property={property} />;
}

  if (property.slug === "purvanchal-royal-atlantis-phase-1-lucknow") {
    return <PurvanchalPropertyPage />;
  }

  const isElite = property.slug === ELITE_SLUG;

  return (
    <main
      className={`property-detail ${
        property.slug === "sahu-pearl"
          ? "property-detail--sahu"
          : isElite
            ? "property-detail--elite"
            : "property-detail--default"
      }`}
    >
      {/* Property Hero */}
      <section className="property-detail__hero">
        <Image
          src={property.image}
          alt={property.heroTitle ?? property.title}
          fill
          priority
          sizes="100vw"
          className="property-detail__hero-image"
        />

        <div className="property-detail__hero-overlay" />

        <div className="property-detail__hero-content">
          <Link href="/properties/" className="property-detail__back">
            <ArrowLeft
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span>Back to all properties</span>
          </Link>

          <span className="property-detail__eyebrow">
            REDEFINE REALTORS{" "}
            <span aria-hidden="true">·</span> PROPERTY DETAILS
          </span>

          <h1>{property.heroTitle ?? property.title}</h1>
          <p>{property.location}</p>
        </div>
      </section>

      <div className="property-detail__body">
        {/* Project Introduction */}
        <section className="property-detail__intro">
          <div>
            <span className="property-detail__eyebrow property-detail__eyebrow--dark">
              EXPLORE THE PROJECT
            </span>

            <h2>{property.fullTitle}</h2>
            <p>{property.description}</p>
          </div>

          <aside className="property-detail__quick-info">
            <span>PROJECT LOCATION</span>
            <strong>{property.location}</strong>

            {property.rera && (
              <>
                <span>RERA REGISTRATION</span>
                <strong>{property.rera}</strong>
              </>
            )}

            <Link
              href="/contact/"
              className="property-detail__enquire"
            >
              Enquire Now
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </aside>
        </section>

        {/* Project Highlights */}
        <section className="property-detail__highlights">
          <div className="property-detail__section-heading">
            <span className="property-detail__eyebrow property-detail__eyebrow--dark">
              AT A GLANCE
            </span>

            <h2>Project Highlights</h2>
          </div>

          <ul>
            {property.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Property Article Sections */}
        <PropertySections sections={property.sections} />

        {/* Property-specific overview */}
        <PropertyQuickOverview property={property} />

        {/* The Elite Floor Plan */}
        {isElite && <TheEliteMedia />}

        {/* Frequently Asked Questions */}
        <section className="property-detail__faq">
          <span className="property-detail__eyebrow property-detail__eyebrow--dark">
            NEED MORE INFORMATION?
          </span>

          <h2>Frequently Asked Questions</h2>

          {property.faqs.map((faq, index) => (
            <details
              className="property-detail__faq-item"
              key={`${faq.question}-${index}`}
            >
              <summary>{faq.question}</summary>

              {faq.answer && <p>{faq.answer}</p>}
            </details>
          ))}
        </section>

        {/* The Elite Project Video */}
        {isElite && <TheEliteVideo />}

        {/* Contact Section */}
        <PropertyContact property={property} />

        {/* Disclaimer */}
        <p className="property-detail__disclaimer">
          {property.disclaimer}
        </p>

        {/* Back to Properties */}
        <div className="property-detail__bottom-link">
          <Link href="/properties/" className="property-detail__back">
            <ArrowLeft
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span>Back to all properties</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
