import { Fragment } from 'react'
import { profile } from '../content/profile'
import { UiIcon } from './icons'
import { NeonGlow } from './NeonGlow'
import { PillLink } from './PillLink'
import { TopBar } from './TopBar'
import styles from './Hero.module.css'

export function Hero() {
  const { hero, contact, cv } = profile
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <NeonGlow />
      <TopBar tone="light" />
      <ul className={styles.social} aria-label="Social links">
        <li>
          <a href={contact.github.href} target="_blank" rel="noreferrer" aria-label="GitHub">
            <UiIcon name="github" size={20} />
          </a>
        </li>
        <li>
          <a href={contact.linkedin.href} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <UiIcon name="linkedin" size={20} />
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <UiIcon name="mail" size={20} />
          </a>
        </li>
      </ul>
      <div className={`container ${styles.content}`}>
        <h1 id="hero-heading" className={styles.headline} tabIndex={-1}>
          {hero.headline.map((line, lineIndex) => (
            <Fragment key={lineIndex}>
              {lineIndex > 0 && ' '}
              <span className={styles.line}>
                {line.map((part) =>
                  part.highlight ? (
                    <mark key={part.text} className={styles.mark}>
                      {part.text}
                    </mark>
                  ) : (
                    <span key={part.text}>{part.text}</span>
                  ),
                )}
              </span>
            </Fragment>
          ))}
        </h1>
        <p className={styles.blurb}>{hero.blurb}</p>
        <div className={styles.actions}>
          <PillLink href={`mailto:${contact.email}`} variant="solid" icon="arrow-up-right">
            Get in touch
          </PillLink>
          <PillLink href={cv.href} download={cv.fileName} variant="outline" icon="download">
            Download CV<span className="visually-hidden"> ({cv.meta})</span>
          </PillLink>
        </div>
        <a className={styles.featured} href={hero.featured.href} target="_blank" rel="noreferrer">
          <span className={styles.dot} aria-hidden="true" />
          {hero.featured.label}
          <UiIcon name="arrow-up-right" size={18} />
        </a>
      </div>
    </section>
  )
}
