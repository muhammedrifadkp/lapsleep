"use client";
import productsData from "@/data/products";
import { ProductCard } from "@/components/cards";
import { useMemo, useState } from "react";

const CATEGORIES = ["All", "Sleep", "Nursery", "Tech", "Care"] as const;

type Category = typeof CATEGORIES[number];

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    return productsData.filter((p) => {
      const matchesQuery = !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      const matchesCat = category === "All" || p.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Products</h1>
      <p className="text-gray-600 mt-2">Browse our curated sleep-friendly baby products.</p>

      {/* Filters */}
      <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm transition-colors ${category === c ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 hover:bg-gray-50"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="w-full md:w-72 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Search products"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}

