import type { Project } from '../content/types'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import styles from './ProjectGrid.module.css'

export function ProjectGrid({
  projects,
  variant,
  priorityFirst,
}: {
  projects: Project[]
  variant: 'compact' | 'expanded'
  priorityFirst?: boolean
}) {
  return (
    <ul className={styles.grid}>
      {projects.map((project, index) => (
        <li key={project.id}>
          <Reveal>
            <ProjectCard project={project} variant={variant} priority={priorityFirst && index === 0} />
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
