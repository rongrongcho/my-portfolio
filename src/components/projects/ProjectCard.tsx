import type { ProjectSummary } from '../../types/project'
import { getProjectDetailHash } from '../../lib/routes'

type ProjectCardProps = {
  project: ProjectSummary
}

function formatProjectCategory(project: ProjectSummary) {
  const contextLabel =
    project.projectContext === 'company'
      ? '실무'
      : project.projectContext === 'personal'
        ? '사이드'
        : project.projectContext === 'team-study'
          ? '스터디'
          : '프리랜스'

  const collaborationLabel = project.collaborationType === 'solo' ? '개인' : '팀'

  if (project.collaborationType === 'team' && project.teamSize) {
    return `${contextLabel}-${collaborationLabel} ${project.teamSize}명`
  }

  return `${contextLabel}-${collaborationLabel}`
}

function ProjectCard({ project }: ProjectCardProps) {
  const projectCategory = formatProjectCategory(project)
  const projectStatus = project.status === 'in-progress' ? '진행 중' : '완료'

  return (
    <article className="project-card panel">
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
          <div className="project-badges">
            <span className="status-tag is-category">{projectCategory}</span>
            <span className={`status-tag ${project.status === 'in-progress' ? 'is-progress' : 'is-completed'}`}>
              {projectStatus}
            </span>
          </div>
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
        <a href={getProjectDetailHash(project.slug)} className="link-button secondary">
          Detail
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
