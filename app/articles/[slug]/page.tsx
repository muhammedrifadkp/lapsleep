import articles from "@/data/articles.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 prose prose-slate">
      <h1>{article.title}</h1>
      <p className="text-base text-slate-600">{article.excerpt}</p>
      {article.coverImage ? (
        <Image src={article.coverImage} alt="cover" className="rounded-xl" />
      ) : null}
      <p>{article.content}</p>
    </main>
  );
}

