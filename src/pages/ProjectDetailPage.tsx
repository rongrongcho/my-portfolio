import { useCallback, useEffect, useMemo, useState } from 'react'
import { getProjectBySlug } from '../data/projects/projectDataRepository'
import { getHomeHash } from '../lib/routes'

type ProjectDetailPageProps = {
  slug: string
}

function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = getProjectBySlug(slug)
  const [sectionOpenMap, setSectionOpenMap] = useState<Record<string, boolean>>({})
  const [isOutlineOpen, setIsOutlineOpen] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [demoIndex, setDemoIndex] = useState(0)

  const sections = useMemo(() => project?.detailSections ?? [], [project])
  const demoImages = useMemo(() => {
    if (!project) {
      return []
    }

    return project.demoImages.length > 0 ? project.demoImages : [project.thumbnail]
  }, [project])
  const demoCaptions = useMemo(() => {
    if (!project) {
      return []
    }

    return project.demoCaptions.length === demoImages.length ? project.demoCaptions : project.demoCaptions.concat(Array(Math.max(0, demoImages.length - project.demoCaptions.length)).fill(''))
  }, [project, demoImages])

  const isSectionOpen = (sectionId: string) => sectionOpenMap[sectionId] ?? true

  const toggleSection = (sectionId: string) => {
    setSectionOpenMap((prev) => ({
      ...prev,
      [sectionId]: !(prev[sectionId] ?? true),
    }))
  }

  const activateDetailView = () => {
    setIsDemoOpen(false)
  }

  const activateDemoView = () => {
    if (demoImages.length === 0) {
      return
    }

    setDemoIndex(0)
    setIsDemoOpen(true)
  }

  const showPrevDemo = useCallback(() => {
    if (demoImages.length === 0) {
      return
    }

    setDemoIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length)
  }, [demoImages.length])

  const showNextDemo = useCallback(() => {
    if (demoImages.length === 0) {
      return
    }

    setDemoIndex((prev) => (prev + 1) % demoImages.length)
  }, [demoImages.length])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setIsOutlineOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (!isDemoOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDemoOpen(false)
      }
      if (event.key === 'ArrowLeft') {
        showPrevDemo()
      }
      if (event.key === 'ArrowRight') {
        showNextDemo()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isDemoOpen, showNextDemo, showPrevDemo])

  if (!project) {
    return (
      <div className="detail-shell">
        <main className="detail-main">
          <section className="detail-card panel">
            <p className="detail-kicker">PROJECT NOT FOUND</p>
            <h1>프로젝트를 찾을 수 없습니다.</h1>
            <p>요청한 주소가 잘못되었거나, 아직 공개하지 않은 프로젝트입니다.</p>
            <a href={getHomeHash('projects')} className="link-button secondary detail-back-link">
              목록으로 돌아가기
            </a>
          </section>
        </main>
      </div>
    )
  }


  return (
    <div className="detail-shell">
      <header className="detail-header">
        <a href={getHomeHash('projects')} className="detail-back-icon" aria-label="프로젝트 목록으로 복귀">
          ←
        </a>
        <div className="detail-view-tabs detail-view-tabs-header" role="tablist" aria-label="프로젝트 상세 보기 전환">
          <button
            type="button"
            role="tab"
            className={`detail-view-tab ${!isDemoOpen ? 'is-active' : ''}`}
            aria-selected={!isDemoOpen}
            onClick={activateDetailView}
          >
            프로젝트 내용
          </button>
          <button
            type="button"
            role="tab"
            className={`detail-view-tab ${isDemoOpen ? 'is-active' : ''}`}
            aria-selected={isDemoOpen}
            onClick={activateDemoView}
            disabled={demoImages.length === 0}
          >
            데모 뷰어
          </button>
        </div>
      </header>

      <main className="detail-main detail-main-split">
        <aside className="detail-sidebar">
          <div className="detail-sidebar-inner">
            <p className="detail-kicker">PROJECT DETAIL</p>
            <h1>{project.title}</h1>
            <p className="detail-summary">{project.summary}</p>

            <div className="detail-meta-grid">
              <div>
                <dt>진행 기간</dt>
                <dd>{project.period}</dd>
              </div>
              <div>
                <dt>담당 영역</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>기술 스택</dt>
                <dd>{project.techStack.join(', ')}</dd>
              </div>
              <div>
                <dt>상태</dt>
                <dd>{project.status === 'in-progress' ? '진행 중' : '완료'}</dd>
              </div>
            </div>

            <div className="detail-action-row">
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-button detail-github-link">
                GitHub
                <span className="link-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <button
              type="button"
              className="detail-outline-fab"
              onClick={() => setIsOutlineOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isOutlineOpen}
              aria-controls="mobile-detail-outline"
            >
              목차
            </button>

            <nav className="detail-toc" aria-label="Project detail table of contents">
              <h2>목차</h2>
              <div className="detail-toc-scroll">
                <ol>
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <span className="toc-index">{index + 1}</span>
                      <span className="toc-title">{section.title}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          </div>
        </aside>

        <section className="detail-content-fixed">
          {isDemoOpen && demoImages.length > 0 ? (
            <div className="detail-demo-panel">
              <header className="detail-demo-header">
                <div className="detail-demo-heading">
                  <p className="detail-demo-kicker">DEMO VIEWER</p>
                  <h2>{project.title}</h2>
                </div>
                <div className="detail-demo-header-actions">
                  <p className="detail-demo-count">
                    {demoIndex + 1} / {demoImages.length}
                  </p>
                </div>
              </header>
              <div className="detail-demo-stage-wrap">
                <div className="detail-demo-stage">
                  <button type="button" className="demo-nav prev" onClick={showPrevDemo} aria-label="이전 이미지">
                    ‹
                  </button>
                  <div className="detail-demo-slide" style={{ backgroundImage: `url(${demoImages[demoIndex]})` }} />
                  <button type="button" className="demo-nav next" onClick={showNextDemo} aria-label="다음 이미지">
                    ›
                  </button>
                </div>
              </div>
              <div className="detail-demo-caption-panel">
                <p className="detail-demo-caption">{demoCaptions[demoIndex]}</p>
                <p className="detail-demo-caption-note">좌우 화살표 키로도 이동할 수 있습니다.</p>
              </div>
            </div>
          ) : (
            <div className="detail-sections">
              {sections.map((section) => {
                const expanded = isSectionOpen(section.id)

                return (
                  <article key={section.id} data-detail-section={section.id} className="detail-section panel">
                    <div className="detail-section-head">
                      <h2>{section.title}</h2>
                      <button
                        type="button"
                        className={`detail-section-toggle ${expanded ? 'is-open' : ''}`}
                        onClick={() => toggleSection(section.id)}
                        aria-expanded={expanded}
                        aria-label={expanded ? '섹션 접기' : '섹션 펼치기'}
                      >
                        <span className="detail-toggle-chevron" aria-hidden="true">
                          ›
                        </span>
                      </button>
                    </div>

                    {expanded && (
                      <>
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {section.highlights && section.highlights.length > 0 && (
                          <ul>
                            {section.highlights.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </section>
      </main>

      <div
        className={`detail-outline-overlay ${isOutlineOpen ? 'is-open' : ''}`}
        onClick={() => setIsOutlineOpen(false)}
        role="presentation"
      >
        <section
          id="mobile-detail-outline"
          className="detail-outline-modal panel"
          role="dialog"
          aria-modal="true"
          aria-label="프로젝트 목차"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="detail-outline-modal-header">
            <h2>목차</h2>
            <button type="button" onClick={() => setIsOutlineOpen(false)} aria-label="목차 닫기">
              닫기
            </button>
          </div>

          <div className="detail-toc-scroll detail-toc-scroll-modal">
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <span className="toc-index">{index + 1}</span>
                  <span className="toc-title">{section.title}</span>
                </li>
              ))}
            </ol>
          </div>

        </section>
      </div>
    </div>
  )
}

export default ProjectDetailPage
