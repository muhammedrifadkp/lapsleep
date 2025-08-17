import articles from "@/data/articles.json";
import { GuideCard } from "@/components/cards";

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Articles</h1>
      <p className="text-gray-600 mt-2">Baby care information and helpful articles.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <GuideCard key={a.id} guide={a as any} hrefBase="/articles" />
        ))}
      </div>
    </main>
  );
}

