"use client";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";
import guides, { type GuideCategory } from "@/data/guides";
import videos, { type VideoItem, type VideoTopic } from "@/data/videos";
import { GuideCard } from "@/components/cards";
import ProductCarousel from "@/components/ProductCarousel";
import RatingStars from "@/components/RatingStars";
import ValueProps from "@/components/ValueProps";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className={`${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} transition-all duration-700`}>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">Gentle Sleep for Happy Babies</h1>
            <p className="mt-5 text-lg text-gray-600 max-w-prose">Tools, guides, and products that make bedtime calmer. Backed by gentle routines and practical experience.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="px-6 py-3 rounded-md bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:scale-95 transition">Shop Products</Link>
              <Link href="/guides" className="px-6 py-3 rounded-md border border-gray-200 hover:bg-gray-50 active:scale-95 transition">Read Guides</Link>
            </div>
            <div className="mt-8">
              <ValueProps />
            </div>
          </div>

          <div className={`${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"} transition-all duration-700 delay-100 relative aspect-square rounded-2xl overflow-hidden shadow-inner`}>
            <Image
              src="/images/hero-page-bg-img.jpg"
              alt="Peaceful sleeping baby in cozy nursery"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <Link href="/products" className="text-sm text-blue-600 hover:underline">View all products</Link>
        </div>
        <div className="mt-6">
          <ProductCarousel products={products.slice(0, 8)} />
        </div>
      </section>

      {/* Sleep Guides */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sleep Guides</h2>
          <Link href="/guides" className="text-sm text-blue-600 hover:underline">View all guides</Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(["0–3 months", "3–6 months", "6–12 months", "bedtime", "naps", "regressions", "safe sleep"] as GuideCategory["label"][]).map((c) => (
            <span key={c} className="rounded-full bg-gray-100 px-3 py-1 text-xs">{c}</span>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(0, 3).map((g) => (
            <article key={g.id} className="group">
              <GuideCard guide={g} />
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span className="inline-flex gap-2">
                  <span className="rounded-full bg-gray-100 px-2 py-0.5">~5 min</span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5">Easy</span>
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition">Read →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Videos</h2>
          <Link href="/videos" className="text-sm text-blue-600 hover:underline">View all videos</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {videos.slice(0, 3).map((v: VideoItem, i) => {
    const thumbnails = [
      "https://sundayhug.com/cdn/shop/articles/swaddling-a-baby-101-what-you-need-to-know-506791.jpg?v=1679666560",
      "https://www.sleepfoundation.org/wp-content/uploads/2020/09/Children-and-Sleep-1024x614.png",
      "https://sleeplady.com/wp-content/uploads/2016/03/4-Steps-To-Setting-Up-a-Sleep-Friendly-Environment.jpg",
    ];

    return (
      <article key={v.id} className="group">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={thumbnails[i]}
            alt={`Thumbnail for ${v.title}`}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="rounded-full bg-white/90 p-3 shadow-md group-hover:scale-105 transition cursor-pointer"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-blue-600"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-medium text-gray-900">{v.title}</h3>
          <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
            <span className="inline-flex flex-wrap gap-1">
              {v.topics?.slice(0, 2).map((t: VideoTopic) => (
                <span
                  key={t}
                  className="rounded-full bg-gray-100 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </span>
            {v.duration ? <span>{v.duration}</span> : null}
          </div>
        </div>
      </article>
    );
  })}
</div>

      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
          <h2 className="text-2xl font-semibold">Trusted by thousands of parents</h2>
          <p className="mt-1 text-blue-100">“The routines were simple and our nights got calmer. Products are top‑notch too.”</p>
          <div className="mt-4 flex items-center gap-3">
            <RatingStars value={4.8} />
            <span className="text-sm text-blue-100">4.8/5 average rating</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-semibold">Why families choose lapsleep</h2>
        <div className="mt-6">
          <ValueProps />
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-blue-600 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Get gentle sleep tips in your inbox</h3>
            <p className="text-blue-100">Short, practical advice for calmer nights.</p>
          </div>
          {mounted && (
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 md:w-80 px-4 py-3 rounded-md text-gray-900"
                aria-label="Email address"
              />
              <button className="px-5 py-3 rounded-md bg-white text-blue-700 font-medium hover:bg-blue-50 active:scale-95 transition">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <li>
            <div className="text-3xl font-semibold text-gray-900">10k+</div>
            <div className="text-sm text-gray-600">Guides read</div>
          </li>
          <li>
            <div className="text-3xl font-semibold text-gray-900">5k+</div>
            <div className="text-sm text-gray-600">Products sold</div>
          </li>
          <li>
            <div className="text-3xl font-semibold text-gray-900">3k+</div>
            <div className="text-sm text-gray-600">Happy families</div>
          </li>
          <li>
            <div className="text-3xl font-semibold text-gray-900">150+</div>
            <div className="text-sm text-gray-600">Community posts</div>
          </li>
        </ul>
      </section>
    </main>
  );
}
