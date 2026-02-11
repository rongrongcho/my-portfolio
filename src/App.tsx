import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import { getHomeHash, parseAppRoute, type AppRoute } from './lib/routes'
import './App.css'

function App() {
  const [route, setRoute] = useState<AppRoute>(() => parseAppRoute(window.location.hash))

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = getHomeHash()
    }

    const onHashChange = () => {
      setRoute(parseAppRoute(window.location.hash))
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  if (route.type === 'project-detail') {
    return <ProjectDetailPage slug={route.slug} />
  }

  return <HomePage initialSection={route.section} />
}

export default App
