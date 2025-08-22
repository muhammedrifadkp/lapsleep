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
    thumbnail: "https://sundayhug.com/cdn/shop/articles/swaddling-a-baby-101-what-you-need-to-know-506791.jpg?v=1679666560",
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
    thumbnail: "https://www.sleepfoundation.org/wp-content/uploads/2020/09/Children-and-Sleep-1024x614.png",
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
    thumbnail: "https://www.newportchildren.com/wp-content/uploads/Creating-the-Perfect-Sleep-Setup-for-Your-Babys-Safety-and-Comfort.jpeg",
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
    thumbnail: "https://drsunnyclinic.com/wp-content/uploads/2023/06/Safe-Sleep-Tips-for-Infants-B.jpg",
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
    thumbnail: "https://i.ytimg.com/vi/KdlGFcdFtIM/maxresdefault.jpg",
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
    thumbnail: "https://i.ytimg.com/vi/fMlk6KFO7DM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgrq2D_VS-uNuFMKQ3wJKG_THORA",
    description: "Understanding your newborn's natural sleep cycles and needs.",
    duration: "7:12",
    topics: ["routine", "environment"],
  },
];

export { videos };
export type { VideoTopic };
export default videos;

