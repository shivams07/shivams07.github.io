import { profile } from '../content/profile'
import { UiIcon } from './icons'
import styles from './Footer.module.css'

function backToTop() {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true })
}

export function Footer({ tone }: { tone: 'light' | 'dark' }) {
  return (
    <footer className={styles.footer} data-tone={tone}>
      <div className={styles.top}>
        <p className={styles.tagline}>{profile.footerTagline}</p>
        <button type="button" className={styles.toTop} onClick={backToTop} aria-label="Back to top">
          <UiIcon name="arrow-curve" />
        </button>
      </div>
      <p className={styles.wordmark} aria-hidden="true">
        {profile.name}
      </p>
      <p className="visually-hidden">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
