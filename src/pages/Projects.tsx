import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { PageHeader } from '../components/PageHeader'
import { ProjectGrid } from '../components/ProjectGrid'
import pages from '../content/pages.json'
import { profile } from '../content/profile'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './Projects.module.css'

export function Projects() {
  usePageMeta(pages.projects.title, pages.projects.description)
  return (
    <>
      <main>
        <PageHeader variant="projects" title={profile.projectsPage.heading} />
        <section className={`container ${styles.grid}`} aria-labelledby="projects-grid-heading">
          <h2 id="projects-grid-heading" className="visually-hidden">
            Projects
          </h2>
          <ProjectGrid projects={profile.projects} variant="expanded" priorityFirst />
        </section>
        <ContactSection tone="light" />
      </main>
      <Footer tone="dark" />
    </>
  )
}
