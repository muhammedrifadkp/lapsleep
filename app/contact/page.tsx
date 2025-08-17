"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo-only: pretend to send
    setStatus("Thanks! We’ll get back to you soon.");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="prose prose-slate">
        <h1>Contact Us</h1>
        <p>
          Questions or feedback? Email us at
          {" "}
          <a href="mailto:hello@lapsleep.com">hello@lapsleep.com</a>
          {" "}
          or use the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input id="name" name="name" required className="rounded-md border border-gray-200 px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="rounded-md border border-gray-200 px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} required className="rounded-md border border-gray-200 px-3 py-2" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">We typically respond within 1–2 business days.</p>
          <button className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">Send</button>
        </div>
        {status && <p className="text-green-700 text-sm">{status}</p>}
      </form>

      <div className="mt-10 grid gap-2 text-sm text-gray-600">
        <p><strong>Other contacts:</strong> Instagram, WhatsApp, or our community forum (coming soon).</p>
        <p>Location: Remote team across time zones.</p>
      </div>
    </main>
  );
}

