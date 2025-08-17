"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void; }) {
  return (
    <html>
      <body>
        <div className="min-h-screen grid place-items-center p-6">
          <div className="max-w-lg w-full border border-gray-200 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="text-gray-600 mt-2">{error?.message || "An unexpected error occurred."}</p>
            {error?.digest ? (
              <p className="text-xs text-gray-400 mt-1">Error ID: {error.digest}</p>
            ) : null}
            <button
              onClick={() => reset()}
              className="mt-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

