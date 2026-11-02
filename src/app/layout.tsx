import "./eldeco-replica.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./contact/contact-page.css";
import "./omaxe-page.css";
import FloatingContact from "@/components/floating-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redefinerealtors.com"),
  title: {
    default: "Redefine Realtors | Property in Lucknow & Noida",
    template: "%s | Redefine Realtors",
  },
  description:
    "Explore residential and commercial properties in Lucknow and Noida with Redefine Realtors. Get guidance for buying, selling and leasing property.",
  applicationName: "Redefine Realtors",
  openGraph: {
    title: "Redefine Realtors | Find Your Dream Property",
    description:
      "Personalised property guidance for Lucknow and Noida.",
    url: "https://redefinerealtors.com/",
    siteName: "Redefine Realtors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}<FloatingContact /></body>
    </html>
  );
}

