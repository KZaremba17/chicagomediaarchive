// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="relative z-[1000] w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo (square). Ensure /public/logo.png exists. */}
          <Link href="/" aria-label="Chicago Media Archive" className="block shrink-0">
            <div className="relative h-10 w-10">
              <Image
                src="/logo-cma-square.png"
                alt="Chicago Media Archive"
                fill
                sizes="40px"
                priority
              />
            </div>
          </Link>

          {/* Primary Nav (right aligned, horizontal) */}
          <nav aria-label="Primary" className="ml-auto">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-800">
              <li>
                <Link href="/books-set-in-chicago" className="inline-block hover:underline underline-offset-4">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/movies-set-in-chicago" className="inline-block hover:underline underline-offset-4">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv-series-set-in-chicago" className="inline-block hover:underline underline-offset-4">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/music-inspired-by-chicago" className="inline-block hover:underline underline-offset-4">
                  Music
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* On very small screens (≤400px), allow links to drop below neatly */}
        <div className="pb-2 pt-0 md:hidden"></div>
      </div>
    </header>
  );
}