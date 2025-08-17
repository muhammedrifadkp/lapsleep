import type { Guide } from "@/types";

export type GuideCategory =
  | { kind: "age"; label: "0–3 months" | "3–6 months" | "6–12 months" }
  | { kind: "topic"; label: "bedtime" | "naps" | "regressions" | "safe sleep" };

const guides: (Guide & { categories: GuideCategory[] })[] = [
  {
    id: "g1",
    title: "Newborn Sleep Basics",
    slug: "newborn-sleep-basics",
    excerpt: "Foundational tips to help your newborn sleep longer and better.",
    content:
      "Getting your newborn to sleep can be challenging. In this guide, we cover safe sleep positions, room temperature, swaddling techniques, and soothing routines.",
    coverImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
    categories: [
      { kind: "age", label: "0–3 months" },
      { kind: "topic", label: "safe sleep" },
    ],
  },
  {
    id: "g2",
    title: "Creating a Calming Bedtime Routine",
    slug: "bedtime-routine",
    excerpt: "A simple routine to signal sleep time: bath, feed, cuddle, bed.",
    content:
      "Consistency is key. Choose 3-4 steps you can repeat nightly. Keep lights low, sounds gentle, and movements slow.",
    coverImage:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
    categories: [
      { kind: "topic", label: "bedtime" },
      { kind: "age", label: "3–6 months" },
    ],
  },
  {
    id: "g3",
    title: "Nap Strategies That Work",
    slug: "nap-strategies",
    excerpt: "Set up the environment and timing to get longer naps.",
    content:
      "Understand wake windows, follow sleepy cues, and create nap‑friendly spaces to improve daytime rest.",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    categories: [
      { kind: "topic", label: "naps" },
      { kind: "age", label: "6–12 months" },
    ],
  },
];

export { guides };
export default guides;

