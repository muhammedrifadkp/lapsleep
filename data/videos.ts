import type { Video } from "@/types";

type VideoTopic = "swaddling" | "routine" | "environment" | "safety";

export type VideoItem = Video & { topics?: VideoTopic[]; duration?: string };

const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Swaddling 101",
    slug: "swaddling-101",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    description: "Learn how to swaddle safely and effectively.",
    duration: "4:21",
    topics: ["swaddling", "safety"],
  },
  {
    id: "v2",
    title: "Bedtime Routine Demo",
    slug: "bedtime-routine-demo",
    platform: "youtube",
    videoId: "M7lc1UVf-VE",
    thumbnail: "https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
    description: "A calm, simple routine to wind down.",
    duration: "6:02",
    topics: ["routine"],
  },
  {
    id: "v3",
    title: "Setting Up the Sleep Environment",
    slug: "sleep-environment",
    platform: "youtube",
    videoId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
    description: "Dark room, cool temps, white noise: how to get the basics right.",
    duration: "3:45",
    topics: ["environment", "routine"],
  },
];

export { videos };
export type { VideoTopic };
export default videos;

