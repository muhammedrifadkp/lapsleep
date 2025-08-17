"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Sleep Guides", href: "/guides" },
  { name: "Videos", href: "/videos" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch for isActive highlighting
  useEffect(() => setMounted(true), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 sticky top-0 z-40 border-b border-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="lapsleep home" className="flex items-center gap-2">
              <picture>
                <source srcSet="/brand/lapsleep-logo-dark.svg" media="(prefers-color-scheme: dark)" />
                <img src="/brand/lapsleep-logo.svg" alt="lapsleep logo" className="h-8 w-auto" />
              </picture>
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 text-sm">
            {NAV_LINKS.map((link) => {
              const active = mounted && isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-md px-3 py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 hover:text-blue-700 hover:bg-blue-50 ${active ? "text-blue-700 bg-blue-50" : "text-gray-700"}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
          >
            <span aria-hidden>☰</span>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={`md:hidden origin-top transition-all duration-200 ease-out ${open ? "opacity-100 scale-y-100" : "pointer-events-none opacity-0 scale-y-95"
            }`}
        >
          <ul className="pb-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const active = mounted && isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-3 py-2 transition-colors hover:bg-gray-50 ${active ? "text-blue-700" : "text-gray-700"}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

