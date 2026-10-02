import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { UiIcon, type UiIconName } from './icons'
import styles from './PillLink.module.css'

type Common = { children: ReactNode; variant: 'solid' | 'outline'; icon?: UiIconName; dot?: boolean }
type Internal = Common & { to: string }
type External = Common & { href: string; download?: string; newTab?: boolean }

export function PillLink(props: Internal | External) {
  const className = `${styles.pill} ${styles[props.variant]}`
  const content = (
    <>
      {props.dot && <span className={styles.dot} aria-hidden="true" />}
      <span>{props.children}</span>
      {props.icon && <UiIcon name={props.icon} size={20} />}
    </>
  )
  if ('to' in props) {
    return (
      <Link to={props.to} className={className}>
        {content}
      </Link>
    )
  }
  return (
    <a
      href={props.href}
      className={className}
      download={props.download}
      {...(props.newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {content}
    </a>
  )
}
