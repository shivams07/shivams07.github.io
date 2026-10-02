import type { ReactNode } from 'react'
import {
  siClaude,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siGrafana,
  siIntellijidea,
  siKibana,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siReact,
  siRedis,
  siSplunk,
  siSpringboot,
  siSwift,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from 'simple-icons'
import type { BrandKey } from '../content/types'

export type UiIconName =
  | 'home'
  | 'skills'
  | 'projects'
  | 'cv'
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'download'
  | 'arrow-curve'
  | 'circle-arrow'
  | 'circle-up-right'

const UI_PATHS: Record<UiIconName, ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  skills: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  projects: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  cv: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  github: <path d={siGithub.path} fill="currentColor" stroke="none" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  download: <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />,
  'arrow-curve': (
    <>
      <path d="m14 5 5 5-5 5" />
      <path d="M19 10H8a3 3 0 0 0-3 3v6" />
    </>
  ),
  'circle-arrow': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M13 9l3 3-3 3" />
    </>
  ),
  'circle-up-right': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9.5 14.5 5-5M10 9.5h4.5V14" />
    </>
  ),
}

export function UiIcon({ name, size = 24 }: { name: UiIconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {UI_PATHS[name]}
    </svg>
  )
}

const BRANDS: Record<BrandKey, SimpleIcon> = {
  claude: siClaude,
  openjdk: siOpenjdk,
  springboot: siSpringboot,
  nodedotjs: siNodedotjs,
  express: siExpress,
  react: siReact,
  nextdotjs: siNextdotjs,
  vuedotjs: siVuedotjs,
  typescript: siTypescript,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  redis: siRedis,
  swift: siSwift,
  splunk: siSplunk,
  grafana: siGrafana,
  kibana: siKibana,
  git: siGit,
  docker: siDocker,
  intellijidea: siIntellijidea,
}

/** Brand hex → fill colour; near-black brands become white so they read on the #141414 tiles. */
export function brandColor(hex: string): string {
  const value = parseInt(hex, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return luminance < 0.3 ? '#FFFFFF' : `#${hex.toUpperCase()}`
}

export function BrandIcon({ brand, size = 50 }: { brand: BrandKey; size?: number }) {
  const icon = BRANDS[brand]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icon.path} fill={brandColor(icon.hex)} />
    </svg>
  )
}
