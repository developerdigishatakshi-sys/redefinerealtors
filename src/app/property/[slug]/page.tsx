
import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import PropertyDetail from "@/components/property-detail";
import SahuPearlPropertyPage from "@/components/sahu-pearl-property-page";
import { properties, getPropertyBySlug } from "@/data/property-data";

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "Property Not Found" };
  }

  return {
    title: property.fullTitle,
    description: property.description,
    openGraph: {
      title: property.fullTitle,
      description: property.description,
      images: [property.image],
    },
  };
}

async function PropertyPageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();


  if (slug === "sahu-pearl") {

    return <SahuPearlPropertyPage property={property} />;

  }
  return (
    <>
      <PropertyDetail property={property} />

      <footer className="inner-footer">
        <div className="container inner-footer-row">
          <a className="brand" href="/">
            <span className="brand-copy">
              <strong>REDEFINE</strong>
              <span>R E A L T O R S</span>
            </span>
          </a>

          <div className="inner-footer-links">
            <a href="/about-us/">About Us</a>
            <a href="/properties/">Properties</a>
            <a href="/blogs/">Blogs</a>
            <a href="/contact/">Contact Us</a>
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

export default function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <SiteHeader />

      <Suspense
        fallback={
          <main
            style={{
              minHeight: "60vh",
              display: "grid",
              placeItems: "center",
              color: "#29382f",
            }}
          >
            Loading property details...
          </main>
        }
      >
        <PropertyPageContent params={params} />
      </Suspense>
    </>
  );
}
