import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Redefine Realtors in Lucknow. Call, email or send your property enquiry.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}