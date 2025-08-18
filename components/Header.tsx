// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[1000] bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo (links to homepage by default via Next.js Link if needed) */}
        <div className="relative h-12 w-12">
          <Link href="/" aria-label="Chicago Media Archive Home">
            <Image
              src="/logo.png"
              alt="Chicago Media Archive"
              fill
              priority
              sizes="48px"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-sm font-medium">
          <Link
            href="https://www.chicagomediaarchive.com/books-set-in-chicago"
            className="hover:underline"
          >
            Books
          </Link>
          <Link
            href="https://www.chicagomediaarchive.com/movies-set-in-chicago"
            className="hover:underline"
          >
            Movies
          </Link>
          <Link
            href="https://www.chicagomediaarchive.com/tv-series-set-in-chicago"
            className="hover:underline"
          >
            TV Shows
          </Link>
          <Link
            href="https://www.chicagomediaarchive.com/music-inspired-by-chicago"
            className="hover:underline"
          >
            Music
          </Link>
        </nav>
      </div>
    </header>
  );
}