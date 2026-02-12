import { careers } from '../data/career'

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
