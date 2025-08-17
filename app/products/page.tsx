import products from "@/data/products.json";
import { ProductCard } from "@/components/cards";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Products</h1>
      <p className="text-gray-600 mt-2">Browse our curated sleep-friendly baby products.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}

