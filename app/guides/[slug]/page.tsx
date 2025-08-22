import guides from "@/data/guides.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 prose prose-slate">
      <h1>{guide.title}</h1>
      <p className="text-base text-slate-600">{guide.excerpt}</p>
      <Image src={guide.coverImage} alt="cover" className="rounded-xl" />
      <p>{guide.content}</p>
    </main>
  );
}

