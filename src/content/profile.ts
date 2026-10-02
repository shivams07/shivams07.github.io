import type { Profile } from './types'

export const profile: Profile = {
  name: 'Shivam Singh',
  role: 'Full Stack Developer',
  topBarStatement: 'Full Stack Developer specialising in AI — building products end to end.',
  hero: {
    headline: [
      [{ text: 'Building ' }, { text: 'Intelligent', highlight: true }],
      [{ text: 'products, ' }, { text: 'end to end.', highlight: true }],
    ],
    blurb:
      'Full Stack Developer in Mumbai, specialising in AI. I build products from the database to the interface — Java and Node.js services, React and Next.js frontends, and LLM features that do real work.',
    featured: { label: 'Featured — Estate Ease, an AI real-estate platform', href: 'https://estate-ease-web.vercel.app' },
  },
  about: {
    lead: 'I build full-stack products with AI at the core — from the data model and API to the interface people actually use.',
    detail:
      "Six years across BFSI and SaaS, shipping Java, Spring Boot and Node.js services and React, Vue and Next.js frontends. My focus now is AI that's grounded in real data: semantic search, LLM insights and agent tooling. Estate Ease is where it all comes together.",
  },
  works: {
    heading: 'Selected Work',
    caption: "A FEW THINGS I'VE DESIGNED AND BUILT — FROM AI PRODUCTS TO DEVELOPER TOOLING.",
  },
  skillsPage: { heading: 'Skills I build with' },
  projectsPage: { heading: "Selected projects — products, tools and experiments I've designed and built." },
  contact: {
    kicker: "That's all for now.",
    lines: ['Got a project in mind?', 'Let’s talk'],
    email: 'singhshivamrakesh07@gmail.com',
    linkedin: { href: 'https://www.linkedin.com/in/shivam-singh07', label: 'linkedin.com/in/shivam-singh07' },
    github: { href: 'https://github.com/shivams07', label: 'github.com/shivams07' },
  },
  cv: { href: '/Shivam_Singh_CV_2026.pdf', fileName: 'Shivam_Singh_CV_2026.pdf', meta: 'PDF, 88 KB' },
  footerTagline: 'Full Stack Developer · AI',
  projects: [
    {
      id: 'estate-ease',
      name: 'Estate Ease',
      badge: 'Featured · AI',
      summary:
        'AI real-estate platform: conversational home search with embedding-based matching, curated recommendations, and Claude-powered insight on any listing or neighbourhood. Full stack: Next.js app, Express API, Postgres, real-time updates and payments.',
      stack: ['Next.js 15', 'Express', 'TypeScript', 'Claude API', 'Embeddings', 'PostgreSQL', 'Redis'],
      links: [{ label: 'Live site', href: 'https://estate-ease-web.vercel.app' }],
      cover: { kind: 'image', src: '/covers/estate-ease.jpg' },
    },
    {
      id: 'nomi',
      name: 'Nomi',
      summary:
        'iOS expense tracker for India: email and UPI ingestion, CSV/XLSX import, rules, budgets and reports, with no backend.',
      stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit'],
      links: [{ label: 'Code', href: 'https://github.com/shivams07/nomi-ios' }],
      cover: { kind: 'nomi' },
    },
    {
      id: 'crafx-studio',
      name: 'Crafx Studio website',
      summary: 'Studio website for brand, web and motion work: featured work, services, testimonials, a shop and a contact flow.',
      stack: ['Next.js', 'TypeScript', 'CSS'],
      links: [{ label: 'Live site', href: 'https://crafx-studio-app.vercel.app' }],
      cover: { kind: 'image', src: '/covers/crafx-studio.jpg' },
    },
    {
      id: 'figma-to-code',
      name: 'figma-to-code',
      summary: "Open-source Agent Skill that turns a Figma file into an exact CSS spec plus a register of the file's defects.",
      stack: ['Agent Skill', 'Figma MCP', 'Markdown'],
      links: [{ label: 'Code', href: 'https://github.com/shivams07/figma-to-code' }],
      cover: { kind: 'figma-to-code' },
    },
  ],
  skills: [
    {
      id: 'ai',
      title: 'AI engineering',
      description:
        'LLM features grounded in real data: semantic search, generated insights and agent tooling, shipped in Estate Ease and figma-to-code.',
      column: 1,
      featured: true,
      items: [
        { label: 'Claude', brand: 'claude' },
        { label: 'Claude API integration' },
        { label: 'Embeddings & semantic search' },
        { label: 'Prompt design' },
        { label: 'AI agents & skills' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      description: 'Services and APIs built to stay up: Java and Spring Boot for scale, Node.js and Express for product speed.',
      column: 1,
      items: [
        { label: 'Java', brand: 'openjdk' },
        { label: 'Spring Boot', brand: 'springboot' },
        { label: 'Node.js', brand: 'nodedotjs' },
        { label: 'Express', brand: 'express' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases',
      description: 'Relational and document stores, modelled for the queries that matter.',
      column: 1,
      items: [
        { label: 'PostgreSQL', brand: 'postgresql' },
        { label: 'MongoDB', brand: 'mongodb' },
        { label: 'Oracle DB', monogram: 'OR' },
        { label: 'Redis', brand: 'redis' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Fast, accessible interfaces in React and Next.js, with Vue where the product already lives.',
      column: 2,
      items: [
        { label: 'React', brand: 'react' },
        { label: 'Next.js', brand: 'nextdotjs' },
        { label: 'Vue.js', brand: 'vuedotjs' },
        { label: 'TypeScript', brand: 'typescript' },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile',
      description: 'Native iOS with SwiftUI and SwiftData, offline-first and synced through CloudKit.',
      column: 2,
      items: [{ label: 'Swift', brand: 'swift' }, { label: 'SwiftUI' }, { label: 'SwiftData' }, { label: 'CloudKit' }],
    },
    {
      id: 'observability',
      title: 'Observability',
      description: 'Logs, metrics and traces to find the real cause fast.',
      column: 2,
      items: [
        { label: 'Splunk', brand: 'splunk' },
        { label: 'Grafana', brand: 'grafana' },
        { label: 'Kibana', brand: 'kibana' },
        { label: 'AppDynamics', monogram: 'AD' },
      ],
    },
    {
      id: 'tools',
      title: 'Developer tools',
      description: 'The daily kit, from editor to container.',
      column: 2,
      items: [
        { label: 'Git', brand: 'git' },
        { label: 'Docker', brand: 'docker' },
        { label: 'IntelliJ IDEA', brand: 'intellijidea' },
        { label: 'VS Code', monogram: 'VS' },
      ],
    },
    {
      id: 'practices',
      title: 'Practices',
      description: 'Running production well: incidents handled, causes found, changes shipped safely.',
      column: 3,
      items: [{ label: 'Incident Management' }, { label: 'Problem Management' }, { label: 'RCA' }, { label: 'Change Management' }],
    },
    {
      id: 'certifications',
      title: 'Certifications',
      description: 'Formal grounding in cloud, service management and core stacks.',
      column: 3,
      items: [{ label: 'Azure Fundamentals (AZ-900)' }, { label: 'ITIL' }, { label: 'React' }, { label: 'Java In-Depth' }],
    },
    {
      id: 'recognition',
      title: 'Recognition',
      description: 'Awards for impact, ownership and teamwork.',
      column: 3,
      items: [
        { label: 'Spot Award · Q1 2026' },
        { label: 'Most Valuable Player · 2025' },
        { label: 'Rising Star · 2023' },
        { label: 'Team Player · 2022' },
        { label: 'Pat on the Back · 2021' },
      ],
    },
    {
      id: 'education',
      title: 'Education',
      description: 'B.Sc. Information Technology, Ramniranjan Jhunjhunwala College, Mumbai. 9.7/10, 2017–2020.',
      column: 3,
      items: [],
    },
  ],
}
