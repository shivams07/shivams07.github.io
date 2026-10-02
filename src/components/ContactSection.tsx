import { profile } from '../content/profile'
import styles from './ContactSection.module.css'

export function ContactSection({ tone }: { tone: 'light' | 'dark' }) {
  const { contact } = profile
  const mailto = `mailto:${contact.email}`
  return (
    <section className={styles.contact} data-tone={tone} aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.kicker}>{contact.kicker}</p>
          <h2 id="contact-heading" className={styles.heading}>
            <span className={styles.line}>{contact.lines[0]}</span>{' '}
            <span className={styles.line}>{contact.lines[1]}</span>
          </h2>
        </div>
        <div className={styles.dividerRow}>
          <hr className={styles.divider} />
          <a className={styles.cta} href={mailto}>
            Get in touch
          </a>
        </div>
        <dl className={styles.fields}>
          <div className={styles.field}>
            <dt>Email</dt>
            <dd>
              <a href={mailto}>{contact.email}</a>
            </dd>
          </div>
          <div className={styles.field}>
            <dt>LinkedIn</dt>
            <dd>
              <a href={contact.linkedin.href} target="_blank" rel="noreferrer">
                {contact.linkedin.label}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
