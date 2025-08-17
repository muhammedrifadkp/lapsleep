import Link from "next/link";
import { Product, Guide, Video, Article } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="block border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
      <div className="aspect-square bg-gray-50 bg-center bg-cover" style={{ backgroundImage: `url(${product.images[0] || "/placeholder.svg"})` }} />
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export function GuideCard({ guide, hrefBase = "/guides" }: { guide: Guide; hrefBase?: string }) {
  return (
    <Link href={`${hrefBase}/${guide.slug}`} className="block border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
      <div className="aspect-[16/9] bg-gray-50 bg-center bg-cover" style={{ backgroundImage: `url(${guide.coverImage || "/placeholder.svg"})` }} />
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{guide.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{guide.excerpt}</p>
      </div>
    </Link>
  );
}

export function VideoCard({ video }: { video: Video }) {
  return (
    <Link href={`/videos/${video.slug}`} className="block border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
      <div className="aspect-[16/9] bg-gray-50 bg-center bg-cover" style={{ backgroundImage: `url(${video.thumbnail || "/placeholder.svg"})` }} />
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{video.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{video.description}</p>
      </div>
    </Link>
  );
}

