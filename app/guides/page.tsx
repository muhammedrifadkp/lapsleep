import guides from "@/data/guides.json";
import { GuideCard } from "@/components/cards";

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Sleep Guides</h1>
      <p className="text-gray-600 mt-2">Practical advice and gentle methods for better baby sleep.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((g) => (
          <GuideCard key={g.id} guide={g} />
        ))}
      </div>
    </main>
  );
}

