/* eslint-disable simple-import-sort/imports */
import cs from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './TopNav.module.css'

type NavLink = { href: string; label: string; match?: 'exact' | 'startsWith' }

const NAV_LINKS: NavLink[] = [
  { href: '/books-set-in-chicago', label: 'Books' },
  { href: '/movies-set-in-chicago', label: 'Movies' },
{ href: '/tv-series-set-in-chicago', label: 'TV Shows' },
  { href: '/music-inspired-by-chicago', label: 'Music' },
  // { href: '/tv-shows-set-in-chicago', label: 'TV Shows' },
  // { href: '/albums-set-in-chicago', label: 'Albums' },
]

export default function TopNav() {
  const { asPath } = useRouter()

  // Always produce a definite string and avoid array indexing (strict TS safe)
  const fullPath = typeof asPath === 'string' ? asPath : ''
  const qIndex = fullPath.indexOf('?')
  const safePath: string = qIndex === -1 ? fullPath : fullPath.slice(0, qIndex)

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