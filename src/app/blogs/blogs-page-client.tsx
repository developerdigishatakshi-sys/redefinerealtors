"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, UserRound } from "lucide-react";
import SiteHeader from "@/components/site-header";

const posts = [
  {
    title: "Are Omaxe Flats in Lucknow a Smart Choice for Home buyers?",
    date: "September 17, 2026",
    image: "/images/blogs/omaxe.png",
    alt: "Omaxe flats in Lucknow",
    excerpt: "Buying a flat involves more than choosing a floor plan...",
    href: "/blogs/",
  },
  {
    title: "Is Sahu City Pearl Lucknow the Right Home for Your Family?",
    date: "September 17, 2026",
    image: "/images/blogs/sahu-pearl.png",
    alt: "Sahu City Pearl Lucknow",
    excerpt: "Choosing a family home requires more than comparing prices and...",
    href: "/blogs/",
  },
  {
    title: "How to Choose the Best Real Estate Agents in Lucknow",
    date: "September 11, 2026",
    image: "/images/blogs/real-estate-agents.png",
    alt: "Real estate agents in Lucknow",
    excerpt: "Buying, selling, or investing in property is a major financial...",
    href: "/blogs/",
  },
  {
    title: "Is Eldeco Sector 22D Yamuna Expressway a Smart Property Investment?",
    date: "September 10, 2026",
    image: "/images/blogs/eldeco.png",
    alt: "Eldeco Sector 22D Yamuna Expressway",
    excerpt: "Explore the location, connectivity and investment potential...",
    href: "/blogs/",
  },
];

export default function BlogsPageClient() {
  return (
    <>
      <SiteHeader />

      <main className={"rb-page"}>
        <div className={"rb-pageHeader"}>
          <h1>Blogs</h1>
        </div>

        <div className={"rb-content"}>
          <p className={"rb-intro"}>
            Welcome to our blog section! Here you will find the latest
            updates, news, and insights.
          </p>

          <div className={"rb-grid"}>
            {posts.map((post, index) => (
              <article className={"rb-card"} key={post.title}>
                <Link
                  href={post.href}
                  className={"rb-imageLink"}
                  aria-label={`Read ${post.title}`}
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={768}
                    height={431}
                    priority={index < 3}
                    className={"rb-image"}
                  />
                  <span className={"rb-imageOverlay"}>
                    <ArrowUpRight size={25} />
                  </span>
                </Link>

                <div className={"rb-cardBody"}>
                  <h2>
                    <Link href={post.href}>{post.title}</Link>
                  </h2>

                  <div className={"rb-meta"}>
                    <span><UserRound size={13} /> Admin</span>
                    <span><CalendarDays size={13} /> {post.date}</span>
                  </div>

                  <p className={"rb-excerpt"}>{post.excerpt}</p>

                  <Link href={post.href} className={"rb-readMore"}>
                    Read More <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className={"rb-footer"}>
        <div className={"rb-footerInner"}>
          <div className={"rb-footerBrand"}>
            <Link href="/" aria-label="Redefine Realtors home">
              <Image
                src="/images/blogs/redefine-logo-white.svg"
                alt="Redefine Realtors"
                width={150}
                height={70}
                className={"rb-logo"}
              />
            </Link>
            <p>Redefining the way you discover your next property.</p>
          </div>

          <div className={"rb-footerColumn"}>
            <h3>Projects</h3>
            <Link href="/property/sahu-pearl/">Sahu Pearl</Link>
            <Link href="/properties/">Omaxe Lucknow</Link>
            <Link href="/properties/">Purvanchal Royal Atlantis</Link>
            <Link href="/properties/">Eldeco Yamuna Expressway</Link>
            <Link href="/properties/">The Elite</Link>
          </div>

          <div className={"rb-footerColumn"}>
            <h3>Quick Links</h3>
            <Link href="/about-us/">About Us</Link>
            <Link href="/blogs/">Blogs</Link>
            <Link href="/contact/">Contact Us</Link>
          </div>
        </div>

        <div className={"rb-footerBottom"}>
          Â© 2026 Redefine Realtors. All rights reserved.
        </div>
      </footer>
    </>
  );
}