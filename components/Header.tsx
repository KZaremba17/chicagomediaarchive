// components/Header.tsx
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid #eee",
        padding: "10px 16px"
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Link href="/" aria-label="Chicago Media Archive — home">
          <Image
            src="/logo-cma.png"   // put file in /public/logo-cma.png
            alt="Chicago Media Archive"
            width={140}
            height={40}
            priority
          />
        </Link>
      </div>
    </header>
  )
}
