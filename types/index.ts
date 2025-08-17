export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: string[]; // paths under public/
  tags: string[];
  category: string;
  rating?: number;
};

export type Guide = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // markdown/plain content
  coverImage?: string;
};

export type Article = Guide;

export type Video = {
  id: string;
  title: string;
  slug: string;
  platform: "youtube" | "vimeo" | "local";
  videoId?: string; // for youtube/vimeo
  url?: string; // for local or direct url
  thumbnail?: string;
  description?: string;
};

