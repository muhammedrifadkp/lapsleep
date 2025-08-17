import videos from "@/data/videos.json";
import { notFound } from "next/navigation";

function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export default function VideoDetail({ params }: { params: { slug: string } }) {
  const video = videos.find((v) => v.slug === params.slug);
  if (!video) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">{video.title}</h1>
      <p className="text-gray-600 mt-2">{video.description}</p>
      <div className="mt-6">
        {video.platform === "youtube" && video.videoId ? (
          <YouTubeEmbed id={video.videoId} />
        ) : (
          <div className="aspect-video rounded-xl bg-gray-100 grid place-items-center text-gray-500">
            Video coming soon
          </div>
        )}
      </div>
    </main>
  );
}

