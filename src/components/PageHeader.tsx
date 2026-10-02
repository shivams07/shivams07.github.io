import { TopBar } from './TopBar'
import styles from './PageHeader.module.css'

export function PageHeader({ variant, title }: { variant: 'skills' | 'projects'; title: string }) {
  return (
    <section className={styles.header} data-variant={variant} aria-labelledby="page-heading">
      <TopBar tone={variant === 'skills' ? 'dark' : 'light'} />
      <div className={`container ${styles.inner}`}>
        <h1 id="page-heading" className={styles.title} tabIndex={-1}>
          {title}
        </h1>
      </div>
    </section>
  )
}
