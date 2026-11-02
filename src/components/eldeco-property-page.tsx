"use client";

import Image from "next/image";
import { useState } from "react";
import type { PropertyData } from "@/data/property-data";

const A = "/images/properties/eldeco/";

const articleSections = [
  {
    title: "A Grand Residential Launch in Sector 22D, Yamuna Expressway",
    paragraphs: [
      "Sector 22D has emerged as an important residential zone along the Yamuna Expressway. Eldeco Echoes of Eden adds a premium housing option to this location with a residential concept focused on openness, greenery, modern amenities, and comfortable family living.",
      "The project is planned around a lifestyle in which residents can enjoy spacious homes while staying connected with the larger development taking place across the Yamuna Expressway region.",
      "One of its prominent residential highlights is the availability of 3-side open corner residences overlooking approximately 3 acres of central greens. Open views and landscaped surroundings can make a meaningful difference to everyday living.",
      "Instead of concentrating only on apartment interiors, the project gives equal importance to the overall residential environment. Landscaped spaces, recreational facilities, podium planning, sports infrastructure, a clubhouse, and swimming facilities contribute to a community-oriented setting."
    ]
  },
  {
    title: "Why Yamuna Expressway Is Attracting Property Buyers",
    paragraphs: [
      "Location remains one of the most important considerations in any real estate decision. The Yamuna Expressway corridor has gained significant attention because of its road infrastructure and the large-scale developments planned around Noida International Airport.",
      "The project sales presentation positions the 165-km Yamuna Expressway as an important NCR-to-Agra connectivity corridor and identifies Noida International Airport as a major growth catalyst for the region.",
      "For a residential buyer, infrastructure growth can mean easier regional access and the gradual development of supporting commercial and social infrastructure. Property appreciation, however, cannot be guaranteed."
    ]
  },
  {
    title: "Strategic Location Near Noida International Airport, Jewar",
    paragraphs: [
      "One of the strongest location considerations for Eldeco Echoes of Eden is its position in the Yamuna Expressway belt near Noida International Airport, commonly associated with Jewar.",
      "Large transportation infrastructure can influence surrounding real estate by encouraging commercial development, hospitality, logistics, employment, retail, and supporting residential demand. The extent and timing of that impact depend on actual infrastructure execution and broader market conditions."
    ]
  },
  {
    title: "Eldeco: An Established Name Behind the Development",
    paragraphs: [
      "According to the supplied project presentation, Eldeco highlights more than 40 years of operations, 200-plus projects, a presence across more than 20 cities, and over 30,000 families associated with its developments.",
      "Buyers should independently review the specific project's approvals, RERA registration details, agreement terms, construction schedule, specifications, and payment obligations before booking."
    ]
  },
  {
    title: "Spacious 3 BHK Residences Designed for Modern Families",
    paragraphs: [
      "Eldeco Echoes of Eden offers two principal 3 BHK configurations: 3 BHK + 2 Toilets – 1,550 sq. ft. and 3 BHK + 3 Toilets – 1,850 sq. ft.",
      "The 1,550 sq. ft. configuration can suit families who want a well-sized three-bedroom residence while maintaining an efficient overall footprint. The 1,850 sq. ft. configuration provides additional room and comes with three toilets."
    ]
  },
  {
    title: "3-Side Open Corner Residences",
    paragraphs: [
      "A key attraction of the development is its focus on 3-side open corner residences. Such planning can help create a stronger sense of openness compared with apartments surrounded closely by adjoining units.",
      "Buyers interested specifically in green-facing or corner apartments should verify the exact unit orientation and applicable preferential location charges before finalising a property."
    ]
  },
  {
    title: "Expansive Central Greens for a More Open Lifestyle",
    paragraphs: [
      "At Echoes of Eden, the approximately 3-acre central green concept supports the project's emphasis on spacious residential living. Landscaped community areas can provide recreational opportunities and a shared environment for leisure and informal interaction."
    ]
  },
  {
    title: "Modern Podium-Based Residential Planning",
    paragraphs: [
      "Echoes of Eden incorporates a modern podium-based design. Podium developments can help organise vehicular and pedestrian movement while allowing recreational areas to become part of a structured community environment. Buyers should verify the sanctioned project plan."
    ]
  },
  {
    title: "Five High-Speed Lifts Per Tower",
    paragraphs: [
      "Eldeco Echoes of Eden is promoted with five high-speed lifts per tower. Buyers should confirm the final tower-specific lift configuration and technical specifications as part of their project evaluation."
    ]
  },
  {
    title: "Lifestyle Amenities Designed Around Residents",
    paragraphs: [
      "A major highlight is the half-Olympic-size swimming pool. The development also includes a clubhouse and sports facilities, creating spaces where residents can spend leisure time within the community."
    ]
  },
  {
    title: "A Home Designed Around Space, Serenity and Connectivity",
    paragraphs: [
      "The appeal of Echoes of Eden comes from the way several residential priorities meet in one development: 3-side open residences, central greens, high-speed lifts, podium planning, recreational facilities and the wider connectivity associated with Yamuna Expressway."
    ]
  },
  {
    title: "Tower Caelum – Pre-Launch Opportunity",
    paragraphs: [
      "An approximate pre-launch basic sale price of ₹9,300 per sq. ft. BSP has been communicated for Tower Caelum, subject to availability, applicable terms, inventory, and confirmation at booking.",
      "The supplied price list effective 15 June 2026 shows ₹10,999 per sq. ft. BSP for specified Tower Haven and Elysion inventory. These are separate tower-specific references and should not be combined. Obtain written confirmation of the applicable tower, offer, validity and charges."
    ]
  },
  {
    title: "Booking Starts With 10% Payment",
    paragraphs: [
      "The supplied project information states 10% at booking, followed by another 10% within 45 days and 10% within 90 days under its construction-linked schedule. Tower Caelum promotional details also refer to a 30:40:30 plan. Confirm which plan applies to the selected unit."
    ]
  },
  {
    title: "Additional Charges Buyers Should Consider",
    paragraphs: [
      "The supplied price list mentions independent car parking of ₹5 lakh, club development charges of ₹2.50 lakh, IFMS deposit of ₹25 per sq. ft., lease rent of ₹250 per sq. ft., and power backup charges of ₹35,000 per KVA. Preferential location and floor charges can also apply.",
      "GST, stamp duty, registration fees, legal charges and other applicable government charges are payable separately. Request a complete unit-specific cost sheet."
    ]
  },
  {
    title: "Why Consider Eldeco Echoes of Eden for Investment?",
    paragraphs: [
      "The investment proposition is closely connected with its location in the Yamuna Expressway corridor and its association with airport infrastructure, planned development, institutional activity, commercial projects and expanding residential interest.",
      "Infrastructure proximity can support demand, but appreciation is not guaranteed. It depends on project execution, supply, end-user demand, economic conditions, connectivity, occupancy and future development."
    ]
  },
  {
    title: "Suitable for End Users as Well as Long-Term Investors",
    paragraphs: [
      "The project's 3 BHK layouts, landscaped greens, recreational facilities, clubhouse, swimming pool, podium planning and lift infrastructure can appeal to end users as well as buyers considering a longer-term investment."
    ]
  },
  {
    title: "Why Choose Redefine Realtors?",
    paragraphs: [
      "Redefine Realtors helps prospective buyers evaluate available units, pricing, applicable charges, payment schedules, location, documentation, floor preferences and suitability for their objectives."
    ]
  }
];

const legends = [
  "ENTRY / EXIT", "MAIN DROP-OFF", "TOWER DROP-OFF", "LANDSCAPE HANGOUT AREA",
  "PLAY AREA", "AMPHITHEATRE", "KIDS SWINGS AREA", "SPORTS COURTS ON CLUB ROOF",
  "CLUB DROP-OFF", "SWIMMING POOL", "KIDS POOL", "BUS WAITING AREA",
  "PRIVATE PARKING", "OPEN GYM", "CENTRAL LANDSCAPE AT PODIUM LEVEL WITH PARKING BELOW"
];

const faqs = [
  ["Where is Eldeco Echoes of Eden located?", "Eldeco Echoes of Eden is located in Sector 22D along the Yamuna Expressway in the Noida region, within the broader corridor associated with Noida International Airport near Jewar."],
  ["What 3 BHK configurations are available at Eldeco Echoes of Eden?", "The supplied project information lists 3 BHK + 2 Toilets at 1,550 sq. ft. and 3 BHK + 3 Toilets at 1,850 sq. ft."],
  ["What is the price of Eldeco Echoes of Eden?", "Pricing depends on tower, inventory, unit and applicable charges. The supplied information references an approximate ₹9,300 per sq. ft. BSP pre-launch offer for Tower Caelum and ₹10,999 per sq. ft. BSP for specified Tower Haven and Elysion inventory. Confirm current written pricing before booking."],
  ["How much payment is required to book a home?", "The supplied price sheet states 10% at booking. Subsequent instalments and any tower-specific promotional plan should be confirmed against the current unit-specific payment schedule."]
];

export default function EldecoPropertyPage({ property }: { property: PropertyData }) {
  const [slide, setSlide] = useState(0);
  const floorPlans = ["floor-plan-1.jpg", "floor-plan-2.jpg", "floor-plan-3.jpg"];

  return (
    <main className="eldeco-replica" aria-label={property.title}>
      <section className="er-banner">
        <Image src={`${A}hero.jpg`} alt="Eldeco Echoes of Eden, Yamuna Expressway" fill priority sizes="100vw" />
        <div className="er-banner-shade" />
        <h1>Eldeco Yamuna Expressway</h1>
      </section>

      <section className="er-editorial">
        <div className="er-editorial-image"><Image src={`${A}editorial-visual.png`} alt="Eldeco Echoes of Eden residences" fill sizes="50vw" /></div>
        <div className="er-editorial-copy">
          <Image className="er-eldeco-logo" src={`${A}eldeco-logo.png`} alt="Eldeco" width={546} height={88} />
          <h2>CHERISH<br />EVERY MOMENT.<br />LIVE EVERY DETAIL.</h2>
          <p>Step into ELDECO, where moments become memories and every detail tells a story of refined living</p>
        </div>
      </section>

      <section className="er-intro er-container">
        <p className="er-kicker">A NEW ADDRESS IN SECTOR 22D</p>
        <h2>Eldeco Echoes of Eden, Sector 22D Yamuna Expressway – Premium 3 BHK Homes Near Noida International Airport</h2>
        <p>Eldeco Echoes of Eden (EOE) brings a new residential opportunity to Sector 22D, Yamuna Expressway, for homebuyers and property investors looking at one of NCR’s prominent emerging development corridors. With thoughtfully planned 3 BHK residences, expansive central greens, modern podium-based planning, lifestyle amenities, and proximity to Noida International Airport near Jewar, the project combines residential comfort with long-term location potential.</p>
        <p>Redefine Realtors presents Eldeco Echoes of Eden for buyers seeking spacious homes in a location shaped by expanding infrastructure, airport-led development, and improving regional connectivity. The project offers 3 BHK configurations of 1,550 sq. ft. and 1,850 sq. ft.</p>
      </section>

      <div className="er-article">
        {articleSections.map((section, index) => (
          <section className={`er-article-section ${index % 2 === 0 ? "er-tinted" : ""}`} key={section.title}>
            <div className="er-container">
              <p className="er-kicker">ELDECO ECHOES OF EDEN / {String(index + 1).padStart(2, "0")}</p>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 4 && (
                <div className="er-config-grid">
                  <div><strong>3 BHK + 2T</strong><span>1,550 sq. ft.</span></div>
                  <div><strong>3 BHK + 3T</strong><span>1,850 sq. ft.</span></div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="er-highlights">
        <div className="er-container">
          <p className="er-kicker">PROJECT AT A GLANCE</p>
          <h2>Key Highlights of Eldeco Echoes of Eden</h2>
          <div className="er-highlight-grid">
            {["Sector 22D, Yamuna Expressway", "Near Noida International Airport corridor", "3 BHK + 2T – 1,550 sq. ft.", "3 BHK + 3T – 1,850 sq. ft.", "3-side open corner residence concept", "Approx. 3 acres of central greens", "Podium-based residential planning", "5 high-speed lifts per tower", "Half-Olympic-size swimming pool", "Clubhouse and sports facilities"].map((item) => <div key={item}><span>＋</span>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="er-faq er-container">
        <p className="er-kicker">NEED TO KNOW</p>
        <h2>Frequently Asked Questions</h2>
        {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>

      <section className="er-master">
        <div className="er-container">
          <p className="er-kicker">EXPLORE THE DEVELOPMENT</p>
          <h2>Site Master Plan</h2>
          <div className="er-master-grid">
            <div className="er-master-image"><Image src={`${A}master-plan.jpg`} alt="Eldeco Echoes of Eden site master plan" width={930} height={1228} sizes="(max-width: 800px) 100vw, 55vw" /></div>
            <div className="er-legends">
              <h3>LEGENDS</h3>
              <ol>{legends.map((legend, index) => <li key={legend}><span>{String(index + 1).padStart(2, "0")}.</span>{legend}</li>)}</ol>
            </div>
          </div>
        </div>
      </section>

      <section className="er-floor-intro">
        <div className="er-floor-visual"><Image src={`${A}floor-plan-banner.jpg`} alt="Eldeco residential floor planning" fill sizes="58vw" /></div>
        <div className="er-floor-copy"><p className="er-kicker">SPACE FOR YOUR FAMILY</p><h2>FLOOR<br />PLANS</h2><p>Every home at “ELDECO” is thoughtfully designed with your family in mind, ensuring it’s the perfect place for you all to thrive.</p></div>
      </section>

      <section className="er-floor-carousel er-container">
        <p className="er-kicker">RESIDENCE LAYOUT</p>
        <h2>Typical Floor Plan</h2>
        <div className="er-slide">
          <button type="button" onClick={() => setSlide((slide + floorPlans.length - 1) % floorPlans.length)} aria-label="Previous floor plan">‹</button>
          <Image src={`${A}${floorPlans[slide]}`} alt={`Eldeco floor plan reference ${slide + 1}`} width={700} height={460} />
          <button type="button" onClick={() => setSlide((slide + 1) % floorPlans.length)} aria-label="Next floor plan">›</button>
        </div>
        <div className="er-dots">{floorPlans.map((name, index) => <button key={name} className={slide === index ? "active" : ""} onClick={() => setSlide(index)} aria-label={`Show floor plan ${index + 1}`} />)}</div>
      </section>

      <section className="er-video-section">
        <div className="er-container">
          <p className="er-kicker">TAKE A CLOSER LOOK</p>
          <h2>Eldeco Yamuna Expressway – Project Videos</h2>
          <div className="er-video-grid">
            <video controls preload="metadata" poster={`${A}floor-plan-banner.jpg`}><source src="/images/properties/eldeco/WhatsApp-Video-2026-08-20-at-13.23.19.mp4" type="video/mp4" /></video>
          </div>
        </div>
      </section>

      <section className="er-contact">
        <div className="er-container">
          <p className="er-kicker">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>Find Your 3 BHK Home on Yamuna Expressway</h2>
          <p>Connect with Redefine Realtors to check the latest Tower Caelum inventory, current BSP, unit-specific cost sheet, floor availability, payment plan, and booking details for Eldeco Echoes of Eden.</p>
          <a href="tel:+919335167888">Call +91 9335167888 <span>↗</span></a>
          <small>Prices, inventory, payment plans and charges are subject to written confirmation. Property appreciation is not guaranteed. Verify project approvals and RERA details independently.</small>
        </div>
      </section>
    </main>
  );
}
