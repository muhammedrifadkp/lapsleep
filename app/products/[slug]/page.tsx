import products from "@/data/products.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <div className="mt-6">
            <button className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Add to cart</button>
          </div>
          {product.tags?.length ? (
            <div className="mt-6 text-sm text-gray-500">Tags: {product.tags.join(", ")}</div>
          ) : null}
        </div>
      </div>
    </main>
  );
}

