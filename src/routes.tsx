import type { RouteObject } from 'react-router'
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <Projects /> },
      { path: '*', element: <Home /> },
    ],
  },
]
