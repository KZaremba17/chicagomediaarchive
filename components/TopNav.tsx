import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import cs from 'classnames'
import styles from './TopNav.module.css'

type NavLink = { href: string; label: string; match?: 'exact' | 'startsWith' }

const NAV_LINKS: NavLink[] = [
  { href: '/books-set-in-chicago', label: 'Books' },
  { href: '/movies-set-in-chicago', label: 'Movies' },
  { href: '/music-inspired-by-chicago', label: 'Music' },
  // { href: '/tv-shows-set-in-chicago', label: 'TV Shows' },
  // { href: '/albums-set-in-chicago', label: 'Albums' },
]

export default function TopNav() {
  const { asPath } = useRouter()

  // Always a string, even during SSR
  const safePath: string = useMemo(() => {
    if (typeof asPath === 'string' && asPath.length > 0) {
      return asPath.split('?')[0]
    }
    return ''
  }, [asPath])

  const homeActive = safePath === '/'

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Link
          href="/"
          className={cs(styles.link, homeActive && styles.active)}
          aria-current={homeActive ? 'page' : undefined}
        >
          Home
        </Link>

        {NAV_LINKS.map(({ href, label, match = 'startsWith' }) => {
          const active =
            match === 'exact' ? safePath === href : safePath.startsWith(href)

          return (
            <Link
              key={href}
              href={href}
              className={cs(styles.link, active && styles.active)}
              aria-current={active ? 'page' : undefined}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}