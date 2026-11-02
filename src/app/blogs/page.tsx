import type { Metadata } from "next";
import BlogsPageClient from "./blogs-page-client";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore the latest real estate updates, property insights and home-buying guides from Redefine Realtors.",
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
