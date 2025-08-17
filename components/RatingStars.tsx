import React from "react";

export default function RatingStars({ value, outOf = 5, className = "" }: { value?: number; outOf?: number; className?: string }) {
  const v = Math.max(0, Math.min(outOf, Math.round((value ?? 0) * 2) / 2)); // round to 0.5
  const stars = Array.from({ length: outOf });
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Rating ${v} out of ${outOf}`}>
      {stars.map((_, i) => {
        const full = i + 1 <= v;
        const half = !full && i + 0.5 === v;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${full ? "text-yellow-500" : half ? "text-yellow-500" : "text-gray-300"}`}
            aria-hidden
            fill={full ? "currentColor" : half ? "url(#half)" : "currentColor"}
          >
            {half && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.168L12 18.896l-7.336 3.868 1.402-8.168L.132 9.21l8.2-1.192z" />
          </svg>
        );
      })}
    </div>
  );
}

