import { About } from '../components/About'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { PillLink } from '../components/PillLink'
import { ProjectGrid } from '../components/ProjectGrid'
import pages from '../content/pages.json'
import { profile } from '../content/profile'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './Home.module.css'

export function Home() {
  usePageMeta(pages.home.title, pages.home.description)
  return (
    <>
      <main>
        <Hero />
        <About />
        <section className={`container ${styles.works}`} aria-labelledby="works-heading">
          <div className={styles.worksHeader}>
            <h2 id="works-heading" className={styles.worksHeading}>
              {profile.works.heading}
            </h2>
            <p className={styles.worksCaption}>{profile.works.caption}</p>
          </div>
          <ProjectGrid projects={profile.projects} variant="compact" />
          <div className={styles.explore}>
            <PillLink to="/projects" variant="outline" dot>
              Explore more
            </PillLink>
          </div>
        </section>
        <ContactSection tone="light" />
      </main>
      <Footer tone="dark" />
    </>
  )
}
