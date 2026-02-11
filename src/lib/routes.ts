export type HomeSectionId = 'profile' | 'projects' | 'career'

export type AppRoute =
  | { type: 'home'; section?: HomeSectionId }
  | { type: 'project-detail'; slug: string }

function stripHash(hash: string) {
  return hash.replace(/^#/, '')
}

export function parseAppRoute(hash: string): AppRoute {
  const clean = stripHash(hash).trim()

  if (!clean || clean === '/') {
    return { type: 'home' }
  }

  const [base, slug] = clean.split('/').filter(Boolean)

  if (base === 'projects' && slug) {
    return { type: 'project-detail', slug: decodeURIComponent(slug) }
  }

  if (base === 'profile' || base === 'projects' || base === 'career') {
    return { type: 'home', section: base }
  }

  return { type: 'home' }
}

export function getProjectDetailHash(slug: string) {
  return `#/projects/${encodeURIComponent(slug)}`
}

export function getHomeHash(section?: HomeSectionId) {
  return section ? `#/${section}` : '#/'
}
