import videos from "@/data/videos.json";
import { VideoCard } from "@/components/cards";

export default function VideosPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Videos</h1>
      <p className="text-gray-600 mt-2">Short, helpful videos on baby sleep and routines.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </main>
  );
}

