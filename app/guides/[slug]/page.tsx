import guides from "@/data/guides.json";
import { notFound } from "next/navigation";

export default function GuideDetail({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 prose prose-slate">
      <h1>{guide.title}</h1>
      <p className="text-base text-slate-600">{guide.excerpt}</p>
      <img src={guide.coverImage} alt="cover" className="rounded-xl" />
      <p>{guide.content}</p>
    </main>
  );
}

