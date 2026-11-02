"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const ASSET = "https://redefinerealtors.com/wp-content/uploads";

const amenityImages = [
  `${ASSET}/2026/08/baby.png`,
  `${ASSET}/2026/08/shoes.png`,
  `${ASSET}/2026/08/cock.png`,
  `${ASSET}/2026/08/child.png`,
  `${ASSET}/2026/08/running.png`,
  `${ASSET}/2026/08/clubhouse.png`,
  `${ASSET}/2026/08/gym.png`,
  `${ASSET}/2026/08/park-girl.png`,
  `${ASSET}/2026/08/chacha-chachi.png`,
  `${ASSET}/2026/08/topi-girl.png`,
  `${ASSET}/2026/08/baggecha.png`,
  `${ASSET}/2026/08/jhoola.png`,
];

const floorPlanImages = [
  `${ASSET}/2026/09/royal-atlantis-phase-1-royal-atlantis-phase-1-cluster-plan-for-1st-floor-164088765.jpeg`,
  `${ASSET}/2026/09/images-1.jpg`,
  `${ASSET}/2026/09/images-2.jpg`,
  `${ASSET}/2026/09/images-3.jpg`,
];

const sections = [
  {
    title: "Project Overview",
    tone: "light",
    paragraphs: [
      "Purvanchal Royal Atlantis Phase 1 combines large-format residences with an extensive collection of lifestyle amenities. According to the project material, the typical 5 BHK residence offers approximately 2,995 sq. ft. of carpet area, around 663 sq. ft. of balcony area and a super area of approximately 4,825 sq. ft.",
      "This configuration supports spacious family living without restricting important areas such as bedrooms, balconies, formal entertaining spaces and multipurpose zones. The apartments may suit large families, business owners, senior professionals and homebuyers who value privacy alongside access to shared facilities.",
    ],
    bullets: [
      "Premium 5 BHK residences",
      "Approximately 2,995 sq. ft. carpet area",
      "Approximately 663 sq. ft. balcony area",
      "Approximately 4,825 sq. ft. super area",
      "Three-level basement parking",
      "Club and community facilities",
      "Landscaped central park",
      "Swimming and wellness amenities",
      "Indoor and outdoor sports spaces",
      "Controlled access and electronic surveillance",
      "Provision for electric vehicle charging",
      "Fibre-to-the-home infrastructure",
    ],
    note: "All dimensions, specifications, charges and availability should be confirmed from the sanctioned plans, agreement for sale and current developer documents.",
  },
  {
    title: "Strategic Location in CG City, Lucknow",
    paragraphs: [
      "Location plays a major role in the appeal of Purvanchal Royal Atlantis Phase 1. The development is situated in Chak Gajaria within the CG City area of Gomti Nagar Extension. This part of Lucknow has access to commercial destinations, healthcare institutions, schools, sports facilities, shopping centres and major roads.",
      "Shaheed Path is approximately 250 metres from the project, as stated in the brochure. The road provides an important connection between several residential and commercial areas of Lucknow. Phoenix Palassio Mall is shown at an approximate distance of 200 metres, while Ekana International Cricket Stadium is listed at roughly 300 metres",
      "The brochure also mentions the following approximate distances:",
    ],
    bullets: [
      "Chaudhary Charan Singh International Airport: 15 km",
      "Gomti Nagar Railway Station: 6 km",
      "Lucknow Charbag Railway Station: 11 km",
      "Sultanpur-Varanasi Highway: 2 km",
      "Kisan Path: 4 km",
      "Ayodhya-Gorakhpur Highway: 6 km",
      "Hazratganj: 11 km",
      "Lulu Mall: 3 km",
      "RML Institute of Medical Sciences: 400 metres",
      "Tender Palm Super Speciality Hospital: 500 metres",
      "Medanta Hospital: 4 km",
      "CG City Wetland and Bird Sanctuary: 600 metres",
      "Harmony Park and Musical Garden: 500 metres",
    ],
    note: "These distances are approximate and can vary according to the selected route, traffic conditions and future road arrangements. Buyers should visit the location and assess the daily commute to their regular destinations.",
  },
  {
    title: "Spacious 5 BHK Residences",
    tone: "light",
    paragraphs: [
      "The project’s 5 BHK layout is designed for households that require more than a conventional apartment configuration. A carpet area of approximately 2,995 sq. ft. allows room for private bedrooms, family areas, formal gatherings and flexible household requirements.",
      "The typical unit plan also identifies multipurpose zones. Depending on the buyer’s needs and permitted interior work, these spaces may function as a home office, study, hobby area, entertainment room or additional family lounge.",
      "Balconies covering approximately 663 sq. ft. add another valuable dimension. They can provide outdoor seating areas and wider visual openness, subject to the position and orientation of the selected residence. Buyers should compare available floors, views, sunlight, road-facing positions, pool-facing options and privacy conditions before selecting a unit.",
      "The project specifications mention an approximate floor-to-floor height of 11 feet. This can contribute to a greater sense of volume inside the residence. The main apartment entrance door is proposed at nine feet in height, while other internal doors are indicated at seven feet.",
    ],
  },
  {
    title: "Interior Specifications and Finishes",
    paragraphs: [
      "The proposed specifications reflect the project’s premium positioning. The brochure lists RCC framed construction designed with reference to applicable BIS provisions for the relevant safe zone. Flooring selections vary across different areas of the residence and common spaces.",
      "The master bedroom is proposed with laminated wooden flooring. Other bedrooms are planned with premium-quality tiles, while the living, dining and internal lobby areas may use marble, imported marble, granite or premium tiles. Anti-skid tiles are proposed for toilets, balconies and selected utility areas.",
      "Kitchen provisions include a granite, processed-stone or marble counter, a stainless-steel sink and wall tiles extending approximately two feet above the counter. Buyers should note that the supplied kitchen may not include every appliance, cabinet or modular component expected in a fully finished kitchen.",
      "The toilet specifications mention branded or equivalent CP fittings and sanitaryware, glass shower partitions, rain showers and provisions for geyser installation. The master bathroom specification also includes a thermostatic rain shower and bathtub.",
      "The main entrance door is proposed with a biometric lock. External doors and windows may use UPVC or premium aluminium frames with glass. Mosquito mesh, taps in balconies and selected utility features are also listed in the project material.",
      "Specifications remain subject to the final agreement and permitted substitutions. Equivalent materials may be used by the promoter where allowed under contractual and regulatory provisions.",
    ],
  },
  {
    title: "Recreation, Wellness and Community Amenities",
    tone: "light",
    paragraphs: [
      "Purvanchal Royal Atlantis Phase 1 is planned with several spaces for exercise, relaxation, recreation and social interaction. The site plan divides the amenities across a swimming-pool zone, club facilities, landscaped areas and sports spaces.",
      "The swimming facilities include a family or lap pool, children’s pool, pool deck, changing rooms and restrooms. The wellness area proposes separate male and female spa facilities with steam, sauna, massage and Jacuzzi rooms.",
      "Indoor recreation provisions include:",
    ],
    bullets: [
      "Gymnasium",
      "Squash court",
      "Table tennis area",
      "Snooker area",
      "Card room",
      "Games room",
      "Library and reading room",
      "Yoga and meditation rooms",
      "Conference room",
      "Party hall",
      "Dining and kitchen area",
      "Kids’ day-care crèche",
    ],
    afterBullets: [
      "The games room is planned to accommodate activities such as table football, air hockey, chess and carrom. Such spaces give residents alternatives for recreation without requiring frequent travel outside the complex.",
      "Outdoor amenities include an open badminton court, multipurpose sports court and walking track. The landscaped central area proposes a children’s play zone, gazebo, water body with fountain, stepped seating and yoga or meditation lawn.",
      "These shared spaces may help residents maintain active routines and participate in community life. Their practical value, however, will depend on operating rules, maintenance standards, timings, usage charges and eventual management by the residents’ association.",
    ],
  },
  {
    title: "Safety, Access and Essential Infrastructure",
    paragraphs: [
      "The project proposes multiple systems for security, fire safety, connectivity and utility management. Electronic surveillance through CCTV is planned for the ground-floor reception, lift lobby, elevators, basement and other common areas. Security personnel are proposed at the main entrance and ground-floor reception.",
      "Access-control systems are planned for basement lobbies and elevators. Apartments are also expected to receive intercom connectivity with video door-phone facilities.",
      "Fire-safety provisions listed in the project material include:",
    ],
    bullets: [
      "Main staircase and fire-escape staircase",
      "Wet-riser or down-comer systems",
      "Fire-hose cabinets",
      "Automatic sprinklers",
      "Intelligent fire-detection and alarm systems",
      "Emergency voice-evacuation system",
      "Basement smoke-extraction system",
    ],
    afterBullets: [
      "The project proposes four high-speed passenger elevators and two high-speed service or stretcher elevators. Buyers should confirm the final lift configuration for their selected tower.",
      "The electrical plan includes modular switches, copper wiring and power backup for common services. Each apartment is proposed to receive 10 kVA power backup. Fans, geysers, lights and household appliances are not necessarily included.",
      "Fibre-to-the-home connectivity is planned across the complex. The brochure also refers to a sewage-treatment and recycling plant, central water-softening infrastructure and an individual reverse-osmosis unit in each apartment.",
    ],
  },
  {
    title: "Parking and Electric Vehicle Readiness",
    tone: "light",
    paragraphs: [
      "Parking is an important consideration for large residences. The project provides parking across three basement levels. The supplied price calculation illustrates three paid parking spaces for the represented unit, but the number allotted and applicable cost may differ according to the inventory or transaction terms.",
      "Provision for EV charging is another notable feature. As electric vehicles become more common, access to planned charging infrastructure can make residential parking more functional. Buyers should ask how individual usage will be measured, which charging capacities will be supported and whether installation or consumption charges will apply separately.",
    ],
  },
  {
    title: "UP RERA Registration",
    paragraphs: [
      "The supplied project material lists the UP RERA registration number as UPRERAPRJ573204/04/2026. Buyers should independently search this number on the official UP RERA portal and examine the registered project information.",
      "Important records to review include:",
    ],
    bullets: [
      "Promoter and project details",
      "Registered plans and layouts",
      "Declared completion schedule",
      "Land and approval information",
      "Construction updates",
      "Encumbrance information",
      "Proforma agreement for sale",
      "Complaint or order history, if any",
    ],
    note: "RERA registration helps buyers access disclosed project information, but it does not replace legal, financial or technical due diligence.",
  },
  {
    title: "Who May Consider This Development?",
    tone: "light",
    paragraphs: [
      "Purvanchal Royal Atlantis Phase 1 may appeal to families looking for an expansive primary residence in Lucknow. Its 5 BHK configuration also suits buyers who need independent rooms for children, parents, guests, household support or professional use.",
      "Professionals and entrepreneurs may value proximity to Shaheed Path, Gomti Nagar Extension and other business areas. Buyers moving from an independent house may find the large apartment format attractive because it combines generous internal space with managed common facilities.",
      "Investors should base their decision on realistic factors such as acquisition cost, holding period, rental demand, maintenance expenses, competing supply and resale liquidity. Luxury property investment should never depend only on promotional projections.",
    ],
  },
  {
    title: "Why Consult Redefine Realtors?",
    paragraphs: [
      "A premium property purchase involves more than choosing an apartment from a floor plan. Redefine Realtors supports buyers with project information, site-visit coordination, unit comparison, current price enquiries and clarification of available payment options.",
      "Prospective buyers can request help comparing floors, orientations, views, parking allocations and applicable charges. They should still appoint independent legal and financial professionals where necessary and verify every commitment in writing.",
    ],
  },
];

const faqs = [
  {
    question: "Where is Purvanchal Royal Atlantis Phase 1 located?",
    answer:
      "Purvanchal Royal Atlantis Phase 1 is located in Chak Gajaria, CG City, Gomti Nagar Extension, Lucknow. The project is near Shaheed Path, Phoenix Palassio Mall and Ekana International Cricket Stadium, with access to hospitals, educational institutions, parks, highways and railway stations.",
  },
  {
    question:
      "What apartment configuration is available in Purvanchal Royal Atlantis Phase 1?",
    answer: "",
  },
  {
    question: "What amenities does Purvanchal Royal Atlantis Phase 1 offer?",
    answer: "",
  },
  {
    question:
      "What is the price of a residence in Purvanchal Royal Atlantis Phase 1?",
    answer: "",
  },
];

const masterPlanLegend = [
  "A. PROJECT ENTRY / EXIT",
  "01. ARRIVAL PLAZA / DROP-OFF",
  "02. RESIDENTIAL TOWERS DROP-OFF",
  "03. VEHICULAR MOVEMENT / SERVICING LOOP",
  "04. POOL DECK",
  "05. 25M LAP POOL",
  "06. KIDS POOL",
  "07. ADVENTURE PLAY VILLAGE",
  "08. TODDLERS PLAY AREA",
  "09. CHILDREN'S FITNESS AREA",
  "10. MULTI-PURPOSE LAWN",
  "11. SPORTS SOCIETY",
  "12. CRICKET PITCH",
  "13. SEATING ALONG THE EDGE",
  "14. TENNIS COURTS (4 NOS.)",
  "15. FUTSAL COURT (4)",
  "16. WOODEN BASKETBALL",
  "17. BADMINTON COURTS (6)",
  "18. OUTDOOR GYM",
  "19. CHESS GARDEN",
  "20. SPECIALTY GAMES AREA",
  "21. PICNIC PLAZA",
  "22. FEATURE WALL",
  "23. LANDSCAPED TERRACE",
  "24. HIGH STREET RETAIL PROMENADE",
  "25. FUTURE DEVELOPMENT",
  "26. FUTURE DEVELOPMENT - OFFICES",
];

export default function PurvanchalPropertyPage() {
  const [floorIndex, setFloorIndex] = useState(0);

  return (
    <main className="purvanchal-page">
      <section className="purvanchal-banner">
        <img
          src={`${ASSET}/2026/09/the-resort-elevation-147331498.jpeg`}
          alt="Purvanchal Royal Atlantis Phase 1 elevation"
          fetchPriority="high"
        />
        <div className="purvanchal-banner__title">
          <h1>Purvanchal Royal Atlantis Phase 1 Lucknow</h1>
        </div>
      </section>

      <section className="purvanchal-editorial">
        <div className="purvanchal-editorial__image">
          <img
            src={`${ASSET}/2026/08/img.png`}
            alt="Purvanchal Royal Atlantis lifestyle visual"
          />
        </div>
        <div className="purvanchal-editorial__copy">
          <img
            className="purvanchal-editorial__logo"
            src={`${ASSET}/2025/09/redefine-logo.svg`}
            alt="Redefine Realtors"
          />
          <h2>
            CHERISH
            <br />
            EVERY MOMENT.
            <br />
            LIVE EVERY DETAIL.
          </h2>
          <p>
            Step into Purvanchal Royal Atlantis Phase 1, where moments
            <br className="desktop-break" /> become memories and every detail
            tells
            <br className="desktop-break" /> a story of refined living
          </p>
        </div>
      </section>

      <section className="purvanchal-intro">
        <div className="purvanchal-container">
          <h2>Purvanchal Royal Atlantis Phase 1</h2>
          <p>
            Purvanchal Royal Atlantis Phase 1 is a premium residential
            development in Chak Gajaria, CG City, Gomti Nagar Extension, Lucknow.
            Designed for buyers seeking generous living spaces, refined
            specifications and access to important urban destinations, the
            project presents an exclusive collection of 5 BHK residences.
          </p>
          <p>
            Its location near Shaheed Path, Phoenix Palassio Mall and Ekana
            International Cricket Stadium places residents within a
            well-developed part of the city. Large apartments, landscaped
            areas, recreational facilities, advanced security provisions and
            future-ready infrastructure shape the project’s residential
            character.
          </p>
          <p>
            Redefine Realtors helps prospective buyers examine the available
            residences, project documents, payment structure and purchasing
            considerations before making a property decision.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.title}
          className={`purvanchal-content-section ${
            section.tone === "light" ? "is-light" : ""
          }`}
        >
          <div className="purvanchal-container">
            <h2 className="purvanchal-section-title">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.title}-p-${index}`}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="purvanchal-list">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.afterBullets?.map((paragraph, index) => (
              <p key={`${section.title}-after-${index}`}>{paragraph}</p>
            ))}
            {section.note && (
              <p className="purvanchal-note">{section.note}</p>
            )}
          </div>
        </section>
      ))}

      <section className="purvanchal-faq is-light">
        <div className="purvanchal-container">
          <h2 className="purvanchal-section-title">
            Frequently Asked Questions
          </h2>
          <div className="purvanchal-faq__list">
            {faqs.map((faq, index) => (
              <details className="purvanchal-faq__item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="purvanchal-faq__plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                {faq.answer && <p>{faq.answer}</p>}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="purvanchal-amenities-art">
        <div className="purvanchal-amenities-art__heading">
          <div className="purvanchal-amenities-art__logo">
            <img src={`${ASSET}/2025/09/redefine-logo.svg`} alt="Redefine" />
          </div>
          <div>
            <h2>
              PLAY
              <br />
              WITHOUT
              <br />
              LIMITS:
              <br />
              AMENITIES FOR
              <br />
              EVERY AGE
            </h2>
            <p>
              Enjoy endless fun with amenities designed for all ages. Play
              without limits at our facility, where there&apos;s something for
              everyone to enjoy.
            </p>
          </div>
        </div>
        <div className="purvanchal-amenity-grid">
          {amenityImages.map((src, index) => (
            <div className="purvanchal-amenity-tile" key={src}>
              <img src={src} alt={`Lifestyle and amenity visual ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="purvanchal-master-plan">
        <div className="purvanchal-container">
          <h2 className="purvanchal-section-title">Site Master Plan</h2>
          <div className="purvanchal-master-plan__layout">
            <div className="purvanchal-master-plan__image">
              <img
                src={`${ASSET}/2026/09/images-3-1.jpg`}
                alt="Purvanchal Royal Atlantis site master plan"
              />
            </div>
            <div className="purvanchal-master-plan__legend">
              <h3>LEGENDS</h3>
              <ol>
                {masterPlanLegend.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="purvanchal-floor-intro">
        <div className="purvanchal-floor-intro__image">
          <img
            src={`${ASSET}/2026/08/Frame.jpg`}
            alt="Purvanchal Royal Atlantis floor plan visual"
          />
        </div>
        <div className="purvanchal-floor-intro__copy">
          <img src={`${ASSET}/2025/09/redefine-logo.svg`} alt="Redefine" />
          <h2>
            E.
            <br />
            ELEVATED
            <br />
            FLOOR
            <br />
            PLANS
          </h2>
          <p>
            Every home at &quot;Purvanchal Royal Atlantis Phase 1 Lucknow
            &quot;is thoughtfully designed with your family in mind, ensuring
            it&apos;s the perfect place for you all to thrive.
          </p>
        </div>
      </section>

      <section className="purvanchal-floor-carousel">
        <div className="purvanchal-container">
          <h2 className="purvanchal-section-title">TYPICAL FLOOR PLAN</h2>
          <div className="purvanchal-floor-carousel__stage">
            <button
              type="button"
              className="purvanchal-carousel-control"
              onClick={() =>
                setFloorIndex(
                  (floorIndex - 1 + floorPlanImages.length) %
                    floorPlanImages.length,
                )
              }
              aria-label="Previous floor plan"
            >
              ‹
            </button>
            <img
              src={floorPlanImages[floorIndex]}
              alt={`Purvanchal Royal Atlantis floor plan ${floorIndex + 1}`}
            />
            <button
              type="button"
              className="purvanchal-carousel-control"
              onClick={() =>
                setFloorIndex((floorIndex + 1) % floorPlanImages.length)
              }
              aria-label="Next floor plan"
            >
              ›
            </button>
          </div>
          <div className="purvanchal-floor-carousel__dots">
            {floorPlanImages.map((src, index) => (
              <button
                type="button"
                key={src}
                className={index === floorIndex ? "active" : ""}
                onClick={() => setFloorIndex(index)}
                aria-label={`Show floor plan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="purvanchal-videos">
        <div className="purvanchal-container">
          <h2 className="purvanchal-section-title">
            Purvanchal Royal Atlantis Phase 1 Lucknow – Project Videos
          </h2>
          <div className="purvanchal-video-grid">
            <video
              controls
              preload="metadata"
              playsInline
              src={`${ASSET}/2026/09/whatsapp-video-2026-09-05-at-160027_lUDrfGzt.mp4`}
            />
          </div>
        </div>
      </section>

      <section className="purvanchal-visit">
        <div className="purvanchal-container">
          <span>REDEFINE REALTORS</span>
          <h2>Book a Property Visit</h2>
          <p>
            Connect with Redefine Realtors for project information and
            property-visit assistance.
          </p>
          <div className="purvanchal-visit__actions">
            <a href="/contact/">Contact Us</a>
            <a href="tel:+919335167888">+91 93351 67888</a>
          </div>
        </div>
      </section>
    </main>
  );
}
