import React from "react";

const items = [
  {
    title: "Gentle Methods",
    desc: "Evidence‑informed routines that respect your baby’s cues.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600" fill="currentColor" aria-hidden>
        <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" />
      </svg>
    ),
  },
  {
    title: "Curated Products",
    desc: "Tested for comfort, safety, and real‑world value.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600" fill="currentColor" aria-hidden>
        <path d="M3 3h18v4H3zM3 10h18v11H3z" />
      </svg>
    ),
  },
  {
    title: "Practical Guides",
    desc: "Short, actionable tips for tonight and beyond.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600" fill="currentColor" aria-hidden>
        <path d="M4 4h16v16H4zM8 8h8v2H8zM8 12h8v2H8z" />
      </svg>
    ),
  },
];

export default function ValueProps() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <li key={it.title} className="flex items-start gap-3">
          <div className="rounded-md bg-blue-50 p-2">{it.icon}</div>
          <div>
            <h3 className="font-medium text-gray-900">{it.title}</h3>
            <p className="text-gray-600 text-sm">{it.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

