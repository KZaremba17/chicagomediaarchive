// components/Header.tsx
// Uses Next.js <Image fill> to preserve aspect ratio (no squishing)
// Make sure your logo file exists at: /public/logo-cma-square.png

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: '1px solid #eee',
        padding: '10px 16px'
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Link href="/" aria-label="Chicago Media Archive — home" style={{ display: 'inline-flex' }}>
          {/* Wrapper must be position:relative with explicit size for <Image fill> */}
          <span
            style={{
              position: 'relative',
              width: 160,   // adjust to taste (e.g., 140–200)
              height: 64    // controls visual height; image scales to fit without distortion
            }}
          >
            <Image
              src="/logo-cma-square.png" // <-- put your PNG here
              alt="Chicago Media Archive"
              fill
              priority
              style={{ objectFit: 'contain' }} // keep proportions, no crop
              sizes="160px" // hint for responsive loading; update if you change width
            />
          </span>
        </Link>
      </div>
    </header>
  )
}