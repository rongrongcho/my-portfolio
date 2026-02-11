import { useState } from 'react'
import { projects } from '../data/projects'

const emailAddress = 'mararongsya@gmail.com'
const phoneNumber = '010-0000-0000'

const personalInfo = [
  { label: '이름', value: ['이초롱 (Lee Chorong)'] },
  { label: '생년월일', value: ['1998.04.14'] },
  { label: '거주지', value: ['경기도'] },
]

const oneLineIntro =
  '실무 경험을 바탕으로 성장해온 백엔드 개발자입니다. Java와 Spring Boot로 API를 설계하고 외부 시스템을 연동하는 개발을 해왔습니다. 데이터 흐름을 이해하고 안정적인 구조를 만드는 것을 중요하게 생각합니다.'
const privateInfo = [
  {
    label: '업무 스타일',
    value: '요구사항을 구조화한 뒤 API·데이터 모델을 먼저 정리하고, 구현 단계에서 리스크를 빠르게 줄입니다.',
  },
  {
    label: '협업 방식',
    value: '핵심 이슈를 짧게 공유하고 즉시 피드백 루프를 돌리는 협업을 선호합니다.',
  },
  {
    label: '강점',
    value: 'ERP 도메인 이해도를 바탕으로 비즈니스 요구를 백엔드 로직과 데이터 흐름으로 안정적으로 옮길 수 있습니다.',
  },
  {
    label: '현재 목표',
    value: '성능과 유지보수성을 함께 고려한 백엔드 아키텍처 설계 역량을 더 고도화하고 있습니다.',
  },
]

const links = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Blog', href: 'https://velog.io/' },
]

const profileHashtags = [
  'ERP백엔드',
  '문제해결형개발자',
  '데이터연동',
  'API설계',
  '협업중심',
]

const skillGroups = [
  {
    ko: '백엔드',
    en: 'Backend',
    skills: ['Java', 'Python', 'Node.js', 'Spring Framework', 'Spring Boot'],
  },
  {
    ko: '프론트엔드',
    en: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    ko: '데이터베이스',
    en: 'Database',
    skills: ['PostgreSQL', 'Oracle', 'MSSQL', 'MongoDB'],
  },
  {
    ko: '인프라',
    en: 'Infra',
    skills: ['AWS'],
    subSkills: ['EC2', 'ALB', 'RDS', 'S3', 'CloudFront', 'Route53'],
    extras: ['Nginx', 'Linux'],
  },
  {
    ko: 'IDE 및 도구',
    en: 'IDE & Tools',
    skills: ['IntelliJ', 'Eclipse', 'VSCode', 'Figma'],
  },
]

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function ProfileSection() {
  const [copyFeedback, setCopyFeedback] = useState('')
  const [phoneCopyFeedback, setPhoneCopyFeedback] = useState('')
  const [showPrivateInfo, setShowPrivateInfo] = useState(false)
  const careerPeriod = '2024.09 ~ 2026.03 (1년 6개월)'
  const totalProjects = projects.length

  const handleCopyEmail = async () => {
    try {
      await copyText(emailAddress)
      setCopyFeedback('복사 완료')
    } catch {
      setCopyFeedback('복사 실패')
    }

    window.setTimeout(() => {
      setCopyFeedback('')
    }, 1500)
  }

  const handleCopyPhone = async () => {
    try {
      await copyText(phoneNumber)
      setPhoneCopyFeedback('복사 완료')
    } catch {
      setPhoneCopyFeedback('복사 실패')
    }

    window.setTimeout(() => {
      setPhoneCopyFeedback('')
    }, 1500)
  }

  return (
    <section id="profile" className="snap-section section profile-section" aria-labelledby="profile-title">
      <div className="section-inner">
        <div className="section-heading">
          <h2 id="profile-title">About Me</h2>
          <p>프로필</p>
        </div>

        <div className="profile-grid">
          <div className="profile-left">
            <div className={`basic-info-flip ${showPrivateInfo ? 'is-flipped' : ''}`}>
              <article className="panel card-panel basic-info-face basic-info-front">
                <div className="basic-info-header">
                  <h3>기본정보</h3>
                  <button
                    type="button"
                    className="flip-toggle"
                    onClick={() => setShowPrivateInfo(true)}
                    aria-label="개인 정보 카드 뒤집기"
                  >
                    →
                  </button>
                </div>
                <div className="info-list">
                  {personalInfo.map((item) => (
                    <div key={item.label} className="info-item">
                      <p className="info-label">{item.label}</p>
                      <div className="info-value">
                        {item.value.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="info-item">
                    <p className="info-label">연락처</p>
                    <div className="info-value email-row">
                      <p>{phoneNumber}</p>
                      <button type="button" className="inline-button" onClick={handleCopyPhone}>
                        Copy
                      </button>
                      {phoneCopyFeedback && <span className="copy-feedback">{phoneCopyFeedback}</span>}
                    </div>
                  </div>
                  <div className="info-item">
                    <p className="info-label">이메일</p>
                    <div className="info-value email-row">
                      <p>{emailAddress}</p>
                      <button type="button" className="inline-button" onClick={handleCopyEmail}>
                        Copy
                      </button>
                      {copyFeedback && <span className="copy-feedback">{copyFeedback}</span>}
                    </div>
                  </div>
                  <div className="info-item intro-item">
                    <p className="info-label">자기소개</p>
                    <div className="intro-block">
                      <p>{oneLineIntro}</p>
                    </div>
                  </div>
                </div>
                <div className="profile-hashtags" aria-label="자기소개 해시태그">
                  {profileHashtags.map((tag) => (
                    <span key={tag} className="hashtag-chip">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>

              <article className="panel card-panel basic-info-face basic-info-back">
                <div className="basic-info-header">
                  <h3>추가 정보</h3>
                  <button
                    type="button"
                    className="flip-toggle"
                    onClick={() => setShowPrivateInfo(false)}
                    aria-label="기본 정보 카드로 돌아가기"
                  >
                    ←
                  </button>
                </div>
                <div className="private-list">
                  {privateInfo.map((item) => (
                    <div key={item.label} className="private-item">
                      <p className="private-label">{item.label}</p>
                      <p className="private-value">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article className="panel card-panel">
              <h3>바로가기</h3>
              <div className="external-links">
                {links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="link-button">
                    {link.label}
                    <span className="link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </div>

          <div className="profile-right">
            <article className="panel card-panel">
              <h3>요약</h3>
              <div className="profile-mini-summary">
                <div className="summary-item">
                  <p className="summary-label">실무 경력</p>
                  <p className="summary-value summary-value-compact">{careerPeriod}</p>
                </div>
                <div className="summary-item">
                  <p className="summary-label">참여 프로젝트</p>
                  <p className="summary-value">{totalProjects}건</p>
                </div>
              </div>
            </article>

            <article className="panel card-panel">
              <h3>기술 스택</h3>
              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <section key={group.en} className={`skill-group ${group.en === 'Infra' ? 'infra-group' : ''}`}>
                    <h4>{group.ko} / {group.en}</h4>
                    {group.subSkills ? (
                      <div className="infra-skill-block">
                        <p className="skill-main">{group.skills[0]}</p>
                        <div className="infra-children">
                          <ul className="sub-skill-list">
                            {group.subSkills.map((skill) => (
                              <li key={skill}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                        {group.extras && (
                          <ul className="infra-extra-list">
                            {group.extras.map((skill) => (
                              <li key={skill}>{skill}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <ul>
                        {group.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
