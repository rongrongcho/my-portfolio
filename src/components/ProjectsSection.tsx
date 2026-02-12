import { useMemo, useState } from 'react'
import { getProjectStats, projectSummaries } from '../data/projects/projectDataRepository'
import ProjectCard from './projects/ProjectCard'

type SortOrder = 'latest' | 'oldest'
type ProjectFilter = 'all' | 'company' | 'personal'

const PAGE_SIZE = 3

function ProjectsSection() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('latest')
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all')
  const [page, setPage] = useState(1)
  const { total: totalProjects } = getProjectStats()
  const companyProjects = projectSummaries.filter((project) => project.projectContext === 'company').length
  const personalProjects = projectSummaries.filter((project) => project.projectContext === 'personal').length

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projectFilter === 'all'
      ? projectSummaries
      : projectSummaries.filter((project) => project.projectContext === projectFilter)

    const sorted = [...filtered]
    sorted.sort((a, b) => (sortOrder === 'latest' ? b.id - a.id : a.id - b.id))
    return sorted
  }, [projectFilter, sortOrder])

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedProjects.length / PAGE_SIZE))

  const visibleProjects = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filteredAndSortedProjects.slice(start, start + PAGE_SIZE)
  }, [filteredAndSortedProjects, page])

  return (
    <section id="projects" className="snap-section section projects-section" aria-labelledby="projects-title">
      <div className="section-inner">
        <div className="section-heading-row">
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
            <p>프로젝트</p>
          </div>

          <div className="sort-toggle" role="group" aria-label="Project Sort Order">
            <button
              type="button"
              className={sortOrder === 'latest' ? 'is-active' : ''}
              onClick={() => {
                setSortOrder('latest')
                setPage(1)
              }}
            >
              최신순
            </button>
            <button
              type="button"
              className={sortOrder === 'oldest' ? 'is-active' : ''}
              onClick={() => {
                setSortOrder('oldest')
                setPage(1)
              }}
            >
              오래된 순
            </button>
          </div>
        </div>

        <div className="project-overview project-overview-compact">
          <button
            type="button"
            className={`panel overview-card overview-card-compact ${projectFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => {
              setProjectFilter('all')
              setPage(1)
            }}
          >
            <p className="overview-label">전체 프로젝트</p>
            <p className="overview-value">{totalProjects}건</p>
          </button>
          <button
            type="button"
            className={`panel overview-card overview-card-compact ${projectFilter === 'company' ? 'is-active' : ''}`}
            onClick={() => {
              setProjectFilter('company')
              setPage(1)
            }}
          >
            <p className="overview-label">실무 프로젝트</p>
            <p className="overview-value">{companyProjects}건</p>
          </button>
          <button
            type="button"
            className={`panel overview-card overview-card-compact ${projectFilter === 'personal' ? 'is-active' : ''}`}
            onClick={() => {
              setProjectFilter('personal')
              setPage(1)
            }}
          >
            <p className="overview-label">사이드 프로젝트</p>
            <p className="overview-value">{personalProjects}건</p>
          </button>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="empty-projects">선택한 조건에 맞는 프로젝트가 없습니다.</p>
        )}

        <div className="pager">
          <button type="button" onClick={() => setPage((prev) => Math.max(1, prev - 1))} disabled={page === 1}>
            이전
          </button>
          <p>
            {page} / {totalPages}
          </p>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages || filteredAndSortedProjects.length === 0}
          >
            다음
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
