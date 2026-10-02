import styles from './NeonGlow.module.css'

export function NeonGlow() {
  return (
    <div className={styles.glow} data-glow aria-hidden="true">
      <span className={`${styles.blob} ${styles.a}`} data-blob />
      <span className={`${styles.blob} ${styles.b}`} data-blob />
      <span className={`${styles.blob} ${styles.c}`} data-blob />
    </div>
  )
}
