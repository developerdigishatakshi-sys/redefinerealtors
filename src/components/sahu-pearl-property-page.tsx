"use client";


import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { PropertyData } from "@/data/property-data";


const pearlMediaBase = "/images/sahu-pearl";

const pearlImages = {
  hero: "/images/sahu-pearl/sahu-hero.webp",
  introduction: "/images/sahu-pearl/family.webp",
  overview: "/images/sahu-pearl/interior-1.webp",
  brochureOne: "/images/sahu-pearl/interior-2.webp",
  brochureTwo: "/images/sahu-pearl/interior-3.webp",
  brochureThree: "/images/sahu-pearl/brochure-page-12.webp",
  brochurePage: "/images/sahu-pearl/brochure-page-12.webp",
  floorPlan: "/images/sahu-pearl/floor-plan.webp",
  floorPlanFrame: "/images/sahu-pearl/frame.jpg",
  map: "/images/sahu-pearl/map.jpg",
  mapOne: "/images/sahu-pearl/map-1.webp",
  mapTwo: "/images/sahu-pearl/map-2.webp",
  mapThree: "/images/sahu-pearl/map-3.webp",
  extraOne: "/images/sahu-pearl/pixel-1.png",
  extraTwo: "/images/sahu-pearl/pixel-2.png",
  mapping: "/images/sahu-pearl/master-plan.webp",
  contact: "/images/sahu-pearl/contact.webp",
};

const pearlAmenityImages = [
  { title: "Clubhouse", src: "/images/sahu-pearl/clubhouse.png" },
  { title: "Gymnasium", src: "/images/sahu-pearl/gym.png" },
  { title: "Children's play area", src: "/images/sahu-pearl/child.png" },
  { title: "Jogging and outdoor fitness", src: "/images/sahu-pearl/running.png" },
  { title: "Garden spaces", src: "/images/sahu-pearl/garden.png" },
  { title: "Swing area", src: "/images/sahu-pearl/jhoola.png" },
  { title: "Family recreation", src: "/images/sahu-pearl/senior-couple.png" },
  { title: "Kids' recreation", src: "/images/sahu-pearl/topi-girl.png" },
  { title: "Kids' pool", src: "/images/sahu-pearl/baby.png" },
  { title: "Sports and recreation", src: "/images/sahu-pearl/badminton.png" },
  { title: "Outdoor leisure", src: "/images/sahu-pearl/shoes.png" },
  { title: "Landscaped greens", src: "/images/sahu-pearl/park-girl.png" },
  { title: "Project identity", src: "/images/sahu-pearl/pearl-logo.png" },
];
const pearlVideos = [
  "/videos/sahu-pearl/pearl-video-1.mp4",
  "/videos/sahu-pearl/pearl-video-2.mp4",
  "/videos/sahu-pearl/pearl-video-3.mp4",
  "/videos/sahu-pearl/pearl-video-4.mp4",
];

type SahuPearlPropertyPageProps = {
  property: PropertyData;
};

const configurations = [
  {
    name: "2 BHK",
    carpet: "660.37 sq. ft.",
    balcony: "98.16 sq. ft.",
    reference: "1,175 sq. ft.",
    price: "₹63,18,750",
    description:
      "A thoughtfully planned two-bedroom home with two toilets, living and dining space, kitchen and balcony areas.",
  },
  {
    name: "3 BHK + 2T",
    carpet: "867.04 sq. ft.",
    balcony: "108.72 sq. ft.",
    reference: "1,489 sq. ft.",
    price: "₹79,67,250",
    description:
      "A three-bedroom configuration designed for families looking for additional room and comfortable everyday living.",
  },
  {
    name: "3 BHK + 3T + Store",
    carpet: "980.49 sq. ft.",
    balcony: "105.81 sq. ft.",
    reference: "1,638 sq. ft.",
    price: "₹87,49,500",
    description:
      "A larger three-bedroom configuration with three toilets and a dedicated store for additional household convenience.",
  },
];

const amenities = [
  "Swimming pool",
  "Kids' swimming pool",
  "Clubhouse",
  "Fully equipped gymnasium",
  "Kids' play area",
  "Badminton court",
  "Skating rink",
  "Jogging track",
  "Cycle track",
  "Senior citizen area",
  "Flower orchard",
  "Herb garden",
  "Theme garden",
  "Gazebos",
  "Reader hut",
  "Visitor parking",
];

const connectivity = [
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
];

const paymentStages = [
  ["At the time of booking", "10% of BSP"],
  ["45th day", "5% of BSP"],
  ["Subsequent stages", "Construction-linked instalments"],
  ["Offer of possession", "Final 5% of BSP and applicable charges"],
];

const additionalCharges = [
  ["2 BHK", "₹3,63,000", "₹50,000"],
  ["3 BHK + 2T", "₹4,38,240", "₹60,000"],
  ["3 BHK + 3T + Store", "₹4,62,080", "₹70,000"],
];

const specificationItems = [
  {
    title: "Living and dining",
    description: "Vitrified tile flooring and plastic emulsion wall paint.",
  },
  {
    title: "Bedrooms",
    description:
      "Vitrified flooring, with wooden laminated flooring specified for the master bedroom.",
  },
  {
    title: "Doors and windows",
    description:
      "Hardwood-frame doors with factory-laminated flush panels and branded UPVC windows with glass panels.",
  },
  {
    title: "Kitchen and utilities",
    description:
      "Kitchen, toilet, balcony and common-area finishes as described in the project specification schedule.",
  },
];

export default function SahuPearlPropertyPage({
  property,
}: SahuPearlPropertyPageProps) {
  const [activeConfiguration, setActiveConfiguration] = useState(0);

  const selectedHome = configurations[activeConfiguration];

  const faqs = property.faqs.map((faq) => ({
    question: faq.question,
    answer:
      faq.answer ||
      "Please contact Redefine Realtors for the latest project information, applicable charges and availability.",
  }));

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f1] text-[#27231f]">
      {/* Top project navigation */}
      <div className="relative z-20 border-b border-[#e8dfd2] bg-[#f8f6f1]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/properties/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#716657] transition hover:text-[#9b7445]"
          >
            <ArrowLeft size={16} />
            All Properties
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#overview" className="text-sm text-[#716657] hover:text-[#9b7445]">
              Overview
            </a>
            <a href="#configurations" className="text-sm text-[#716657] hover:text-[#9b7445]">
              Configurations
            </a>
            <a href="#amenities" className="text-sm text-[#716657] hover:text-[#9b7445]">
              Amenities
            </a>
            <a href="#floor-plans" className="text-sm text-[#716657] hover:text-[#9b7445]">
              Floor Plans
            </a>
            <a href="#videos" className="text-sm text-[#716657] hover:text-[#9b7445]">
              Videos
            </a>
            <a href="#location" className="text-sm text-[#716657] hover:text-[#9b7445]">
              Location
            </a>
            <a href="#faq" className="text-sm text-[#716657] hover:text-[#9b7445]">
              FAQs
            </a>
          </div>

          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full bg-[#8c6942] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition hover:bg-[#6f5031]"
          >
            Enquire Now
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[580px] overflow-hidden bg-[#28241e] md:min-h-[690px]">
        <img
          src={pearlImages.hero}
          alt="Sahu City Pearl residential development"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171510]/90 via-[#211c16]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171510]/70 via-transparent to-[#171510]/10" />

        <div className="relative mx-auto flex min-h-[580px] max-w-[1440px] items-center px-6 py-20 md:min-h-[690px] md:px-14">
          <div className="max-w-3xl text-white">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#d5b68b]" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6cba7]">
                A Redefine Realtors Presentation
              </span>
            </div>

            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#e5c9a2]">
              Sahu City Phase 2
            </p>

            <h1 className="font-serif text-5xl font-normal leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
              Sahu
              <br />
              <span className="italic text-[#e6c9a7]">Pearl.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              Cherish every moment. Live every detail. Discover thoughtfully
              planned 2 and 3 BHK apartments on Main Sultanpur Road, Lucknow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#configurations"
                className="inline-flex items-center gap-3 rounded-full bg-[#d5b68b] px-7 py-4 text-sm font-semibold text-[#282019] transition hover:bg-white"
              >
                Explore Residences
                <ArrowDown size={16} />
              </a>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#282019]"
              >
                Request a Visit
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-9 gap-y-4 border-t border-white/25 pt-7">
              <div>
                <p className="text-2xl font-serif text-[#e6c9a2]">2 & 3</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                  BHK Residences
                </p>
              </div>
              <div>
                <p className="text-2xl font-serif text-[#e6c9a2]">3</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                  Configurations
                </p>
              </div>
              <div>
                <p className="text-2xl font-serif text-[#e6c9a2]">UP-RERA</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                  Registered Project
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/65 md:flex">
          Discover Pearl
          <span className="h-px w-12 bg-white/50" />
        </div>
      </section>

      {/* Introduction */}
      <section id="overview" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
              An Address to Cherish
            </span>

            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#312920] md:text-6xl">
              Experience
              <br />
              <span className="italic text-[#a47e51]">refined living.</span>
            </h2>

            <div className="mt-8 h-px w-20 bg-[#b8976e]" />

            <div className="mt-8 flex items-start gap-3 text-sm leading-7 text-[#776b5c]">
              <MapPin className="mt-1 shrink-0 text-[#9b7445]" size={18} />
              <span>
                Main Sultanpur Road, opposite Alpha Public School, Lucknow
              </span>
            </div>
          </div>

          <div className="space-y-6 text-[15px] leading-8 text-[#6d655b]">
            <p>
              Sahu City Pearl brings thoughtfully planned 2 and 3 BHK
              apartments to Main Sultanpur Road, Lucknow, combining
              contemporary residential design with landscaped surroundings,
              lifestyle amenities and access to major city destinations.
            </p>

            <p>
              Created within Sahu City Phase 2, Pearl offers three apartment
              configurations for families with different space requirements.
              Buyers can compare the 2 BHK, 3 BHK with 2 toilets, and 3 BHK
              with 3 toilets and a store.
            </p>

            <p>
              The project is registered under UP-RERA with registration
              number{" "}
              <strong className="font-semibold text-[#8c6942]">
                {property.rera}
              </strong>
              .
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full border border-[#d9cbb8] px-4 py-2 text-xs text-[#826b4e]">
                Residential Apartments
              </span>
              <span className="rounded-full border border-[#d9cbb8] px-4 py-2 text-xs text-[#826b4e]">
                Sahu City Phase 2
              </span>
              <span className="rounded-full border border-[#d9cbb8] px-4 py-2 text-xs text-[#826b4e]">
                Main Sultanpur Road
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Project gallery */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
                A closer look
              </span>
              <h2 className="mt-4 font-serif text-4xl text-[#342b22] md:text-6xl">
                The Pearl <span className="italic text-[#a47e51]">gallery.</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#796f63]">
              Project visuals and brochure imagery from the supplied Sahu City Pearl page capture.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <figure className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-[#eee8de] md:row-span-2 md:min-h-[560px]">
              <img src={pearlImages.introduction} alt="Sahu City Pearl project visual" loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-sm font-medium text-white">
                Sahu City Pearl
              </figcaption>
            </figure>
            <figure className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-[#eee8de]">
              <img src={pearlImages.overview} alt="Sahu Pearl project overview" loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            </figure>
            <figure className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-[#eee8de]">
              <img src={pearlImages.brochureOne} alt="Sahu Pearl brochure visual" loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            </figure>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[pearlImages.brochureTwo, pearlImages.brochureThree, pearlImages.brochurePage,
              pearlImages.extraOne, pearlImages.extraTwo].map((src, index) => (
              <figure key={src} className="overflow-hidden rounded-2xl border border-[#e8dfd2] bg-[#f8f6f1]">
                <img src={src} alt={`Sahu Pearl brochure and project image ${index + 1}`} loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-[1.025]" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Floor plans */}
      <section id="floor-plans" className="bg-[#eee8de] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
            Plan your space
          </span>
          <h2 className="mt-4 font-serif text-4xl text-[#342b22] md:text-6xl">
            Floor plans & <span className="italic text-[#a47e51]">layouts.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#796f63]">
            Review the available plan visuals. Ask the sales team for the latest unit-specific sanctioned plan before making a decision.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[{ src: pearlImages.floorPlan, title: "Apartment floor plan" },
              { src: pearlImages.floorPlanFrame, title: "Floor plan reference" }].map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-2xl border border-[#ded3c4] bg-white p-3">
                <img src={item.src} alt={item.title} loading="lazy"
                  className="max-h-[620px] w-full rounded-xl object-contain" />
                <figcaption className="px-3 py-4 text-sm font-semibold text-[#5e5142]">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Project videos */}
      <section id="videos" className="bg-[#302a22] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b88f]">
            Watch the project
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">
            Pearl in <span className="italic text-[#d6b88f]">motion.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
            Project videos supplied with the original page capture. Use the player controls to play each video.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pearlVideos.map((video, index) => (
              <div key={video} className="overflow-hidden rounded-2xl border border-white/15 bg-black/30">
                <video controls preload="metadata" playsInline className="aspect-video w-full bg-black">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="px-5 py-4 text-sm font-medium text-white/85">
                  Sahu Pearl project video {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#eee8de] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
              The Pearl Experience
            </span>
            <h2 className="mt-4 font-serif text-4xl text-[#342b22] md:text-5xl">
              Project highlights
            </h2>
            <p className="mt-5 leading-7 text-[#756a5d]">
              A residential environment combining considered apartment
              layouts, landscaped spaces and recreational facilities.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#ddd2c2] bg-[#ddd2c2] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Premium Homes", "2 and 3 BHK apartment configurations"],
              ["02", "Lifestyle", "Swimming pool, clubhouse and gymnasium"],
              ["03", "Outdoor Living", "Gardens, jogging track and cycle track"],
              ["04", "Location", "Main Sultanpur Road, Lucknow"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="min-h-52 bg-[#f8f6f1] p-7 transition hover:bg-white"
              >
                <span className="font-serif text-3xl text-[#b3936d]">
                  {number}
                </span>
                <h3 className="mt-8 text-lg font-semibold text-[#3b3025]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#817466]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {property.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-xl border border-[#ddd2c2] bg-white/60 p-4"
              >
                <Check className="mt-1 shrink-0 text-[#987447]" size={16} />
                <span className="text-sm leading-6 text-[#665c50]">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations and prices */}
      <section id="configurations" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
                Find Your Space
              </span>
              <h2 className="mt-4 font-serif text-4xl text-[#342b22] md:text-6xl">
                Homes designed
                <br />
                <span className="italic text-[#a47e51]">around you.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#796f63]">
              Compare the available configurations, area details and basic
              sale prices from the captured price list effective 1 July 2026.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              {configurations.map((configuration, index) => (
                <button
                  key={configuration.name}
                  type="button"
                  onClick={() => setActiveConfiguration(index)}
                  className={`w-full rounded-2xl border p-6 text-left transition ${
                    activeConfiguration === index
                      ? "border-[#987447] bg-[#eee5d8] shadow-sm"
                      : "border-[#e6ddd1] bg-white hover:border-[#b99b76]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-serif text-2xl text-[#3b3025]">
                      {configuration.name}
                    </span>
                    <ArrowUpRight
                      size={19}
                      className={
                        activeConfiguration === index
                          ? "text-[#987447]"
                          : "text-[#a89b8b]"
                      }
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#796f63]">
                    {configuration.description}
                  </p>
                  <p className="mt-5 text-lg font-semibold text-[#8c6942]">
                    {configuration.price}
                  </p>
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-[#e4d9ca] bg-white p-7 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#9b7445]">
                    Selected Residence
                  </span>
                  <h3 className="mt-3 font-serif text-3xl text-[#382e24] md:text-4xl">
                    {selectedHome.name}
                  </h3>
                </div>
                <span className="rounded-full bg-[#f1e9de] px-4 py-2 text-xs font-medium text-[#8b6c45]">
                  Price reference
                </span>
              </div>

              <div className="mt-8 border-y border-[#eee5d9] py-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8b8073]">
                  Basic Sale Price
                </p>
                <p className="mt-3 font-serif text-4xl text-[#8c6942] md:text-5xl">
                  {selectedHome.price}
                </p>
                <p className="mt-2 text-xs text-[#95897c]">
                  As per price list applicable from 1 July 2026.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 py-7">
                {[
                  ["Carpet Area", selectedHome.carpet],
                  ["Balcony Area", selectedHome.balcony],
                  ["Reference Area", selectedHome.reference],
                  ["Configuration", selectedHome.name],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs text-[#918578]">{label}</p>
                    <p className="mt-2 text-base font-semibold text-[#40362b]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-[#f7f3ed] p-5">
                <p className="text-sm leading-7 text-[#72685c]">
                  {selectedHome.description}
                </p>
              </div>

              <Link
                href="/contact/"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8c6942] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#6f5031]"
              >
                Enquire About This Configuration
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <p className="mt-7 text-xs leading-6 text-[#8c8174]">
            The reference area is indicative. The captured project
            information states that unit sale is based on carpet area. Basic
            Sale Price and additional charges are subject to change. Request
            the latest unit-specific cost sheet before booking.
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="bg-[#302a22] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b88f]">
                Everyday Experiences
              </span>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                Space to
                <br />
                <span className="italic text-[#d6b88f]">live fully.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-8 text-white/65">
                The captured project information identifies recreational,
                wellness and social facilities intended for residents across
                different age groups.
              </p>
              <div className="mt-10 h-px w-20 bg-[#d6b88f]" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity}
                  className="flex min-h-28 flex-col justify-between rounded-xl border border-white/15 bg-white/[0.04] p-4 transition hover:border-[#d6b88f]/60 hover:bg-white/[0.08]"
                >
                  <span className="font-serif text-xl text-[#d6b88f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 text-sm leading-5 text-white/85">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <div className="bg-[#302a22] px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b88f]">
              Spaces for every day
            </p>
            <h3 className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Amenities & lifestyle visuals
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {pearlAmenityImages.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]">
                <img src={item.src} alt={item.title} loading="lazy"
                  className="h-40 w-full object-contain p-3 sm:h-48" />
                <figcaption className="px-4 pb-4 text-xs font-medium text-white/80">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Location */}
      <section id="location" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
                Connected Living
              </span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#342b22] md:text-6xl">
                A location
                <br />
                <span className="italic text-[#a47e51]">to connect.</span>
              </h2>

              <div className="mt-8 flex items-start gap-3 text-sm leading-7 text-[#756a5d]">
                <MapPin className="mt-1 shrink-0 text-[#987447]" size={20} />
                <p>
                  Main Sultanpur Road, opposite Alpha Public School,
                  Sahu City Phase 2, Lucknow.
                </p>
              </div>

              <p className="mt-7 text-sm leading-8 text-[#796f63]">
                The supplied brochure lists approximate travel times to
                nearby destinations. Actual journey times vary with traffic,
                route and road conditions.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sahu+City+Phase+2+Main+Sultanpur+Road+Lucknow"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#bca17e] px-6 py-3 text-sm font-semibold text-[#8c6942] transition hover:bg-[#8c6942] hover:text-white"
              >
                Explore Location
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#e5dbcf] bg-white">
              <div className="flex items-center justify-between bg-[#eee8de] px-6 py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#987447]">
                    Nearby Destinations
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-[#342b22]">
                    Location connectivity
                  </h3>
                </div>
                <MapPin className="text-[#987447]" size={24} />
              </div>

              <div className="divide-y divide-[#eee7de] px-6">
                {connectivity.map(([destination, time]) => (
                  <div
                    key={destination}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-sm text-[#5e554a]">
                      {destination}
                    </span>
                    <span className="shrink-0 rounded-full bg-[#f3eee7] px-4 py-2 text-xs font-semibold text-[#8c6942]">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <p className="px-6 pb-5 pt-2 text-[11px] leading-5 text-[#978c80]">
                Travel times are brochure-stated estimates, not live
                navigation estimates.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Location maps and connectivity visuals */}
      <section className="bg-white px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
              Around the neighbourhood
            </span>
            <h3 className="mt-3 font-serif text-3xl text-[#342b22] md:text-4xl">
              Location maps
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[pearlImages.map, pearlImages.mapOne, pearlImages.mapTwo, pearlImages.mapThree, pearlImages.mapping]
              .map((src, index) => (
                <figure key={src} className="overflow-hidden rounded-2xl border border-[#e5dbcf] bg-[#f8f6f1]">
                  <img src={src} alt={`Sahu Pearl location map ${index + 1}`} loading="lazy"
                    className="h-64 w-full object-contain sm:h-72" />
                </figure>
              ))}
          </div>
        </div>
      </section>

      {/* Apartment specifications */}
      <section className="bg-[#eee8de] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
              Details Matter
            </span>
            <h2 className="mt-4 font-serif text-4xl text-[#342b22] md:text-5xl">
              Apartment specifications
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#796f63]">
              Finish and material references described in the captured
              project specification schedule.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {specificationItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#ded3c4] bg-[#f8f6f1] p-7"
              >
                <span className="font-serif text-3xl text-[#b3936d]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#3b3025]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#796f63]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment plan */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
              Buying Information
            </span>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#342b22] md:text-6xl">
              Construction-
              <br />
              linked
              <br />
              <span className="italic text-[#a47e51]">payment plan.</span>
            </h2>
            <p className="mt-7 text-sm leading-8 text-[#796f63]">
              The captured payment schedule describes an initial booking
              amount followed by instalments connected to construction
              milestones.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e4d9ca] bg-white p-6 md:p-9">
            <div className="mb-7 flex items-center gap-3">
              <ShieldCheck className="text-[#987447]" size={23} />
              <h3 className="font-serif text-2xl text-[#342b22]">
                Payment milestones
              </h3>
            </div>

            <div className="space-y-0">
              {paymentStages.map(([stage, amount], index) => (
                <div
                  key={stage}
                  className="flex gap-5 border-t border-[#eee5d9] py-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eee5d8] text-sm font-semibold text-[#8c6942]">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#43382c]">
                      {stage}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#8c6942]">
                      {amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-xl bg-[#f7f3ed] p-5 text-xs leading-6 text-[#82776a]">
              The source also describes construction milestones including
              excavation, piling, raft work, basement and floor slabs,
              plastering, flooring, doors and windows, lifts, painting,
              services and possession. Obtain the current written schedule
              from the promoter before making payments.
            </p>
          </div>
        </div>
      </section>

      {/* Additional charges */}
      <section className="bg-[#eee8de] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
            Cost Transparency
          </span>
          <h2 className="mt-4 font-serif text-4xl text-[#342b22] md:text-5xl">
            Additional charges & IFMS
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#ded3c4] bg-white">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="bg-[#f4eee5] text-xs uppercase tracking-wider text-[#806747]">
                  <th className="px-6 py-5 font-semibold">Configuration</th>
                  <th className="px-6 py-5 font-semibold">
                    Additional Charges
                  </th>
                  <th className="px-6 py-5 font-semibold">IFMS</th>
                </tr>
              </thead>
              <tbody>
                {additionalCharges.map((row) => (
                  <tr key={row[0]} className="border-t border-[#eee5d9]">
                    {row.map((cell, index) => (
                      <td
                        key={cell}
                        className={`px-6 py-5 text-sm ${
                          index === 0
                            ? "font-semibold text-[#45392d]"
                            : "text-[#766a5d]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-xs leading-6 text-[#84796d]">
            Preferential Location Charges may apply depending on floor,
            orientation and pool- or park-facing location. Other applicable
            taxes, registration, meter, AMC and statutory charges should be
            confirmed in the latest cost sheet.
          </p>
        </div>
      </section>

      {/* RERA */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-3xl bg-[#302a22] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#d6b88f]">
                  Registration Information
                </span>
                <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                  Project registration
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                  The captured project page identifies Sahu City Phase 2 –
                  Pearl as a residential apartment development.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d6b88f]">
                  UP-RERA Number
                </p>
                <p className="mt-3 break-all font-serif text-xl text-white md:text-2xl">
                  {property.rera}
                </p>
                <p className="mt-3 text-xs text-white/55">
                  Launch date stated in captured information: 23 February 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="sahu-property-faq bg-[#eee8de] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7445]">
              Helpful Information
            </span>
            <h2 className="mt-5 font-serif text-4xl text-[#342b22] md:text-6xl">
              Frequently
              <br />
              asked
              <br />
              <span className="italic text-[#a47e51]">questions.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#796f63]">
              Find answers to common questions about Sahu City Pearl,
              apartment configurations, pricing and location.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#ded3c4] bg-[#f8f6f1] px-6 py-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#45392d]">
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-[#987447] transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 border-t border-[#e8dfd2] pt-4 text-sm leading-7 text-[#796f63]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#302a22] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#d6b88f]/15" />
        <div className="absolute -right-5 -top-16 h-64 w-64 rounded-full border border-[#d6b88f]/15" />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b88f]">
            Your Next Chapter Begins Here
          </span>

          <h2 className="mt-7 font-serif text-4xl leading-tight md:text-7xl">
            Find your place
            <br />
            <span className="italic text-[#d6b88f]">at Pearl.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65 md:text-base">
            Connect with Redefine Realtors to explore apartment
            configurations, request the latest cost sheet and arrange a
            project visit.
          </p>

          <div className="mx-auto mt-9 max-w-3xl overflow-hidden rounded-2xl border border-white/15">
            <img src={pearlImages.contact} alt="Contact Redefine Realtors about Sahu Pearl" loading="lazy"
              className="max-h-64 w-full object-cover object-center" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 rounded-full bg-[#d6b88f] px-8 py-4 text-sm font-semibold text-[#302a22] transition hover:bg-white"
            >
              Start an Enquiry
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="tel:+919335167888"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#302a22]"
            >
              <Phone size={16} />
              Call Redefine Realtors
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <footer className="bg-[#211d18] px-6 py-9 text-center md:px-12">
        <p className="mx-auto max-w-5xl text-[11px] leading-6 text-white/45">
          {property.disclaimer}
        </p>
        <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[#c4a77f]">
          Redefine Realtors · Sahu City Pearl
        </p>
      </footer>

      {/* Mobile enquiry shortcut */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex gap-2 border-t border-[#e5dbcf] bg-[#f8f6f1]/95 p-3 backdrop-blur-lg md:hidden">
        <a
          href="tel:+919335167888"
          aria-label="Call Redefine Realtors"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#b99b76] py-3 text-sm font-semibold text-[#8c6942]"
        >
          <Phone size={16} />
          Call
        </a>
        <Link
          href="/contact/"
          className="flex flex-[1.5] items-center justify-center gap-2 rounded-full bg-[#8c6942] py-3 text-sm font-semibold text-white"
        >
          Enquire Now
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}