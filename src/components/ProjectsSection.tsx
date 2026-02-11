import { useEffect, useMemo, useState } from 'react'
import { projects } from '../data/projects'

type SortOrder = 'latest' | 'oldest'
type ProjectFilter = 'all' | 'completed' | 'in-progress'

const PAGE_SIZE = 3

function ProjectsSection() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('latest')
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all')
  const [page, setPage] = useState(1)
  const totalProjects = projects.length
  const completedProjects = projects.filter((project) => project.status === 'completed').length
  const inProgressProjects = projects.filter((project) => project.status === 'in-progress').length

  const filteredAndSortedProjects = useMemo(() => {
    const filtered =
      projectFilter === 'all' ? projects : projects.filter((project) => project.status === projectFilter)

    const sorted = [...filtered]
    sorted.sort((a, b) => (sortOrder === 'latest' ? b.id - a.id : a.id - b.id))
    return sorted
  }, [projectFilter, sortOrder])

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedProjects.length / PAGE_SIZE))

  const visibleProjects = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filteredAndSortedProjects.slice(start, start + PAGE_SIZE)
  }, [filteredAndSortedProjects, page])

  useEffect(() => {
    setPage(1)
  }, [sortOrder, projectFilter])

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
              onClick={() => setSortOrder('latest')}
            >
              최신순
            </button>
            <button
              type="button"
              className={sortOrder === 'oldest' ? 'is-active' : ''}
              onClick={() => setSortOrder('oldest')}
            >
              오래된 순
            </button>
          </div>
        </div>

        <div className="project-overview project-overview-compact">
          <button
            type="button"
            className={`panel overview-card overview-card-compact ${projectFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setProjectFilter('all')}
          >
            <p className="overview-label">전체 프로젝트</p>
            <p className="overview-value">{totalProjects}건</p>
          </button>
          <button
            type="button"
            className={`panel overview-card overview-card-compact ${projectFilter === 'completed' ? 'is-active' : ''}`}
            onClick={() => setProjectFilter('completed')}
          >
            <p className="overview-label">완료 프로젝트</p>
            <p className="overview-value">{completedProjects}건</p>
          </button>
          <button
            type="button"
            className={`panel overview-card overview-card-compact ${projectFilter === 'in-progress' ? 'is-active' : ''}`}
            onClick={() => setProjectFilter('in-progress')}
          >
            <p className="overview-label">진행 중 프로젝트</p>
            <p className="overview-value">{inProgressProjects}건</p>
          </button>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="project-card panel">
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                loading="lazy"
                decoding="async"
                width={640}
                height={360}
              />

              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className={`status-tag ${project.status === 'in-progress' ? 'is-progress' : 'is-completed'}`}>
                    {project.status === 'in-progress' ? '진행 중' : '완료'}
                  </span>
                </div>
                <p className="project-summary">{project.summary}</p>

                <dl>
                  <dt>기간</dt>
                  <dd>{project.period}</dd>

                  <dt>사용 기술</dt>
                  <dd>{project.techStack.join(', ')}</dd>

                  <dt>담당 영역</dt>
                  <dd>{project.role}</dd>

                  <dt>주요 기능</dt>
                  <dd>{project.description}</dd>
                </dl>
              </div>

              <div className="project-actions">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-button">
                  GitHub
                  <span className="link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href={project.detailUrl} target="_blank" rel="noreferrer" className="link-button secondary">
                  Detail
                </a>
              </div>
            </article>
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
