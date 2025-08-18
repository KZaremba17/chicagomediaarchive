// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="relative z-[1000] isolate w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo (square). Ensure /public/logo.png exists. */}
          <Link href="/" aria-label="Chicago Media Archive" className="block">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="Chicago Media Archive"
                fill
                sizes="40px"
                priority
              />
            </div>
          </Link>

          {/* Primary Nav */}
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>
                <Link
                  href="/books-set-in-chicago"
                  className="inline-block px-1 py-1 hover:underline"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/movies-set-in-chicago"
                  className="inline-block px-1 py-1 hover:underline"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/tv-series-set-in-chicago"
                  className="inline-block px-1 py-1 hover:underline"
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/music-inspired-by-chicago"
                  className="inline-block px-1 py-1 hover:underline"
                >
                  Music
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}