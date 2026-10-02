import { NavLink } from 'react-router'
import { profile } from '../content/profile'
import { UiIcon, type UiIconName } from './icons'
import styles from './DockNav.module.css'

const PAGES: Array<{ to: string; label: string; icon: UiIconName; end: boolean }> = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/skills', label: 'Skills', icon: 'skills', end: false },
  { to: '/projects', label: 'Projects', icon: 'projects', end: false },
]

export function DockNav() {
  const { cv, contact } = profile
  return (
    <nav className={styles.dock} aria-label="Primary">
      {PAGES.map((page) => (
        <NavLink
          key={page.to}
          to={page.to}
          end={page.end}
          aria-label={page.label}
          title={page.label}
          className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
        >
          <UiIcon name={page.icon} />
        </NavLink>
      ))}
      <a className={styles.item} href={cv.href} download={cv.fileName} aria-label={`Download CV (${cv.meta})`} title="Download CV">
        <UiIcon name="cv" />
      </a>
      <a className={styles.item} href={contact.github.href} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
        <UiIcon name="github" />
      </a>
      <a className={styles.item} href={contact.linkedin.href} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <UiIcon name="linkedin" />
      </a>
      <a className={styles.item} href={`mailto:${contact.email}`} aria-label="Email" title="Email">
        <UiIcon name="mail" />
      </a>
    </nav>
  )
}
