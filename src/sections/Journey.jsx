import { Award, Briefcase, ExternalLink, GraduationCap } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { certifications, education, experience } from '../data/portfolio.js'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role}>
            <Reveal>
              <article className="card">
                <div className="meta"><Briefcase size={16} aria-hidden="true" /> {e.year}</div>
                <h3>{e.role}</h3>
                <p className="org">{e.org}</p>
                <ul className="check-list">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.degree}>
            <Reveal>
              <article className={`card ${e.current ? 'card-current' : ''}`}>
                <div className="meta">
                  <GraduationCap size={16} aria-hidden="true" /> {e.years}
                  {e.status && <span className="badge">{e.status}</span>}
                </div>
                <h3>{e.degree}</h3>
                <p className="org">{e.school}</p>
                <p className="muted">{e.uni}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid cert-grid">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <article className="card cert-card">
              {c.image && <img src={c.image} alt={`${c.title} certificate`} loading="lazy" />}
              <div className="icon-tile"><Award size={22} aria-hidden="true" /></div>
              <h3>{c.title}</h3>
              <p className="org">{c.issuer}</p>
              <p className="muted">{[c.detail, c.date].filter(Boolean).join(' | ')}</p>
              {c.url && (
                <a className="link" href={c.url} target="_blank" rel="noreferrer">
                  Verify certificate <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
