export type BrandKey =
  | 'langgraph'
  | 'langchain'
  | 'modelcontextprotocol'
  | 'crewai'
  | 'python'
  | 'openjdk'
  | 'springboot'
  | 'nodedotjs'
  | 'express'
  | 'react'
  | 'nextdotjs'
  | 'vuedotjs'
  | 'typescript'
  | 'postgresql'
  | 'mongodb'
  | 'redis'
  | 'swift'
  | 'splunk'
  | 'grafana'
  | 'kibana'
  | 'git'
  | 'docker'
  | 'intellijidea'

/** An item with `brand` or `monogram` renders as an icon tile; otherwise it renders as a chip. */
export interface SkillItem {
  label: string
  brand?: BrandKey
  monogram?: string
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  column: 1 | 2 | 3
  featured?: boolean
  items: SkillItem[]
}

export interface ProjectLink {
  label: 'Live site' | 'Code'
  href: string
}

export type ProjectCover = { kind: 'image'; src: string } | { kind: 'nomi' } | { kind: 'figma-to-code' }

export interface Project {
  id: string
  name: string
  badge?: string
  summary: string
  stack: string[]
  links: [ProjectLink, ...ProjectLink[]]
  cover: ProjectCover
}

export interface HeadlinePart {
  text: string
  highlight?: boolean
}

export interface Profile {
  name: string
  role: string
  topBarStatement: string
  hero: {
    /** One array per visual line. */
    headline: HeadlinePart[][]
    blurb: string
    featured: { label: string; href: string }
  }
  about: { lead: string; detail: string }
  works: { heading: string; caption: string }
  skillsPage: { heading: string }
  projectsPage: { heading: string }
  contact: {
    kicker: string
    lines: [string, string]
    email: string
    linkedin: { href: string; label: string }
    github: { href: string; label: string }
  }
  cv: { href: string; fileName: string; meta: string }
  footerTagline: string
  projects: Project[]
  skills: SkillGroup[]
}
