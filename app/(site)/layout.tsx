export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-[calc(100vh-8rem)]">{children}</div>;
}

