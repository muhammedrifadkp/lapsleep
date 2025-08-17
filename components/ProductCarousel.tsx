"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components/cards";
import type { Product } from "@/types";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const step = 1;
  const visible = 4; // for lg screens; CSS will adapt

  const maxIndex = Math.max(0, products.length - 1);

  useEffect(() => {
    const handle = setInterval(() => setIndex((i) => Math.min(maxIndex, i + step)), 5000);
    return () => clearInterval(handle);
  }, [maxIndex]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const width = el.clientWidth;
    const cardWidth = width / 4; // approx for lg; smaller screens rely on CSS overflow scroll
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }, [index]);

  return (
    <div className="relative">
      <div className="overflow-x-auto no-scrollbar">
        <div ref={trackRef} className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[45%] md:auto-cols-[33%] lg:auto-cols-[25%] gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" aria-hidden />
      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - step))}
          className="rounded-md border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50 active:scale-95 transition"
          aria-label="Previous products"
        >
          Prev
        </button>
        <button
          onClick={() => setIndex((i) => Math.min(maxIndex, i + step))}
          className="rounded-md border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50 active:scale-95 transition"
          aria-label="Next products"
        >
          Next
        </button>
      </div>
    </div>
  );
}

