import type { SkillGroup } from '../content/types'
import { Reveal } from './Reveal'
import { SkillCard } from './SkillCard'
import styles from './SkillGrid.module.css'

const COLUMNS = [1, 2, 3] as const

export function SkillGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className={styles.grid}>
      {COLUMNS.map((column) => (
        <div key={column} className={styles.column} data-column={column}>
          {groups
            .filter((group) => group.column === column)
            .map((group) => (
              <Reveal key={group.id}>
                <SkillCard group={group} />
              </Reveal>
            ))}
        </div>
      ))}
    </div>
  )
}
