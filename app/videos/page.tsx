"use client";
import videosData, { type VideoItem, type VideoTopic } from "@/data/videos";
import { VideoCard } from "@/components/cards";
import { useMemo, useState } from "react";

const TOPICS: ("All" | VideoTopic)[] = ["All", "swaddling", "routine", "environment", "safety"];

export default function VideosPage() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("All");

  const filtered: VideoItem[] = useMemo(() => {
    return videosData.filter((v) => (topic === "All" ? true : v.topics?.includes(topic)));
  }, [topic]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Videos</h1>
      <p className="text-gray-600 mt-2">Short, helpful videos on baby sleep and routines.</p>

      {/* Topic filter */}
      <div className="mt-6 flex flex-wrap gap-2">
        {TOPICS.map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={`rounded-full border px-3 py-1 text-sm ${topic === t ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 hover:bg-gray-50"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <div key={v.id} className="group">
            <VideoCard video={v} />
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span className="inline-flex gap-1">
                {v.topics?.slice(0, 2).map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5">{t}</span>
                ))}
              </span>
              {v.duration ? <span>{v.duration}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

