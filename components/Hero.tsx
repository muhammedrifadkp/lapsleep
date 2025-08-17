import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Gentle Sleep for Happy Babies</h1>
          <p className="mt-4 text-gray-600 max-w-prose">Explore products and gentle routines designed to help your baby sleep better. Guides, tips, and tools to bring calm to bedtime.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/products" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Shop Products</Link>
            <Link href="/guides" className="px-5 py-3 rounded-md border border-gray-200 hover:bg-gray-50">Read Guides</Link>
          </div>
        </div>
        <div className="aspect-square rounded-2xl bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center shadow-inner" aria-hidden />
      </div>
    </section>
  );
}

