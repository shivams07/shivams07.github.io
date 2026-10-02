import type { SkillGroup } from '../content/types'
import { BrandIcon } from './icons'
import styles from './SkillCard.module.css'

export function SkillCard({ group }: { group: SkillGroup }) {
  const tiles = group.items.filter((item) => item.brand || item.monogram)
  const chips = group.items.filter((item) => !item.brand && !item.monogram)
  const titleId = `skill-${group.id}`
  return (
    <article className={styles.card} data-featured={Boolean(group.featured)} aria-labelledby={titleId}>
      {tiles.length > 0 && (
        <ul className={styles.tiles} aria-label={`${group.title} technologies`}>
          {tiles.map((item) => (
            <li key={item.label} className={styles.tile} title={item.label}>
              {item.brand ? (
                <BrandIcon brand={item.brand} />
              ) : (
                <span className={styles.monogram} aria-hidden="true">
                  {item.monogram}
                </span>
              )}
              <span className="visually-hidden">{item.label}</span>
            </li>
          ))}
        </ul>
      )}
      {chips.length > 0 && (
        <ul className={styles.chips} aria-label={`${group.title} topics`}>
          {chips.map((item) => (
            <li key={item.label} className={styles.chip}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.text}>
        <h3 id={titleId} className={styles.title}>
          {group.title}
        </h3>
        <p className={styles.description}>{group.description}</p>
      </div>
    </article>
  )
}
