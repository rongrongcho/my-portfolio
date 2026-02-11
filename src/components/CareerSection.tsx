const careers = [
  {
    period: '2024.09 - 2026.03',
    title: '피오솔루션 | ERP 백엔드 개발',
    highlights: [
      'ERP–WMS 데이터 연동 프로젝트 담당',
      '재고수불부 자동화 시스템 개발',
      'ERP API 허브 시스템(PioSync) 설계 및 구현',
    ],
  },
]

function CareerSection() {
  return (
    <section id="career" className="snap-section section career-section" aria-labelledby="career-title">
      <div className="section-inner">
        <div className="section-heading">
          <h2 id="career-title">Career</h2>
          <p>커리어</p>
        </div>

        <div className="timeline">
          {careers.map((career) => (
            <article key={career.period} className="timeline-item panel">
              <p className="timeline-period">{career.period}</p>
              <h3>{career.title}</h3>
              <ul>
                {career.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerSection
