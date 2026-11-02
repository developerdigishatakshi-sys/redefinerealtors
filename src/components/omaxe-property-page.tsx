"use client";

import Image from "next/image";
import { useState } from "react";
import type { PropertyData } from "@/data/property-data";

const BASE = "/images/properties/omaxe/";

const priceRows = [
  ["Lower Ground Floor", "Shop", "₹32,000/sq. ft."],
  ["Ground Floor", "Shop", "₹40,000/sq. ft."],
  ["First Floor", "Shop & Kiosk", "₹28,000/sq. ft."],
  ["Second Floor", "Food Court & Kiosk", "₹24,000/sq. ft."],
  ["Third Floor", "Food Court & Kiosk", "₹20,000/sq. ft."],
  ["5th–14th Floors", "Hotel Suites / Office Space", "₹18,500/sq. ft."]
];

const floorPlans = [
  { src: "lower-ground-floor.jpg", title: "Lower Ground Floor Plan" },
  { src: "second-floor-plan.jpg", title: "Second Floor Plan" },
  { src: "third-floor-plan.jpg", title: "Third Floor Plan" }
];

const videos = [
  "WhatsApp-Video-2026-08-17-at-17.41.22-1.mp4",
  "WhatsApp-Video-2026-08-17-at-17.41.22-2.mp4",
  "WhatsApp-Video-2026-08-17-at-17.41.22.mp4",
  "WhatsApp-Video-2026-08-17-at-17.41.23.mp4"
];

const faqItems = [
  {
    q: "Where is Omaxe Centre Point located in Lucknow?",
    a: "Omaxe Centre Point is located in Vibhuti Khand, Gomti Nagar, Lucknow, a prominent commercial and business district. The location provides connectivity to major roads, commercial hubs and transportation facilities."
  },
  {
    q: "What types of commercial properties are available at Omaxe Centre Point?",
    a: "The project offers retail shops, kiosks, food court spaces, office spaces and hotel suites. The supplied price list places retail and food-related units across the lower floors and hotel suites or office spaces from the 5th to 14th floors."
  },
  {
    q: "What is the price of commercial space at Omaxe Centre Point Lucknow?",
    a: "According to the supplied project price list, BSP ranges from ₹18,500 per sq. ft. for hotel suites or office spaces on the 5th–14th floors to ₹40,000 per sq. ft. for ground-floor shops. PLC, GST and other applicable charges may apply separately."
  },
  {
    q: "Why should investors consider Omaxe Centre Point in Gomti Nagar?",
    a: "Omaxe Centre Point combines a Vibhuti Khand location with retail, dining, office, hospitality and entertainment-oriented spaces. Buyers should assess unit suitability, demand, price, contractual terms and their own investment objectives rather than relying on projected returns."
  }
];

const contentSections = [
  {
    title: "Prime Commercial Location in Vibhuti Khand, Gomti Nagar",
    paragraphs: [
      "Location remains one of the strongest considerations when choosing commercial property in Lucknow. Vibhuti Khand has developed into a major business and commercial zone within Gomti Nagar, supported by offices, hotels, retail destinations, residential neighbourhoods, and major road connections.",
      "Omaxe Centre Point occupies a location that can serve both business users and consumers. The project website highlights connectivity with Amar Shaheed Path, Gomti Nagar Railway Station, the Ayodhya-Lucknow Highway, Lohia Path and other important parts of Lucknow.",
      "For retailers and food businesses, accessibility can influence customer visits and repeat footfall. For offices, convenient road connectivity can support employees, clients, vendors, and business partners."
    ]
  },
  {
    title: "Commercial Spaces at Omaxe Centre Point Lucknow",
    paragraphs: [
      "One of the project's notable characteristics is its varied inventory. Buyers are not restricted to a single category of commercial property.",
      "The lower ground floor contains commercial shop inventory along with circulation and parking-related planning. The ground floor provides retail shops, while the first floor offers shops and kiosks.",
      "The second floor is planned around food court and kiosk spaces, with seating, restaurants, pantry areas, a play-zone area, escalators, lifts and service corridors. The third floor combines food, restaurants, banquet and pre-function spaces, conference rooms, multiplex facilities and related circulation.",
      "The supplied price document identifies hotel suites and office spaces from the 5th to 14th floors. This mixed commercial format provides different unit categories for retailers, food operators, companies and investors."
    ]
  },
  {
    title: "Commercial Investment Potential in Gomti Nagar",
    paragraphs: [
      "Commercial real estate investment depends on several factors: location, access, surrounding development, tenant demand, customer movement, unit configuration, purchase price, holding period, and exit opportunities.",
      "Omaxe Centre Point combines several commercial formats within a prominent Lucknow business district. Retail shops can appeal to brands and local businesses, while food court spaces cater to food operators. Office inventory addresses corporate and professional requirements, and hotel suites add a hospitality component.",
      "Its mixed-use commercial character may be relevant for investors who want to compare different asset categories within the same project. Returns, occupancy and appreciation are not guaranteed."
    ]
  },
  {
    title: "Why Consider Omaxe Centre Point Lucknow?",
    paragraphs: [
      "The project can merit consideration for buyers searching for commercial property in Vibhuti Khand or Gomti Nagar because it brings together location, multiple unit categories, structured floor planning, and mixed commercial activities.",
      "Retailers can evaluate lower-floor shops and kiosks according to their visibility and space requirements. Food businesses can consider dedicated food court and restaurant-oriented areas. Professionals and companies can assess upper-floor office spaces, while commercial investors can compare different property types and price points.",
      "The presence of shopping, food, entertainment, hospitality, and office components can broaden the project's potential visitor and user base."
    ]
  },
  {
    title: "Who Can Consider Buying Here?",
    paragraphs: [
      "Omaxe Centre Point may suit retail business owners seeking commercial shops in Gomti Nagar; food and beverage brands considering food court or restaurant space; entrepreneurs looking for kiosk-format commercial units; companies seeking office space in Vibhuti Khand; investors comparing commercial properties in Lucknow; and buyers interested in hotel suite inventory.",
      "Each buyer should assess the property according to business objectives rather than relying solely on projected returns or headline pricing."
    ]
  },
  {
    title: "Check Floor Plans Before Selecting a Unit",
    paragraphs: [
      "Floor plans play an important role in commercial property selection. Factors such as frontage, corridor width, lift and escalator access, nearby anchor spaces, seating areas, service corridors, entry points, and neighbouring commercial uses can influence the suitability of a unit.",
      "The supplied plans demonstrate distinct commercial environments on different floors. The second floor emphasizes food, seating, restaurants, play areas and atrium-led circulation, while the third floor incorporates dining alongside banquet, conference and cinema-related facilities.",
      "A buyer should compare individual unit locations rather than selecting solely on the basis of floor-level pricing."
    ]
  }
];

export default function OmaxePropertyPage({ property }: { property: PropertyData }) {
  const [activePlan, setActivePlan] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);

  const changePlan = (direction: number) =>
    setActivePlan((current) => (current + direction + floorPlans.length) % floorPlans.length);

  return (
    <main className="omaxe-page" aria-label={property.title}>
      <section className="ox-hero">
        <Image src={`${BASE}hero.jpg`} alt="Omaxe Centre Point commercial tower, Lucknow" fill priority sizes="100vw" />
        <div className="ox-hero-overlay" />
        <h1>Omaxe</h1>
      </section>

      <section className="ox-intro ox-container">
        <p className="ox-eyebrow">COMMERCIAL DESTINATION · VIBHUTI KHAND</p>
        <h2>Omaxe Centre Point, Vibhuti Khand, Gomti Nagar, Lucknow</h2>
        <p>Omaxe Centre Point is a large-format commercial development in Vibhuti Khand, Gomti Nagar, Lucknow, planned to bring retail, dining, entertainment, hospitality, and business spaces together within one destination. Its location in one of Lucknow's prominent commercial districts makes the project relevant for business owners, retailers, food operators, professionals, and commercial property investors seeking space in Gomti Nagar.</p>
        <p>The project combines retail shops, kiosks, food court spaces, restaurants, hotel suites, and office spaces, giving buyers different options based on their business model and investment requirements. The supplied project price list categorizes commercial inventory across multiple floors, from the lower ground floor through the upper levels.</p>
        <h3>Omaxe Centre Point Lucknow – Project Overview</h3>
        <p>Omaxe Centre Point has been planned as more than a conventional shopping complex. Its mixed commercial configuration creates space for shopping, food and beverage businesses, entertainment, hospitality, offices, and other commercial activities.</p>
        <p>The project layout indicates different commercial uses across its floors. The lower levels primarily accommodate retail, the second and third floors include food-oriented commercial spaces, and the upper floors are designated for hotel suites and office spaces.</p>
      </section>

      <section className="ox-highlights">
        <div className="ox-container">
          <p className="ox-eyebrow">AT A GLANCE</p>
          <h2>Omaxe Project Highlights</h2>
          <div className="ox-highlight-grid">
            {[
              "Commercial project at Vibhuti Khand, Gomti Nagar, Lucknow",
              "Retail shops and kiosks",
              "Food court spaces and restaurants",
              "Entertainment-oriented spaces",
              "Hotel suites and office spaces",
              "Multiple floor-based commercial configurations",
              "Parking and internal circulation areas",
              "High-speed elevators",
              "Business and leisure-oriented facilities"
            ].map(item => <div key={item}><span>＋</span>{item}</div>)}
          </div>
          <div className="ox-return-note">
            <strong>Project information references assured returns of 12% p.a. on a 100% payment plan and 10% p.a. on a 50:50 payment plan.</strong>
            <p>These representations are subject to the project's written terms and conditions. Verify eligibility, timelines and contractual provisions before relying on them.</p>
          </div>
        </div>
      </section>

      {contentSections.map((section, index) => (
        <section className={`ox-content-section ${index % 2 === 0 ? "ox-soft" : ""}`} key={section.title}>
          <div className="ox-container">
            <p className="ox-eyebrow">OMAXE CENTRE POINT / {String(index + 1).padStart(2, "0")}</p>
            <h2>{section.title}</h2>
            {section.paragraphs.map(p => <p key={p}>{p}</p>)}
            {index === 1 && (
              <div className="ox-floor-types">
                {[
                  ["Lower Ground", "Retail shops and parking-related circulation"],
                  ["Ground Floor", "Retail shops"],
                  ["First Floor", "Shops and kiosks"],
                  ["Second Floor", "Food court, kiosks and dining"],
                  ["Third Floor", "Food, banquet, conference and multiplex"],
                  ["5th–14th Floors", "Hotel suites and office spaces"]
                ].map(([name, desc]) => <article key={name}><strong>{name}</strong><span>{desc}</span></article>)}
              </div>
            )}
            {index === 4 && (
              <ul className="ox-audience-list">
                {[
                  "Retail business owners seeking commercial shops in Gomti Nagar",
                  "Food and beverage brands considering food court or restaurant space",
                  "Entrepreneurs looking for kiosk-format commercial units",
                  "Companies seeking office space in Vibhuti Khand",
                  "Investors comparing commercial properties in Lucknow",
                  "Buyers interested in hotel suite inventory"
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="ox-price ox-container">
        <p className="ox-eyebrow">PRICE & CONFIGURATION</p>
        <h2>Omaxe Centre Point Lucknow Price</h2>
        <p>Based on the supplied project price list, the stated basic sale price (BSP) structure is:</p>
        <div className="ox-table-wrap">
          <table>
            <thead><tr><th>Floor</th><th>Unit Type</th><th>BSP</th></tr></thead>
            <tbody>{priceRows.map(row => <tr key={row[0]}>{row.map(cell => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p className="ox-small-note">These rates come from the supplied project price sheet. Buyers should verify the latest inventory and pricing because rates, availability, taxes and applicable charges can change.</p>
        <h3>Preferential Location Charges</h3>
        <p>The supplied price sheet specifies preferential location charges (PLC) for certain corner units, main-road-facing or adjoining units, combined corner and main-road units, and pool-view units on applicable floors. For example, the document specifies ground-floor PLC of 5% for corner units, 5% for main-road units and 7.5% for units combining main-road and corner positioning. First-floor PLC varies according to location, while pool-view units from the fifth to fourteenth floors carry a stated 5% PLC.</p>
        <h3>Additional Charges to Consider</h3>
        <p>The supplied price document identifies additional heads including Interest Free Maintenance Security at ₹100 per sq. ft., power backup installation charges, EEC & FFC at ₹400 per sq. ft., applicable electric meter connection charges, lease rent where applicable, other applicable charges, and GST. A finishing cost is separately specified for hotel suites.</p>
        <p>Request a unit-specific cost sheet so BSP, PLC, taxes, statutory expenses and other applicable charges can be evaluated together.</p>
        <h3>Flexible Payment Plan Options</h3>
        <p>The supplied documentation provides multiple payment structures, including down-payment and construction-linked options. For retail shops and food courts, one 50% + CLP structure requires 50% of BSP plus GST within 60 days of booking, followed by construction-linked instalments and the remaining amount at possession. Separate payment structures are specified for hotel suites and office spaces.</p>
        <p>Buyers should compare payment structures based on their financial position, unit category, construction schedule, tax implications and contractual terms.</p>
      </section>

      <section className="ox-content-section ox-soft">
        <div className="ox-container">
          <p className="ox-eyebrow">RETURNS & LEASING</p>
          <h2>Omaxe Centre Point Assured Return and Rental Information</h2>
          <p>As per the supplied project information, the assured return is 12% per annum on the 100% payment plan and 10% per annum on the 50:50 payment plan. The applicable return depends on the payment plan selected by the buyer and remains subject to the project's written terms and conditions.</p>
          <p>Buyers should verify the latest cost sheet, payment schedule, eligibility conditions, timelines and contractual provisions before relying on any assured-return representation.</p>
          <p>The supplied project documentation also provides post-possession rental guarantee information, including a three-month fit-out free-rental period, three-year lease rights with the company, and floor-specific minimum lease guarantee figures. Obtain the current signed rental or lease terms and confirm the applicable unit category before making a decision.</p>
        </div>
      </section>

      <section className="ox-floorplans">
        <div className="ox-container">
          <p className="ox-eyebrow">EXPLORE THE LAYOUT</p>
          <h2>Omaxe Centre Point Floor Plan</h2>
          <div className="ox-plan-viewer">
            <button type="button" onClick={() => changePlan(-1)} aria-label="Previous floor plan">‹</button>
            <div className="ox-plan-image">
              <Image src={`${BASE}${floorPlans[activePlan].src}`} alt={floorPlans[activePlan].title} width={1200} height={850} sizes="(max-width: 850px) 100vw, 75vw" />
              <span>{floorPlans[activePlan].title}</span>
            </div>
            <button type="button" onClick={() => changePlan(1)} aria-label="Next floor plan">›</button>
          </div>
          <div className="ox-plan-tabs">
            {floorPlans.map((plan, index) => <button type="button" className={activePlan === index ? "active" : ""} key={plan.src} onClick={() => setActivePlan(index)}>{plan.title}</button>)}
          </div>
        </div>
      </section>

      <section className="ox-faq ox-soft">
        <div className="ox-container">
          <p className="ox-eyebrow">YOUR QUESTIONS ANSWERED</p>
          <h2>Frequently Asked Questions</h2>
          {faqItems.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
        </div>
      </section>

      <section className="ox-video-section">
        <div className="ox-container">
          <p className="ox-eyebrow">SEE THE PROJECT</p>
          <h2>Omaxe – Project Videos</h2>
          <div className="ox-video-tabs">
            {videos.map((_, index) => <button type="button" className={activeVideo === index ? "active" : ""} key={index} onClick={() => setActiveVideo(index)}>Video {index + 1}</button>)}
          </div>
          <video key={videos[activeVideo]} controls playsInline preload="metadata">
            <source src={`${BASE}${videos[activeVideo]}`} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="ox-contact">
        <div className="ox-container">
          <p className="ox-eyebrow">COMMERCIAL PROPERTY · LUCKNOW</p>
          <h2>Book Commercial Property at Omaxe Centre Point Lucknow</h2>
          <p>If you are searching for a commercial property in Vibhuti Khand, Gomti Nagar, Omaxe Centre Point provides choices across retail shops, kiosks, food court spaces, offices, and hotel suites.</p>
          <p>Before booking, compare available units by floor, size, frontage, positioning, BSP, PLC, additional charges, payment schedule, and intended commercial use. Redefine Realtors can assist with current unit availability, floor-plan comparison, pricing information, cost sheets and site-visit coordination.</p>
          <a href="tel:+919335167888">Call +91 9335167888 <span>↗</span></a>
          <small>Disclaimer: Prices, payment plans, assured-return provisions, rental terms, inventory and other commercial details are based on the supplied project documents and may change. Buyers should verify current pricing, approvals, availability, contractual conditions, taxes and applicable charges before making a financial commitment. Returns are not guaranteed unless confirmed by enforceable written contractual terms.</small>
        </div>
      </section>
    </main>
  );
}
