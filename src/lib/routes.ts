export type HomeSectionId = 'profile' | 'projects' | 'career'
export type ProjectDetailView = 'detail' | 'gallery'

export type AppRoute =
  | { type: 'home'; section?: HomeSectionId }
  | { type: 'project-detail'; slug: string; view?: ProjectDetailView }

function stripHash(hash: string) {
  return hash.replace(/^#/, '')
}

export function parseAppRoute(hash: string): AppRoute {
  const clean = stripHash(hash).trim()

  if (!clean || clean === '/') {
    return { type: 'home' }
  }

  const [base, slug, view] = clean.split('/').filter(Boolean)

  if (base === 'projects' && slug) {
    const decodedView = view === 'gallery' ? 'gallery' : undefined
    return { type: 'project-detail', slug: decodeURIComponent(slug), view: decodedView }
  }

  if (base === 'profile' || base === 'projects' || base === 'career') {
    return { type: 'home', section: base }
  }

  return { type: 'home' }
}

export function getProjectDetailHash(slug: string, view?: ProjectDetailView) {
  const encodedSlug = encodeURIComponent(slug)
  return view === 'gallery' ? `#/projects/${encodedSlug}/gallery` : `#/projects/${encodedSlug}`
}

export function getHomeHash(section?: HomeSectionId) {
  return section ? `#/${section}` : '#/'
}
