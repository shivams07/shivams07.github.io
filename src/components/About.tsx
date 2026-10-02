import { Link } from 'react-router'
import { profile } from '../content/profile'
import { UiIcon } from './icons'
import { Reveal } from './Reveal'
import styles from './About.module.css'

export function About() {
  return (
    <section className={`container ${styles.about}`} aria-label="About">
      <Reveal className={styles.row}>
        <p className={styles.lead}>{profile.about.lead}</p>
        <div className={styles.side}>
          <p className={styles.detail}>{profile.about.detail}</p>
          <Link to="/skills" className={styles.link}>
            See my skills
            <UiIcon name="circle-up-right" size={48} />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
