import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-extrabold text-white uppercase tracking-wider">
          My App
        </span>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
          >
            🎵 Bands
          </Link>

          <Link
            href="/game"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
          >
            🎮 Games
          </Link>
        </div>
      </div>
    </nav>
  );
}