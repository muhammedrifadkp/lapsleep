"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <picture>
                <source srcSet="/brand/lapsleep-logo-dark.svg" media="(prefers-color-scheme: dark)" />
                <img src="/brand/lapsleep-logo.svg" alt="lapsleep logo" className="h-8 w-auto" />
              </picture>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <Link href="/guides" className="hover:text-blue-600">Sleep Guides</Link>
            <Link href="/videos" className="hover:text-blue-600">Videos</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/products" className="block py-1">Products</Link>
            <Link href="/guides" className="block py-1">Sleep Guides</Link>
            <Link href="/videos" className="block py-1">Videos</Link>
            <Link href="/about" className="block py-1">About</Link>
            <Link href="/contact" className="block py-1">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

