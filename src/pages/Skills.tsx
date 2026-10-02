import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { PageHeader } from '../components/PageHeader'
import { SkillGrid } from '../components/SkillGrid'
import pages from '../content/pages.json'
import { profile } from '../content/profile'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './Skills.module.css'

export function Skills() {
  usePageMeta(pages.skills.title, pages.skills.description)
  return (
    <div className={styles.page}>
      <main>
        <PageHeader variant="skills" title={profile.skillsPage.heading} />
        <section className={`container ${styles.grid}`} aria-labelledby="skills-grid-heading">
          <h2 id="skills-grid-heading" className="visually-hidden">
            Skills
          </h2>
          <SkillGrid groups={profile.skills} />
        </section>
        <ContactSection tone="dark" />
      </main>
      <Footer tone="light" />
    </div>
  )
}
