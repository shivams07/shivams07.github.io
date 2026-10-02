import type { Project, ProjectCover } from '../content/types'
import { FigmaToCodeCover } from './covers/FigmaToCodeCover'
import { NomiCover } from './covers/NomiCover'
import { UiIcon } from './icons'
import { PillLink } from './PillLink'
import styles from './ProjectCard.module.css'

function Cover({ cover, priority }: { cover: ProjectCover; priority?: boolean }) {
  switch (cover.kind) {
    case 'image':
      return (
        <img
          className={styles.coverImg}
          src={cover.src}
          alt=""
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      )
    case 'nomi':
      return <NomiCover />
    case 'figma-to-code':
      return <FigmaToCodeCover />
  }
}

export function ProjectCard({
  project,
  variant,
  priority,
}: {
  project: Project
  variant: 'compact' | 'expanded'
  priority?: boolean
}) {
  const [primary] = project.links
  const titleId = `${project.id}-title`
  return (
    <article className={styles.card} aria-labelledby={titleId}>
      <a className={styles.main} href={primary.href} target="_blank" rel="noreferrer">
        <div className={styles.cover}>
          <Cover cover={project.cover} priority={priority} />
          {project.badge && <span className={styles.badge}>{project.badge}</span>}
        </div>
        <div className={styles.titleRow}>
          <span className={styles.arrow}>
            <UiIcon name="circle-arrow" size={48} />
          </span>
          <h3 id={titleId} className={styles.title}>
            {project.name}
          </h3>
          <span className="visually-hidden"> (opens in a new tab)</span>
        </div>
      </a>
      {variant === 'expanded' && (
        <div className={styles.details}>
          <p className={styles.summary}>{project.summary}</p>
          <ul className={styles.stack} aria-label={`${project.name} tech stack`}>
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className={styles.links}>
            {project.links.map((link) => (
              <PillLink key={link.href} href={link.href} newTab variant="outline" icon="arrow-up-right">
                {link.label}
              </PillLink>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
