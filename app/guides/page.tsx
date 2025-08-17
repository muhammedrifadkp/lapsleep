"use client";
import guidesData, { type GuideCategory } from "@/data/guides";
import { GuideCard } from "@/components/cards";
import { useMemo, useState } from "react";

const AGE_FILTERS: GuideCategory["label"][] = ["0–3 months", "3–6 months", "6–12 months"];
const TOPIC_FILTERS: GuideCategory["label"][] = ["bedtime", "naps", "regressions", "safe sleep"];

export default function GuidesPage() {
  const [age, setAge] = useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const filtered = useMemo(() => {
    return guidesData.filter((g) => {
      const ageOk = !age || g.categories?.some((c) => c.kind === "age" && c.label === age);
      const topicOk = !topic || g.categories?.some((c) => c.kind === "topic" && c.label === topic);
      return ageOk && topicOk;
    });
  }, [age, topic]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Sleep Guides</h1>
      <p className="text-gray-600 mt-2">Practical advice and gentle methods for better baby sleep.</p>

      {/* Filters */}
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 self-center">Age:</span>
          {["", ...AGE_FILTERS].map((a) => (
            <button
              key={a || "all"}
              onClick={() => setAge(a)}
              className={`rounded-full border px-3 py-1 text-sm ${age === a ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 hover:bg-gray-50"}`}
            >
              {a || "All"}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 self-center">Topic:</span>
          {["", ...TOPIC_FILTERS].map((t) => (
            <button
              key={t || "all"}
              onClick={() => setTopic(t)}
              className={`rounded-full border px-3 py-1 text-sm ${topic === t ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 hover:bg-gray-50"}`}
            >
              {t || "All"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((g) => (
          <GuideCard key={g.id} guide={g} />
        ))}
      </div>
    </main>
  );
}

