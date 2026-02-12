import { useState } from 'react'
import { getProjectStats } from '../data/projects/projectDataRepository'
import {
  careerPeriod,
  emailAddress,
  oneLineIntro,
  personalInfo,
  phoneNumber,
  privateInfo,
  profileHashtags,
  profileLinks,
  skillGroups,
} from '../data/profile'

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
  const totalProjects = getProjectStats().total

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
                {profileLinks.map((link) => (
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
