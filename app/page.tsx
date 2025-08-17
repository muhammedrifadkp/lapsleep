import Hero from "@/components/Hero";
import products from "@/data/products.json";
import guides from "@/data/guides.json";
import videos from "@/data/videos.json";
import { ProductCard, GuideCard, VideoCard } from "@/components/cards";
import type { Video } from "@/types";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <Link href="/products" className="text-sm text-blue-600 hover:underline">View all</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Sleep Guides</h2>
          <Link href="/guides" className="text-sm text-blue-600 hover:underline">View all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(0, 3).map((g) => (
            <GuideCard key={g.id} guide={g} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Videos</h2>
          <Link href="/videos" className="text-sm text-blue-600 hover:underline">View all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(0, 3).map((v) => (
            <VideoCard key={v.id} video={v as Video} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-blue-600 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Get gentle sleep tips in your inbox</h3>
            <p className="text-blue-100">Short, practical advice for calmer nights.</p>
          </div>
          <form className="flex w-full md:w-auto gap-3">
            <input type="email" placeholder="Your email" className="flex-1 md:w-80 px-4 py-3 rounded-md text-gray-900" />
            <button className="px-5 py-3 rounded-md bg-white text-blue-700 font-medium hover:bg-blue-50">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
