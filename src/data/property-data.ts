export type PropertySubsection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type PropertySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  subsections?: PropertySubsection[];
};

export type PropertyData = {
  slug: string;
  title: string;
  heroTitle?: string;
  fullTitle: string;
  location: string;
  image: string;
  description: string;
  rera?: string;
  highlights: string[];
  sections: PropertySection[];
  faqs: { question: string; answer?: string }[];
  disclaimer: string;
};

export const properties: PropertyData[] = [
  {
    slug: "the-elite-by-rohit-group-in-gomti-nagar-extension-lucknow",
    title: "The Elite by Rohit Group",
    heroTitle: "The Elite by Rohit Group in Gomti Nagar Extension Lucknow",
    fullTitle: "The Elite by Rohit Group – New Launch 3 & 4 BHK Flats Lucknow",
    location: "Vardan Khand, Sector 1, Gomti Nagar Extension, Lucknow",
    image: "/images/properties/the-elite-hero.jpg",
    description: "The Elite by Rohit Group brings large-format 3 BHK and 4 BHK residences to Gomti Nagar Extension, one of Lucknow’s established residential growth corridors. Planned as a single premium tower with expansive balconies, dedicated servant accommodation, landscaped leisure spaces and a broad amenity mix, the development addresses families seeking more room, privacy and everyday convenience. Redefine Realtors helps prospective buyers examine the project, compare configurations and arrange a site visit. Every buyer should independently verify the latest inventory, specifications, approvals, payment demands and agreement terms before booking.",
    rera: "UPRERAPRJ831567/12/2025",
    highlights: [
      "100 residences in a single premium tower, as described in project marketing material",
      "3 BHK and 4 BHK homes with store and servant room",
      "3 BHK carpet area: 1,692.90 sq. ft.; balcony area: 616.13 sq. ft.",
      "4 BHK carpet area: 2,282.70 sq. ft.; balcony area: 739.27 sq. ft.",
      "Location: 1/09, Vardan Khand, Sector 1, Gomti Nagar Extension, near Shaheed Path",
      "UP RERA: UPRERAPRJ831567/12/2025"
    ],
    sections: [
      {
        title: "An Introduction to The Elite by Rohit Group in Lucknow",
        paragraphs: [
          "The Elite is positioned as an ultra-premium residential development rather than a conventional high-density apartment complex. Its planning centres on two generously sized configurations: a 3 BHK residence with servant room and store, and a 4 BHK residence with servant room and store. The plans also emphasise large balconies, allowing the indoor living areas to connect with open views and outdoor space. This approach may appeal to buyers moving from an independent house, upgrading from a smaller flat or consolidating family requirements into one spacious home.",
          "The project stands at 1/09, Vardan Khand, Sector 1, Gomti Nagar Extension, near Shaheed Path. The brochure places it adjacent to Rohit Heights and close to CMS. That setting links a residential neighbourhood with major roads, schools, medical facilities, shopping destinations, sporting venues and recreational spaces across eastern and south-eastern Lucknow. Actual travel time will depend on traffic, road conditions and the chosen route, so a site visit at different hours remains more useful than relying solely on map estimates.",
          "Rohit Group presents the development as a refined address designed around light, ventilation, open space, wellness and community interaction. The tower imagery, entrance lobby, podium landscaping and apartment plans support that positioning, although brochure images remain artistic impressions. Buyers should inspect the sanctioned plans, specifications annexure, model residence and written sale documentation to establish exactly what the developer will deliver.",
        ],
      },
      {
        title: "The Elite Lucknow Project Highlights",
        paragraphs: [],
        subsections: [
          {
            title: "Premium Homes in a Low-Density Setting",
            paragraphs: [
              "Supporting marketing material describes The Elite as a 100-residence development. A limited number of homes within one tower can create a more private residential atmosphere than a large multi-tower township, subject to final sanctioned inventory and building management. Lower density may also make shared spaces feel less crowded, but buyers should assess lift capacity, parking allocation, visitor movement, maintenance planning and the expected number of residents before drawing conclusions.",
            ],
          },
          {
            title: "Two Large Residential Configurations",
            paragraphs: [
              "The current brochure identifies 3 BHK and 4 BHK homes, each with a store and servant room. The 3 BHK homes carry a stated super area of 2,915 sq. ft., while the 4 BHK homes carry a stated super area of 3,652 sq. ft. These dimensions place both options in the large-home category. Super area does not equal private usable floor space, so buyers should compare carpet area, covered area, balcony area and room dimensions rather than evaluating the residences through one figure.",
            ],
          },
          {
            title: "Expansive Balconies",
            paragraphs: [
              "Balconies form a prominent part of the project concept. The brochure states a balcony area of 616.13 sq. ft. for the 3 BHK plan and 739.27 sq. ft. for the 4 BHK plan. Such areas can support outdoor seating, planting and family leisure, subject to safety rules and association regulations. Because balcony area forms a considerable portion of the stated super area, buyers should decide how much value they place on outdoor space compared with enclosed carpet area.",
            ],
          },
          {
            title: "Lifestyle Podium and Landscaped Areas",
            paragraphs: [
              "The site plan depicts a multifunctional podium with leisure, fitness, social and landscaped components. Supporting material also promotes limited vehicle movement within recreation areas. Buyers should confirm the final circulation plan, fire-tender access, parking ramps, drop-off arrangements and pedestrian separation in approved drawings. Well-planned podium spaces can give children, adults and senior residents safer and more enjoyable areas for movement when operations and maintenance match the design intent.",
            ],
          },
          {
            title: "Registered New Residential Project",
            paragraphs: [
              "The Elite is registered with Uttar Pradesh Real Estate Regulatory Authority under number UPRERAPRJ831567/12/2025. The official record names Narena Infra Private Limited as the promoter, classifies the project as new, gives the address as 1/09, Sector 1, Lucknow, and records 30 September 2030 as the declared completion date. Buyers should search the registration number on the UP RERA portal and review the certificate, sanctioned documents, disclosures and periodic progress updates directly.",
            ],
          },
        ],
      },
      {
        title: "Location Advantages of Gomti Nagar Extension",
        paragraphs: [],
        subsections: [
          {
            title: "Access to Shaheed Path and Wider Lucknow",
            paragraphs: [
              "Shaheed Path has become a major mobility spine for residential and commercial areas around Gomti Nagar Extension. The project’s position near this corridor can support access towards the airport side, Sultanpur Road, Faizabad Road and other parts of Lucknow. Connectivity should still be evaluated through actual commutes. A buyer working in Hazratganj, an institutional district, a hospital cluster or an office zone may experience different travel patterns despite starting from the same address.",
            ],
          },
          {
            title: "Proximity to Education and Healthcare",
            paragraphs: [
              "The brochure identifies CMS School among nearby destinations and shows the site close to educational facilities in the Gomti Nagar Extension belt. Families should verify the relevant branch, admission rules, transport arrangements and route before treating any school as a deciding factor. For university access, the wider corridor connects towards institutions in and around Gomti Nagar, though journey times differ considerably.",
              "Medanta Hospital and Health City Vistaar appear in the project’s destination list. Access to major hospitals can be valuable for families with children, senior members or recurring medical needs. Prospective residents should also identify neighbourhood clinics, pharmacies, diagnostic centres and emergency routes. Proximity on a map does not guarantee a fixed response or travel time, particularly during heavy traffic.",
            ],
          },
          {
            title: "Recreation, Sports and Shopping",
            paragraphs: [
              "Janeshwar Mishra Park, Ekana International Cricket Stadium, Phoenix Palassio and Lulu Mall feature among the prominent destinations referenced in the brochure. These places expand the lifestyle appeal of the wider location by offering green space, sport, entertainment, dining and retail. Their relevance will vary by household, but their presence indicates that residents need not depend exclusively on the older city centre for recreation and shopping.",
              "The area also benefits from neighbourhood retail, food outlets, services and emerging commercial activity. Buyers should inspect what is already operational within a comfortable radius and what remains proposed. Existing facilities support immediate convenience, whereas future projects carry development and delivery risk. A grounded location assessment separates current utility from long-term potential.",
            ],
          },
        ],
      },
      {
        title: "3 BHK Flats at The Elite by Rohit Group",
        paragraphs: [],
        subsections: [
          {
            title: "Area Statement for the 3 BHK Residence",
            paragraphs: [
              "The brochure and price list identify the 3 BHK homes as Units 3 and 4. Each residence has a stated super area of 2,915 sq. ft., built-up area of 2,446.40 sq. ft., covered area of 1,830.50 sq. ft., carpet area of 1,692.90 sq. ft. and balcony area of 616.13 sq. ft. Buyers should request the exact definitions used for every area and match them against the registered documents and agreement for sale.",
              "The carpet area represents the most relevant statutory reference for private internal space, while the super area includes allocated common components under the commercial calculation. A comparison based on carpet area can help buyers assess usable value across competing projects. Room-wise dimensions, column positions, wall thickness, passages and furniture placement also influence how spacious a home feels.",
            ],
          },
          {
            title: "Who May Prefer the 3 BHK Plan",
            paragraphs: [
              "The 3 BHK option may suit nuclear families wanting generous bedrooms, couples planning for children, households accommodating parents or professionals requiring a flexible third bedroom. The store can support household organisation, while servant accommodation can separate domestic support functions from private family areas. Buyers who work remotely may adapt one bedroom or part of the plan as a study, although any modification must comply with the approved layout and building rules.",
              "This option can also serve buyers seeking premium space without moving to the larger 4 BHK budget. The decision should consider family size over the next several years, furniture, hosting habits, working arrangements and maintenance expense. Buying unused area purely for status can increase acquisition and running costs, while choosing too little space can force another move.",
            ],
          },
          {
            title: "Planning and Everyday Use",
            paragraphs: [
              "The floor plan places living, dining, bedroom, kitchen, utility and service functions within a broad layout. Prospective buyers should inspect door swings, wardrobe walls, bathroom access, kitchen workflow, servant access and the relationship between private rooms and entertaining areas. An attractive plan works best when circulation remains simple after full-size furniture enters the home.",
              "The large balcony can extend the social zone, but weather exposure deserves attention. Buyers should ask about drainage, waterproofing, railing height, electrical points, façade maintenance and rules governing enclosures or planters. They should also inspect orientation because sunlight, wind and heat gain vary by unit and floor.",
            ],
          },
        ],
      },
      {
        title: "4 BHK Flats at The Elite by Rohit Group",
        paragraphs: [],
        subsections: [
          {
            title: "Area Statement for the 4 BHK Residence",
            paragraphs: [
              "The 4 BHK homes are identified as Units 1 and 2. Each has a stated super area of 3,652 sq. ft., built-up area of 3,183 sq. ft., covered area of 2,443.75 sq. ft., carpet area of 2,282.70 sq. ft. and balcony area of 739.27 sq. ft. The configuration includes a store and servant room, providing space for larger families and more differentiated household functions.",
              "The carpet-area difference between the 3 BHK and 4 BHK plans is substantial, not merely an added bedroom. Buyers should examine whether the extra internal area improves bedroom dimensions, common spaces, storage, privacy and circulation in ways that matter to their household. The price difference should then be measured against the usable benefit rather than the configuration label alone.",
            ],
          },
          {
            title: "Who May Prefer the 4 BHK Plan",
            paragraphs: [
              "The larger residence may appeal to joint families, households with frequent guests, senior executives, entrepreneurs working from home or buyers moving from a villa. Four bedrooms allow separation between family, guest and work requirements. The servant room and store add operational convenience, especially where the household needs regular domestic assistance or substantial storage.",
              "Long-term planning matters. A family may need rooms for children, parents, guests, hobbies or work at different stages. Flexible space can reduce the pressure to relocate, yet a bigger residence also brings higher furnishing, cooling, cleaning, maintenance and statutory costs. Buyers should model both acquisition and recurring expenses before selecting the plan.",
            ],
          },
          {
            title: "Privacy and Entertaining",
            paragraphs: [
              "A large 4 BHK layout can support formal and informal living patterns more effectively when designed well. Buyers should assess whether guests can use the living and dining areas without passing through bedroom zones. They should also check bathroom placement, kitchen service access, utility areas and acoustic separation. These details influence privacy far more than finishes shown in a model unit.",
              "Balcony access can improve entertaining and relaxation, but orientation remains important. A visually open side may command a preference charge or face future development. Buyers should ask for the site plan, unit orientation, permissible neighbouring construction and written view-related disclosures. No open view should be treated as permanently protected unless legal and planning records establish that position.",
            ],
          },
        ],
      },
      {
        title: "Comparison of the 3 BHK and 4 BHK Homes",
        paragraphs: [],
        subsections: [
          {
            title: "Space and Configuration",
            paragraphs: [
              "The 3 BHK plan offers 1,692.90 sq. ft. of stated carpet area, whereas the 4 BHK offers 2,282.70 sq. ft. The larger option therefore provides 589.80 sq. ft. more stated carpet area. Its balcony area is also 123.14 sq. ft. larger. These differences can materially affect room proportions, privacy and furniture planning.",
              "Households should create a room-use schedule before deciding. Each present and expected family member should have an assigned requirement, including work, study, guests, storage and domestic support. If the 3 BHK accommodates those needs comfortably, it may preserve capital. If the extra bedroom and internal area prevent compromise, the 4 BHK may deliver stronger personal utility.",
            ],
          },
          {
            title: "Purchase Price and Recurring Cost",
            paragraphs: [
              "The price list effective 15 June 2026 states a total sale price of Rs. 2,85,67,000 for a 3 BHK and Rs. 3,57,89,600 for a 4 BHK, before applicable GST and other payable amounts. These are dated reference figures, not a continuing offer. Floor, unit position, preference charges, inventory status and revised pricing can alter the quotation.",
              "Recurring expense generally rises with super area because maintenance calculations often use that area. Larger homes also require more interiors, appliances and energy. A meaningful comparison should include stamp duty, registration, taxes, financing cost, maintenance, sinking or reserve contributions, insurance, furnishing and future repairs. Redefine Realtors can help buyers request a current cost sheet, but the buyer should confirm every charge in writing.",
            ],
          },
          {
            title: "Resale and Rental Considerations",
            paragraphs: [
              "Large premium homes address a narrower audience than mid-sized flats, though suitable supply can also be limited. A 3 BHK may attract a broader set of end users, while a 4 BHK may appeal to a more specialised luxury segment. Neither configuration guarantees appreciation, liquidity or rental return. Market performance depends on location, construction quality, possession, upkeep, demand, competing supply and economic conditions.",
            ],
          },
        ],
      },
      {
        title: "Amenities and Community Life at The Elite",
        paragraphs: [],
        subsections: [
          {
            title: "Fitness and Active Recreation",
            paragraphs: [
              "The brochure lists an indoor gym, outdoor gym, jogging track, badminton court, basketball court, swimming pool and reflexology path. This mix supports different exercise preferences without requiring every resident to leave the complex. A changing room appears in the amenity list, adding practical support around fitness and pool use.",
              "Buyers should confirm amenity dimensions, location, operating hours, access rules, handover stage and maintenance responsibility. A badminton court or basketball court shown on a plan may not match competition dimensions. Families should evaluate suitability for casual recreation rather than infer professional sporting specifications.",
            ],
          },
          {
            title: "Social and Leisure Spaces",
            paragraphs: [
              "The planned social spaces include a club, indoor games area, table tennis, theatre, open amphitheatre, gazebo, lawn and terrace garden. These facilities can support gatherings, hobbies, screenings, celebrations and informal neighbour interaction. Their value depends on management quality, booking policies, capacity and resident participation.",
            ],
          },
          {
            title: "Children, Families and Senior Residents",
            paragraphs: [
              "A children’s play area, landscaped lawn, water body and walking spaces can make the project more usable across age groups. The podium concept may help separate leisure from regular vehicle circulation, subject to final execution. Parents should check visibility, surface materials, shade, railing, pool protection and access control. Senior residents may focus on resting points, gradients, lift backup and barrier-free routes.",
            ],
          },
          {
            title: "Arrival, Parking and Movement",
            paragraphs: [
              "The site plan includes an entrance lobby, pick-up and drop-off point, car parking and internal movement areas. The June 2026 price list includes one covered basement parking space in the total price description, subject to the allotment terms. Buyers with multiple cars should ask whether an additional space is available, how it is allotted and whether it carries separate charges.",
            ],
          },
        ],
      },
      {
        title: "Apartment Specifications and Materials",
        paragraphs: [],
        subsections: [
          {
            title: "Structure and Construction System",
            paragraphs: [
              "The brochure describes an earthquake-resistant RCC frame combined with Mivan frame construction. Structural performance depends on engineering design, materials, supervision and compliance, not a marketing phrase alone. Buyers may review sanctioned structural information, quality processes and relevant professional certificates available through the promoter or regulator.",
              "Mivan-based construction can support dimensional consistency and faster repetitive construction when executed correctly. It may also limit later wall changes because structural walls cannot be altered casually. Residents must obtain approval before drilling, cutting or modifying structural components.",
            ],
          },
          {
            title: "Living, Dining and Bedroom Finishes",
            paragraphs: [
              "The drawing and dining areas are specified with vitrified tile flooring, plastic emulsion paint from named or equivalent brands, and OBD ceiling finish. Bedrooms carry vitrified tiles, with wooden flooring indicated for the master bedroom. The brochure uses brand-equivalent language, so buyers should ask for the agreement specification rather than assume a particular brand or product series.",
            ],
          },
          {
            title: "Kitchen Planning",
            paragraphs: [
              "The kitchen specification includes vitrified tile flooring, a tile dado up to two feet above the counter, plastic emulsion walls, OBD ceiling, a granite or engineered-stone counter and a stainless-steel sink from a named or equivalent brand. The specification does not automatically mean a fully fitted modular kitchen, appliances or loose cabinetry. Buyers should confirm the exact scope.",
              "Practical review should cover counter length, refrigerator position, chimney route, hob provision, water points, drainage, electrical sockets, utility connection and ventilation. Families who cook frequently may value these functional details more than decorative finishes.",
            ],
          },
          {
            title: "Bathrooms and Plumbing Fixtures",
            paragraphs: [
              "Bedroom toilets are specified with anti-skid ceramic flooring, tiles up to door height, false ceilings and CP fittings and chinaware from named or equivalent brands. A glass shower partition is indicated for the master bedroom toilet. The servant toilet carries a more standard finish schedule.",
              "Buyers should ask about water pressure, hot-water provisions, floor slope, trap placement, ventilation, waterproofing tests and maintenance access. At possession, taps, flush systems, drainage and sealants should be tested rather than assessed visually.",
            ],
          },
          {
            title: "Doors, Windows, Electrical Work and Balconies",
            paragraphs: [
              "The main entrance and internal doors are described as modular, while external doors, windows and ventilators may use UPVC or powder-coated aluminium. Electrical specifications include concealed copper wiring, modular switches and provisions for television and telephone points across major rooms. Exact socket counts, air-conditioning provisions, sanctioned load and backup allocation should be confirmed from the electrical plan.",
              "Balconies carry anti-skid ceramic tiles, weather-resistant external finishes and glass railing or another architect-approved treatment. The brochure also refers to PVC ceiling panelling. Because specifications remain subject to change and availability, the signed agreement and annexures should control buyer expectations.",
            ],
          },
        ],
      },
      {
        title: "The Elite Price in Lucknow and Cost Components",
        paragraphs: [],
        subsections: [
          {
            title: "Reference Prices Dated 15 June 2026",
            paragraphs: [
              "The attached price list records Rs. 2,85,67,000 as the total sale price for a 2,915 sq. ft. 3 BHK and Rs. 3,57,89,600 for a 3,652 sq. ft. 4 BHK. It states that GST applies additionally. It also says the total price includes the unit, one-kilovolt-ampere power backup, one covered basement parking space, club membership, firefighting system, external electrification and internal development.",
              "Buyers should obtain a fresh unit-specific quotation before relying on these figures. A valid cost sheet should state the unit number, floor, base consideration, inclusions, taxes, preference charges, maintenance deposits, meter costs, statutory expenses and due dates. Verbal assurances should be incorporated into signed documentation where legally permissible.",
            ],
          },
          {
            title: "Preference Location Charges",
            paragraphs: [
              "The price list applies a two per cent base-sale-price preference charge to Units 2 and 3 from the fourth through eighteenth floors. It also identifies a two per cent preference charge for specified refuge floors. The source uses the term “refugee floor” in one place, but buyers should read this as a document issue and ask the promoter to clarify the exact refuge-floor schedule in writing.",
              "Unit desirability can reflect height, orientation, view, sunlight and distance from shared facilities. A preference charge makes sense only when the buyer values that feature and the relevant benefit is accurately represented. Future construction may affect views, so view premiums require careful assessment.",
            ],
          },
          {
            title: "Maintenance and Other Amounts",
            paragraphs: [
              "The dated price list states advance maintenance for two years at Rs. 3 per sq. ft. per month on super area and interest-free maintenance security at Rs. 25 per sq. ft. on super area. It also notes electricity-load and meter costs based on the customer’s requirement or applicable UPPCL minimum. Stamp duty, registration and related costs remain extra.",
              "The list warns that other governmental or development-related demands may arise. Buyers should request a complete written schedule and legal explanation before booking. A contingency amount in the purchase budget can reduce pressure if lawful statutory charges change before possession.",
            ],
          },
          {
            title: "Tax Deduction and Statutory Payments",
            paragraphs: [
              "The price list refers to one per cent tax deducted at source when the property consideration exceeds Rs. 50 lakh. Buyers should obtain advice from a chartered accountant or tax professional regarding the applicable provision, timing, challans, seller details and treatment of taxes or incidental charges. Errors in deduction or deposit can create compliance problems.",
              "GST, stamp duty and registration treatment can change with law, project status and transaction circumstances. Redefine Realtors can coordinate documentation, but buyers should seek independent tax or legal advice where needed.",
            ],
          },
        ],
      },
      {
        title: "Construction-Linked Payment Plan",
        paragraphs: [],
        subsections: [
          {
            title: "Booking and Early Payment Stages",
            paragraphs: [
              "The June 2026 schedule calls for ten per cent of the total sale price plus GST at booking or as part of the booking amount, followed by another ten per cent plus GST on or before the forty-fifth day from booking. This creates a twenty per cent early-stage commitment. Buyers using finance should secure eligibility and sanction planning before accepting the schedule.",
            ],
          },
          {
            title: "Construction Milestones",
            paragraphs: [
              "The remaining schedule links five per cent instalments to multiple milestones, including basement roof, ground-floor slab and upper-floor slabs. Further demands correspond to superstructure completion, brickwork, internal plaster, external plaster and flooring. The external-plaster and flooring stages also divide the stated maintenance-security payment.",
              "Construction-linked demands can align outflow with progress, but buyers should verify each demand against the agreement and actual milestone certification. The schedule notes that stages may be called in a different sequence according to construction activity. This clause deserves legal review because cash-flow expectations depend on demand timing.",
            ],
          },
          {
            title: "Possession-Stage Payment",
            paragraphs: [
              "The final listed instalment is five per cent of total sale price, together with advance maintenance, stamp duty, registration and other applicable charges, on offer of possession. An offer should be evaluated against the agreement, regulatory requirements, occupancy or completion documentation as applicable, pending defects and promised facilities.",
              "Buyers should keep funds available for registration, interiors, moving and initial community expenses. These costs can be substantial even after most of the sale consideration has been paid.",
            ],
          },
        ],
      },
      {
        title: "RERA Registration and Buyer Due Diligence",
        paragraphs: [],
        subsections: [
          {
            title: "Verify the Official Project Record",
            paragraphs: [
              "The UP RERA project record confirms the name, registration number, promoter, location and declared completion date. Prospective buyers should independently reopen the portal near booking because disclosures and progress updates can change. They should compare the online record with the brochure, application form, cost sheet and agreement.",
            ],
          },
          {
            title: "Review the Agreement for Sale",
            paragraphs: [
              "The agreement should accurately state the apartment, carpet area, parking, price, taxes, specifications, payment schedule, possession obligations, delay provisions, defect liability, cancellation terms and dispute process. Any conflict between promotional material and contractual wording requires clarification before signature.",
              "A property lawyer can review title documents, approvals and clauses from the buyer’s perspective. The lawyer should work independently of the sales transaction. Buyers should avoid signing blank forms, incomplete annexures or documents they have not had time to read.",
            ],
          },
          {
            title: "Use the Correct Collection Account",
            paragraphs: [
              "The brochure and price list instruct buyers to deposit money only into the designated collection account for The Elite. Account details should be verified through official documents and a trusted promoter contact immediately before transfer. Payment requests received through informal messaging, altered PDFs or unfamiliar accounts require independent confirmation.",
              "Every payment should carry a receipt linking it to the applicant, unit and demand. Buyers should preserve quotations, forms, emails, bank records, tax challans and signed documents in one secure file.",
            ],
          },
          {
            title: "Inspect Plans and Progress",
            paragraphs: [
              "Buyers should review the sanctioned site plan, floor plan, apartment plan, tower configuration, parking and amenity layout. They should confirm fire access, refuge provisions, service areas and any commercial components. Construction visits must follow site safety rules and promoter permissions.",
              "Progress photographs can supplement inspection but may not identify the photographed location or technical quality. Regulatory updates, engineer certificates and site observations provide a stronger combined view.",
            ],
          },
        ],
      },
      {
        title: "How Redefine Realtors Supports Buyers",
        paragraphs: [],
        subsections: [
          {
            title: "Requirement-Based Configuration Selection",
            paragraphs: [
              "Redefine Realtors begins with the buyer’s family needs, budget, preferred floor, orientation and intended holding period. This makes the discussion about suitability rather than simply promoting the larger unit. A structured comparison can expose trade-offs between carpet area, balcony space, price and recurring expense.",
            ],
          },
          {
            title: "Current Inventory and Cost-Sheet Coordination",
            paragraphs: [
              "The team can coordinate current unit options and request a dated cost sheet from the relevant sales desk. Buyers receive a clearer basis for comparing floor and unit charges. Final inventory, pricing and acceptance remain subject to the promoter’s written confirmation.",
            ],
          },
          {
            title: "Site Visit Assistance",
            paragraphs: [
              "A site visit allows buyers to inspect access, surroundings, construction, orientation and sales materials. Redefine Realtors can help schedule the visit and prepare questions in advance. Buyers should use the visit to test practical concerns rather than focus only on the sample interiors.",
            ],
          },
          {
            title: "Documentation Support",
            paragraphs: [
              "The team can help organise brochures, quotations, application documents and payment schedules for review. Legal, tax, engineering and lending decisions should remain with appropriately qualified independent professionals. This separation protects the buyer from relying on one source for every conclusion.",
            ],
          },
          {
            title: "Clear Communication Through the Decision Process",
            paragraphs: [
              "Property purchases involve several participants and deadlines. Redefine Realtors can maintain communication between the buyer and project sales team, track requested clarifications and assist with appointment coordination. Material commitments should still appear in signed documents issued by authorised parties.",
            ],
          },
        ],
      },
      {
        title: "A Practical Checklist Before Booking",
        paragraphs: [],
        subsections: [
          {
            title: "Confirm Identity and Registration",
            paragraphs: [
              "Match the project name, promoter name, registration number, site address and collection account across official sources. Search UPRERAPRJ831567/12/2025 on UP RERA and download the available record for the purchase file.",
            ],
          },
          {
            title: "Select the Exact Unit",
            paragraphs: [
              "Record the tower, floor, unit number, configuration, carpet area, super area, orientation and parking allocation. Ask which sides face roads, amenities, adjoining plots or potential construction.",
            ],
          },
          {
            title: "Obtain a Dated Cost Sheet",
            paragraphs: [
              "Check the total consideration, GST, preference charges, maintenance, security deposits, meter cost, stamp duty, registration and other items. Ask whether any amount remains estimated or subject to later determination.",
            ],
          },
          {
            title: "Review Funding Readiness",
            paragraphs: [
              "Calculate the down payment, loan requirement, instalment dates and possession-stage expenses. Allow room for rate changes, delayed disbursement and interiors. A lender’s project approval does not replace personal due diligence.",
            ],
          },
          {
            title: "Examine Contractual Terms",
            paragraphs: [
              "Read the application, allotment terms and agreement with a property lawyer. Verify possession, delay, cancellation, refund, transfer, alteration, maintenance and defect provisions. Request written correction of inconsistencies before signing.",
            ],
          },
          {
            title: "Preserve Evidence",
            paragraphs: [
              "Retain every signed page, annexure, receipt, email and demand. Confirm account details independently before transfers. Avoid cash or payments to unrelated accounts.",
            ],
          },
        ],
      },
      {
        title: "Book a Site Visit with Redefine Realtors",
        paragraphs: [
          "The Elite by Rohit Group offers a distinctive proposition for buyers seeking new 3 BHK and 4 BHK flats in Lucknow with large carpet areas, servant accommodation, stores, expansive balconies and a varied amenity plan. Its Gomti Nagar Extension address places it near key urban infrastructure while preserving the character of a premium residential setting.",
          "The right decision depends on more than the headline configuration. Buyers should compare the exact unit, usable area, orientation, cost sheet, payment plan, contract and long-term affordability. Contact Redefine Realtors to discuss available options, request current commercial details and arrange a site visit. All project information, prices, plans, specifications and availability should be verified with the promoter and official records before booking.",
        ],
      },
      {
        title: "Why Consider The Elite by Rohit Group Lucknow?",
        paragraphs: [
          "The Elite by Rohit Group presents a strong residential option for families seeking spacious luxury flats in Gomti Nagar Extension. Its large 3 BHK and 4 BHK configurations include servant rooms, stores and expansive balconies, creating greater flexibility for family life, work, storage and entertaining.",
          "The project offers a well-planned combination of premium apartment specifications, landscaped areas and lifestyle amenities. Proposed facilities include a swimming pool, clubhouse, indoor and outdoor gyms, jogging track, badminton court, basketball court, children’s play area, theatre, amphitheatre, terrace garden and social spaces.",
          "Its location near Shaheed Path provides convenient access to prominent schools, hospitals, shopping centres, parks, sporting venues and business areas across Lucknow. Janeshwar Mishra Park, Ekana International Cricket Stadium, Phoenix Palassio, Lulu Mall and Medanta Hospital are among the important destinations identified in the project material.",
          "The Elite is registered with UP RERA under registration number UPRERAPRJ831567/12/2025. Buyers can use this number to review the project’s registration details, promoter information and regulatory disclosures on the official UP RERA portal. The combination of large residences, a premium location, limited inventory and lifestyle-focused planning makes the development worthy of consideration by end users and long-term property buyers.",
        ],
      },
      {
        title: "Why Choose Redefine Realtors Lucknow?",
        paragraphs: [
          "Redefine Realtors helps property buyers make informed decisions by providing clear project information, configuration comparisons and personalised assistance. Instead of treating every buyer alike, the team considers family requirements, preferred location, budget, unit size, floor choice, orientation and long-term plans before recommending a suitable property.",
          "Prospective buyers can receive assistance in comparing the 3 BHK and 4 BHK residences at The Elite by Rohit Group. The comparison may include carpet area, super area, balcony size, unit position, applicable charges, payment schedules and recurring ownership expenses.",
          "Redefine Realtors also coordinates site visits, current inventory enquiries and updated cost sheets. A planned site visit allows buyers to assess the project location, approach roads, construction progress, surroundings, apartment orientation and available sales documents before proceeding further.",
          "The team can assist buyers in organising brochures, quotations, payment schedules and booking documents for evaluation. Legal, financial, taxation and technical matters should remain subject to verification by qualified independent professionals.",
          "With local market knowledge and buyer-focused support, Redefine Realtors simplifies communication between prospective purchasers and the project sales team. Every material commitment, price, inclusion, specification and delivery condition should still be confirmed through official documents before booking or transferring funds.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is The Elite by Rohit Group located in Lucknow?",
        answer: "The project is located at 1/09, Vardan Khand, Sector 1, Gomti Nagar Extension, Lucknow, near Shaheed Path. The brochure places it adjacent to Rohit Heights and close to CMS. Buyers should visit the site and test their usual routes because journey times vary with traffic and road conditions."
      },
      { question: "What configurations are available at The Elite Lucknow?" },
      { question: "What is the carpet area of the 3 BHK flat?" },
      { question: "What is the carpet area of the 4 BHK flat?" },
      { question: "What is the price of The Elite by Rohit Group?" },
      { question: "Is The Elite Lucknow registered with UP RERA?" },
      { question: "Which amenities are planned at The Elite?" },
      { question: "Does the price include parking and club membership?" },
      { question: "How does the construction-linked payment plan work?" },
      { question: "How can Redefine Realtors help with a purchase?" }
    ],
    disclaimer: "Prices and project information are based on the supplied source material, including a price reference effective 15 June 2026. Inventory, prices, specifications, payment plans and approvals may change. Verify current details with the developer and relevant authorities before making a financial commitment."
  },
  {
    slug: "purvanchal-royal-atlantis-phase-1-lucknow",
    title: "Purvanchal Royal Atlantis Phase 1",
    fullTitle: "Purvanchal Royal Atlantis Phase 1 Lucknow",
    location: "Chak Gajaria, CG City, Gomti Nagar Extension, Lucknow",
    image: "/images/properties/purvanchal-royal-atlantis.jpg",
    description:
      "Premium 5 BHK residences at Purvanchal Royal Atlantis Phase 1, Lucknow.",
    rera: "UPRERAPRJ573204/04/2026",
    highlights: [
      "5 BHK residences",
      "Location: Chak Gajaria, CG City, Gomti Nagar Extension",
      "Approx. carpet area: 2,995 sq. ft.",
      "Approx. balcony area: 663 sq. ft.",
      "Approx. super area: 4,825 sq. ft.",
      "Three-level basement parking",
      "UP RERA: UPRERAPRJ573204/04/2026",
    ],
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          "Purvanchal Royal Atlantis Phase 1 is presented as a residential development in Chak Gajaria, CG City, Gomti Nagar Extension, Lucknow. The project page introduces spacious 5 BHK residences with a combination of indoor space, balconies and lifestyle amenities.",
          "The captured project information describes a residential environment with recreation, wellness, landscaping and community facilities.",
        ],
      },
      {
        title: "Strategic Location in CG City",
        paragraphs: [
          "The development is located in Chak Gajaria, CG City, Gomti Nagar Extension, Lucknow. Buyers should assess the exact site access, connectivity and surrounding development in person.",
        ],
      },
      {
        title: "Spacious 5 BHK Residences",
        paragraphs: [
          "The captured project information lists an approximate carpet area of 2,995 sq. ft., balcony area of approximately 663 sq. ft. and super area of approximately 4,825 sq. ft. for the 5 BHK residence.",
          "Confirm the applicable area definitions and unit-specific measurements in the official floor plan and agreement.",
        ],
        table: {
          headers: ["Area Type", "Approximate Area"],
          rows: [
            ["Carpet Area", "2,995 sq. ft."],
            ["Balcony Area", "663 sq. ft."],
            ["Super Area", "4,825 sq. ft."],
          ],
        },
      },
      {
        title: "Recreation, Wellness and Community Amenities",
        paragraphs: [
          "The captured project page identifies a club, swimming pool, sports and wellness facilities, landscaped areas and community spaces. It also refers to EV charging and fibre-to-home infrastructure.",
          "Availability and delivery of individual amenities should be confirmed against the latest approved project specifications.",
        ],
        bullets: [
          "Club and swimming pool",
          "Sports and wellness facilities",
          "Landscaped community areas",
          "EV charging provision",
          "Fibre-to-home infrastructure",
        ],
      },
      {
        title: "Safety, Parking and Infrastructure",
        paragraphs: [
          "The project information refers to three-level basement parking and supporting infrastructure. Buyers should verify parking allocation, access, safety systems and service provisions for the selected residence.",
        ],
      },
      {
        title: "RERA Details",
        paragraphs: [
          "The captured page lists UP RERA registration number UPRERAPRJ573204/04/2026. Verify the current registration, project status, approvals and possession details independently before booking.",
        ],
      },
      {
        title: "Who May Consider This Development?",
        paragraphs: [
          "The 5 BHK configuration may be relevant to buyers seeking a larger residence with multiple bedrooms and substantial balcony space. Compare the actual layout, floor, orientation, total purchase cost and current availability before making a decision.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Purvanchal Royal Atlantis Phase 1 located?",
        answer:
          "The project is located in Chak Gajaria, CG City, Gomti Nagar Extension, Lucknow.",
      },
      {
        question: "What apartment configuration is described?",
      },
      {
        question: "What is the approximate carpet area?",
      },
      {
        question: "What is the RERA registration number?",
      },
    ],
    disclaimer:
      "Areas are approximate figures from the captured project information. Project amenities, specifications, approvals, inventory and other details should be verified from current developer documents and the applicable RERA record.",
  },
  {
    slug: "eldeco",
    title: "Eldeco Yamuna Expressway",
    fullTitle:
      "Eldeco Echoes of Eden, Sector 22D Yamuna Expressway – Premium 3 BHK Homes",
    location: "Sector 22D, Yamuna Expressway",
    image: "/images/properties/eldeco-yamuna.jpg",
    description:
      "Eldeco Echoes of Eden premium 3 BHK homes in the Yamuna Expressway growth corridor.",
    highlights: [
      "3 BHK + 2T: 1,550 sq. ft.",
      "3 BHK + 3T: 1,850 sq. ft.",
      "Sector 22D, Yamuna Expressway",
      "Three-side-open corner residences",
      "Approx. 3 acres of central greens",
      "Five high-speed lifts per tower",
    ],
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          "Eldeco Echoes of Eden is presented as a residential development in Sector 22D, Yamuna Expressway. The captured project page describes premium 3 BHK residences in the Noida–Jewar airport growth corridor.",
          "The project information highlights residential planning, central greens, lifestyle amenities and connectivity along the Yamuna Expressway.",
        ],
      },
      {
        title: "Spacious 3 BHK Residences",
        paragraphs: [
          "The captured page lists two 3 BHK configurations. Confirm the applicable area definition and exact unit dimensions against the current floor plan.",
        ],
        table: {
          headers: ["Configuration", "Listed Area"],
          rows: [
            ["3 BHK + 2T", "1,550 sq. ft."],
            ["3 BHK + 3T", "1,850 sq. ft."],
          ],
        },
      },
      {
        title: "Residential Planning and Amenities",
        paragraphs: [
          "The source describes three-side-open corner homes, approximately 3 acres of central greens, podium planning and five high-speed lifts per tower.",
          "The captured amenity information also mentions a half-Olympic swimming pool and clubhouse. Confirm the latest specifications and delivery commitments from the developer.",
        ],
        bullets: [
          "Three-side-open corner residences",
          "Approximately 3 acres of central greens",
          "Podium-level planning",
          "Five high-speed lifts per tower",
          "Half-Olympic swimming pool",
          "Clubhouse",
        ],
      },
      {
        title: "Location and Connectivity",
        paragraphs: [
          "The development is located in Sector 22D along the Yamuna Expressway. The captured page discusses the wider Noida–Jewar airport growth corridor and connectivity considerations for prospective residents and investors.",
          "Travel times and future infrastructure benefits should be independently assessed; they are not guaranteed outcomes.",
        ],
      },
      {
        title: "Tower Caelum and Price References",
        paragraphs: [
          "The captured source distinguishes a Tower Caelum pre-launch reference of approximately ₹9,300 per sq. ft. BSP, subject to terms, from a price list effective 15 June 2026 that lists BSP of ₹10,999 per sq. ft. for specified inventory in Tower Haven and Elysion.",
          "These are different source references and should not be treated as one uniform price. Obtain a current tower- and unit-specific cost sheet.",
        ],
        table: {
          headers: ["Source reference", "BSP reference"],
          rows: [
            ["Tower Caelum pre-launch reference", "Approx. ₹9,300/sq. ft.*"],
            ["Price list effective 15 June 2026 — specified Tower Haven and Elysion inventory", "₹10,999/sq. ft."],
          ],
        },
      },
      {
        title: "Payment Structure and Additional Charges",
        paragraphs: [
          "The captured page describes a payment structure involving 10% at booking, a subsequent 10% by 45 days and 10% by 90 days. It also mentions a tower-specific 30:40:30 plan for Caelum. Confirm the exact applicable plan in the current written offer.",
          "The source lists additional charge references including parking at ₹5 lakh, club development at ₹2.5 lakh, IFMS at ₹25 per sq. ft., lease rent at ₹250 per sq. ft. and power backup at ₹35,000 per KVA. Taxes and statutory expenses may also apply.",
        ],
      },
      {
        title: "Why Consider Eldeco Echoes of Eden?",
        paragraphs: [
          "Buyers may compare the available configurations, tower, unit position, amenities, payment schedule and total cost. Investment decisions should account for market conditions, holding period and risk; future appreciation is not assured.",
        ],
      },
    ],
    
    faqs: [
      {
        question: "Where is Eldeco Echoes of Eden located?",
        answer:
          "Eldeco Echoes of Eden is located in Sector 22D along the Yamuna Expressway, within the wider Noida–Jewar airport growth corridor.",
      },
      {
        question: "What 3 BHK configurations are listed?",
        answer:
          "The supplied project information lists two configurations: 3 BHK + 2T with a reference area of 1,550 sq. ft. and 3 BHK + 3T with a reference area of 1,850 sq. ft. Confirm the applicable area definition and exact dimensions against the latest floor plan.",
      },
      {
        question: "What is the listed BSP for Tower Caelum?",
        answer:
          "The captured pre-launch reference for Tower Caelum is approximately ₹9,300 per sq. ft. BSP. This is separate from the price list effective 15 June 2026, which lists ₹10,999 per sq. ft. for specified Tower Haven and Elysion inventory. These are different tower and price references, not one uniform rate. Request the latest tower- and unit-specific cost sheet.",
      },
      {
        question: "What amenities are mentioned?",
        answer:
          "The supplied project information mentions approximately 3 acres of central greens, podium-level planning, three-side-open corner residences, five high-speed lifts per tower, a half-Olympic swimming pool and a clubhouse. Confirm the final specifications and delivery commitments with the developer.",
      },
    ],

    disclaimer:
      "Price references are tower-specific and dated, including a price list effective 15 June 2026. Prices, payment plans, additional charges, inventory and project details may change. Verify the latest official cost sheet, approvals and contractual terms before booking.",
  },
  {
    slug: "omaxe",
    title: "Omaxe",
    fullTitle: "Omaxe Centre Point Lucknow – Commercial Property",
    location: "Vibhuti Khand, Gomti Nagar, Lucknow",
    image: "/images/properties/omaxe.jpg",
    description:
      "Omaxe Centre Point brings retail, dining, entertainment, hospitality and office spaces together in Vibhuti Khand, Gomti Nagar, Lucknow.",
    highlights: [
      "Commercial development in Vibhuti Khand, Gomti Nagar",
      "Retail shops and kiosks",
      "Food court and restaurant spaces",
      "Hotel suites and office spaces",
      "Entertainment and event-oriented spaces",
      "Multiple floor-based commercial configurations",
    ],
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          "Omaxe Centre Point is a large-format commercial development in Vibhuti Khand, Gomti Nagar, Lucknow. The project combines retail, dining, entertainment, hospitality and business spaces within one destination.",
          "The captured project information identifies retail shops, kiosks, food court spaces, restaurants, hotel suites and office spaces across multiple floors.",
        ],
      },
      {
        title: "Prime Commercial Location",
        paragraphs: [
          "Vibhuti Khand is a prominent business and commercial zone within Gomti Nagar. The captured project page highlights connectivity towards Amar Shaheed Path, Gomti Nagar Railway Station, the Ayodhya–Lucknow Highway and Lohia Path.",
        ],
      },
      {
        title: "Commercial Spaces and Floor-wise BSP",
        paragraphs: [
          "The following BSP figures are transcribed from the supplied project price information. They are reference rates and should not be treated as a current quotation.",
        ],
        table: {
          headers: ["Floor", "Unit Type", "BSP"],
          rows: [
            ["Lower Ground Floor", "Shop", "₹32,000/sq. ft."],
            ["Ground Floor", "Shop", "₹40,000/sq. ft."],
            ["First Floor", "Shop & Kiosk", "₹28,000/sq. ft."],
            ["Second Floor", "Food Court & Kiosk", "₹24,000/sq. ft."],
            ["Third Floor", "Food Court & Kiosk", "₹20,000/sq. ft."],
            ["5th–14th Floors", "Hotel Suites / Office Space", "₹18,500/sq. ft."],
          ],
        },
      },
      {
        title: "Retail, Dining and Entertainment",
        paragraphs: [
          "The captured floor-plan descriptions identify retail shops and kiosks on lower floors, food court and restaurant-oriented spaces on the second and third floors, and hotel suites and offices on upper floors.",
          "The third-floor plan description includes banquet and pre-function areas, conference rooms, multiplex foyer, cinema halls, ticket counters and waiting areas.",
        ],
      },
      {
        title: "Amenities and Facilities",
        paragraphs: [
          "Project information identifies food courts, a business centre, branded outlets, movie-oriented entertainment, gaming facilities, high-speed elevators, parking and sit-out areas.",
        ],
      },
      {
        title: "Preferential Location Charges and Additional Costs",
        paragraphs: [
          "The captured price sheet describes preferential location charges for certain corner, main-road-facing and pool-view units. These charges vary by floor and unit position.",
          "Other listed cost heads include IFMS at ₹100 per sq. ft., EEC and FFC at ₹400 per sq. ft., power backup installation charges, electric meter connection charges, lease rent where applicable and GST. Hotel suites have a separately specified finishing cost.",
        ],
      },
      {
        title: "Payment Plans",
        paragraphs: [
          "The source describes multiple payment structures, including a 50% plus construction-linked plan for retail shops and food courts. The captured description states that 50% of BSP plus GST is payable within 60 days of booking, with subsequent construction-linked instalments and the remaining amount at possession.",
          "Separate payment structures are described for hotel suites and office spaces. Obtain the current unit-specific payment schedule before booking.",
        ],
      },
      {
        title: "Assured Return and Rental Information",
        paragraphs: [
          "The supplied project information states an assured return of 12% per annum on the 100% payment plan and 10% per annum on the 50:50 payment plan. The source also refers to post-possession rental guarantee information, including a three-month fit-out free-rental period and three-year lease rights with the company.",
          "These are project-document representations, not guaranteed investment outcomes. Buyers should review the exact written contractual terms, eligibility, timelines and conditions with an independent professional before relying on them.",
        ],
      },
      {
        title: "Who Can Consider Omaxe Centre Point?",
        paragraphs: [
          "The project may be relevant to retail business owners, food and beverage operators, entrepreneurs considering kiosk formats, companies seeking office space, buyers interested in hotel suites and investors comparing commercial property categories.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Omaxe Centre Point located in Lucknow?",
        answer:
          "Omaxe Centre Point is located in Vibhuti Khand, Gomti Nagar, Lucknow.",
      },
      {
        question: "What types of commercial properties are available at Omaxe Centre Point?",
      },
      {
        question: "What is the price of commercial space at Omaxe Centre Point Lucknow?",
      },
      {
        question: "Why should investors consider Omaxe Centre Point in Gomti Nagar?",
      },
    ],
    disclaimer:
      "Prices, payment plans, assured-return provisions, rental terms, inventory and commercial details are based on supplied project documents and may change. Buyers should verify current pricing, approvals, availability, contractual conditions, taxes and applicable charges before making a financial commitment.",
  },
  {
    slug: "sahu-pearl",
    title: "Sahu Pearl",
    fullTitle: "Sahu City Pearl – Premium 2 & 3 BHK Apartments on Sultanpur Road, Lucknow",
    location: "Main Sultanpur Road, Sahu City Phase 2, Lucknow",
    image: "/images/properties/sahu-pearl.webp",
    description:
      "Thoughtfully planned 2 and 3 BHK apartments at Sahu City Pearl, Main Sultanpur Road, Lucknow.",
    rera: "UPRERAPRJ391104/02/2024",
    highlights: [
      "Premium 2 BHK and 3 BHK apartments",
      "Part of Sahu City Phase 2",
      "Main Sultanpur Road, opposite Alpha Public School, Lucknow",
      "Swimming pool and kids' pool",
      "Clubhouse and gymnasium",
      "Badminton court and skating rink",
      "Jogging and cycle tracks",
      "UP RERA: UPRERAPRJ391104/02/2024",
    ],
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          "Sahu City Pearl brings 2 and 3 BHK apartments to Main Sultanpur Road, Lucknow. The captured project information describes contemporary residential planning, landscaped surroundings and lifestyle amenities within Sahu City Phase 2.",
          "The project page describes three apartment configurations for buyers with different space requirements.",
        ],
      },
      {
        title: "Sahu City Pearl Price and Configuration",
        paragraphs: [
          "The captured price list is stated as applicable from 1 July 2026. The reference area is indicative; the source states that unit sale is based on carpet area. Additional charges are separate.",
        ],
        table: {
          headers: ["Configuration", "Carpet Area", "Balcony Area", "Reference Area", "BSP"],
          rows: [
            ["2 BHK", "660.37 sq. ft.", "98.16 sq. ft.", "1,175 sq. ft.", "₹63,18,750"],
            ["3 BHK + 2T", "867.04 sq. ft.", "108.72 sq. ft.", "1,489 sq. ft.", "₹79,67,250"],
            ["3 BHK + 3T + Store", "980.49 sq. ft.", "105.81 sq. ft.", "1,638 sq. ft.", "₹87,49,500"],
          ],
        },
      },
      {
        title: "Apartment Configurations",
        paragraphs: [
          "The 2 BHK layout is described with two bedrooms, two toilets, living and dining space, kitchen and balcony/utility areas.",
          "The 3 BHK + 2T configuration provides three bedrooms, living and dining space, kitchen, toilets and balcony areas.",
          "The 3 BHK + 3T + Store configuration adds a dedicated store along with three toilets, living and dining space, kitchen and balcony/utility areas.",
        ],
      },
      {
        title: "Lifestyle Amenities",
        paragraphs: [
          "The captured project page identifies recreational, wellness and social facilities for residents across different age groups.",
        ],
        bullets: [
          "Swimming pool and kids' pool",
          "Clubhouse and fully equipped gymnasium",
          "Kids' play area",
          "Badminton court and skating rink",
          "Jogging and cycle tracks",
          "Senior citizen area",
          "Flower orchard, herb garden and theme garden",
          "Gazebos and reader hut",
          "Convenient shopping and visitor parking",
        ],
      },
      {
        title: "Location and Connectivity",
        paragraphs: [
          "Sahu City Pearl is located on Main Sultanpur Road, opposite Alpha Public School, Lucknow. The captured brochure lists approximate travel times to nearby destinations. These are brochure-stated estimates and can vary according to traffic, route and road conditions.",
        ],
        table: {
          headers: ["Destination", "Brochure-stated time"],
          rows: [
            ["Kisan Path", "3 minutes"],
            ["HCL IT City", "5 minutes"],
            ["Shaheed Path", "7 minutes"],
            ["Phoenix Palassio Mall", "7 minutes"],
            ["International Cricket Stadium", "7 minutes"],
            ["Medanta Hospital", "10 minutes"],
            ["Gomti Nagar", "10 minutes"],
            ["Lulu Mall", "10 minutes"],
            ["Lucknow Airport", "15 minutes"],
            ["Alambagh Bus & Metro Station", "20 minutes"],
            ["Hazratganj", "20 minutes"],
          ],
        },
      },
      {
        title: "Apartment Specifications",
        paragraphs: [
          "The captured specification schedule describes vitrified tiles in living areas, plastic emulsion wall paint, hardwood-frame doors with factory-laminated flush panels and branded UPVC windows with glass panels.",
          "Bedroom specifications include vitrified flooring, while the master bedroom schedule specifies wooden laminated flooring. Kitchen, toilet, balcony and common-area finishes are also described in the original specification schedule.",
        ],
      },
      {
        title: "Construction-Linked Payment Plan",
        paragraphs: [
          "The captured schedule starts with 10% of BSP at booking, followed by 5% on the 45th day. Further instalments are linked with construction milestones such as excavation, piling, raft work, basement roof slab, ground-floor roof slab, subsequent floor slabs, internal plaster, flooring, doors and windows, lifts, painting, services and possession.",
          "The source states that the final 5% of BSP becomes due on offer of possession, along with applicable IFMS, meter, AMC, registry and other charges, if any. Verify the current payment schedule with the promoter.",
        ],
      },
      {
        title: "Additional Charges and PLC",
        paragraphs: [
          "The captured price sheet lists the following additional charge references. IFMS is separately listed. Preferential Location Charges may also apply according to floor and pool- or park-facing location.",
        ],
        table: {
          headers: ["Configuration", "Additional Charges", "IFMS"],
          rows: [
            ["2 BHK", "₹3,63,000", "₹50,000"],
            ["3 BHK + 2T", "₹4,38,240", "₹60,000"],
            ["3 BHK + 3T + Store", "₹4,62,080", "₹70,000"],
          ],
        },
      },
      {
        title: "RERA Details",
        paragraphs: [
          "Project: Sahu City Phase 2 – Pearl. Project type: Residential Apartments. Configurations: 2 BHK, 3 BHK + 2T and 3 BHK + 3T + Store. The captured page lists RERA registration number UPRERAPRJ391104/02/2024 and launch date 23 February 2024.",
        ],
      },
      {
        title: "Find Your Home at Sahu City Pearl",
        paragraphs: [
          "Floor selection, apartment orientation, carpet area, applicable PLC, additional charges, payment stages and unit availability can influence the final buying decision. Redefine Realtors can assist prospective buyers with comparing available configurations, reviewing floor plans and obtaining the latest cost sheet.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Sahu City Pearl located?",
        answer:
          "Sahu City Pearl is located within Sahu City Phase 2 on Main Sultanpur Road, Lucknow, opposite Alpha Public School.",
      },
      {
        question: "What apartment configurations are available at Sahu City Pearl?",
      },
      {
        question: "What is the price of a 2 BHK apartment at Sahu City Pearl?",
      },
      {
        question: "What is the price of a 3 BHK apartment?",
      },
      {
        question: "What amenities are available at Pearl?",
      },
      {
        question: "Is Sahu City Pearl RERA registered?",
      },
      {
        question: "Does the project offer a construction-linked payment plan?",
      },
      {
        question: "How far is Pearl from Lucknow Airport?",
      },
    ],
    disclaimer:
      "Prices are based on the captured price list stated as applicable from 1 July 2026. Prices, availability, charges, specifications, payment schedules and project details may change. Brochure travel times are approximate. Verify current information and RERA details before making a financial commitment.",
  },

];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
