import { Link } from 'react-router'
import { profile } from '../content/profile'
import styles from './TopBar.module.css'

export function TopBar({ tone }: { tone: 'light' | 'dark' }) {
  return (
    <header className={styles.bar} data-tone={tone}>
      <Link to="/" className={styles.name}>
        {profile.name}
      </Link>
      <p className={styles.statement}>{profile.topBarStatement}</p>
    </header>
  )
}
