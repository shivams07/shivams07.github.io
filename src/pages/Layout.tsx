import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { DockNav } from '../components/DockNav'

export function Layout() {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <Outlet />
      <DockNav />
      <ScrollRestoration getKey={(location) => (location.key === 'default' ? location.pathname : location.key)} />
    </>
  )
}
