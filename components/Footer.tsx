export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-16 text-sm text-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} lapsleep. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="/credits" className="hover:text-blue-600">Image Credits</a>
        </div>
      </div>
    </footer>
  );
}

