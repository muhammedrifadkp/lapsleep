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
      "https://i.ytimg.com/vi/vnrLnFbie7M/sddefault.jpg",
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
      "https://images.ctfassets.net/2ql69mthp94m/1EWzsCfSnGwfvteIchuoz9/97f000e01b045d86958afedc65d0458a/Establish_a_Bedtime_Routine.jpg",
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
      "https://babysleepconsultant.co/cdn/shop/articles/routine_post_1080x.png?v=1608668164",
    categories: [
      { kind: "topic", label: "naps" },
      { kind: "age", label: "6–12 months" },
    ],
  },
  {
    id: "g4",
    title: "Sleep Regression Survival Guide",
    slug: "sleep-regression-guide",
    excerpt: "Navigate the 4-month, 8-month, and 12-month sleep regressions with confidence.",
    content:
      "Sleep regressions are temporary but challenging. Learn what causes them and gentle strategies to help your baby (and you) get through them.",
    coverImage:
      "https://nurtureparenting.com.au/cdn/shop/articles/11084f9a0569e08dd4b83bf072fe74e5_1080x.jpg?v=1644490542",
    categories: [
      { kind: "topic", label: "regressions" },
      { kind: "age", label: "3–6 months" },
    ],
  },
  {
    id: "g5",
    title: "Safe Sleep Guidelines for New Parents",
    slug: "safe-sleep-guidelines",
    excerpt: "Essential safety tips for creating a secure sleep environment for your baby.",
    content:
      "Follow AAP guidelines for safe sleep: back sleeping, firm mattress, empty crib, and proper room temperature for SIDS prevention.",
    coverImage:
      "https://www.aap.org/globalassets/campaigns--toolkits/safe-sleep/infographic-1.png",
    categories: [
      { kind: "topic", label: "safe sleep" },
      { kind: "age", label: "0–3 months" },
    ],
  },
  {
    id: "g6",
    title: "Transitioning from Bassinet to Crib",
    slug: "bassinet-to-crib-transition",
    excerpt: "Make the move from bassinet to crib smooth and stress-free.",
    content:
      "When and how to transition your baby to their own room and crib. Tips for maintaining good sleep habits during the change.",
    coverImage:
      "https://www.cradlewise.com/blog-static/_next/image?url=https%3A%2F%2Fs3.us-west-1.amazonaws.com%2Fassets.cradlewise.com%2Fwp-content%2Fuploads%2F2023%2F03%2FWhen-and-how-to-go-from-bassinet-to-crib-mode.png&w=1920&q=75",
    categories: [
      { kind: "topic", label: "bedtime" },
      { kind: "age", label: "3–6 months" },
    ],
  },
];

export { guides };
export default guides;

