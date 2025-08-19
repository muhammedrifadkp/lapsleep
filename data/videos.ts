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
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
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
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=80",
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
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
    description: "Dark room, cool temps, white noise: how to get the basics right.",
    duration: "3:45",
    topics: ["environment", "routine"],
  },
  {
    id: "v4",
    title: "Baby Sleep Safety Tips",
    slug: "baby-sleep-safety",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?auto=format&fit=crop&w=1600&q=80",
    description: "Essential safety guidelines for peaceful baby sleep.",
    duration: "5:15",
    topics: ["safety", "environment"],
  },
  {
    id: "v5",
    title: "Gentle Sleep Training Methods",
    slug: "gentle-sleep-training",
    platform: "youtube",
    videoId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=80",
    description: "Compassionate approaches to help baby learn independent sleep.",
    duration: "8:30",
    topics: ["routine", "safety"],
  },
  {
    id: "v6",
    title: "Newborn Sleep Patterns Explained",
    slug: "newborn-sleep-patterns",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
    description: "Understanding your newborn's natural sleep cycles and needs.",
    duration: "7:12",
    topics: ["routine", "environment"],
  },
];

export { videos };
export type { VideoTopic };
export default videos;

