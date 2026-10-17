import { useCallback, useState } from 'react'
import { Car, ExternalLink, Github, GraduationCap, HeartPulse, Landmark } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Mockup from '../components/Mockup.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { projects } from '../data/portfolio.js'

const icons = { heart: HeartPulse, landmark: Landmark, car: Car, grad: GraduationCap }

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <Section id="projects" title="Projects" intro="Four web applications, from a clinical records system built during my internship to a tutor discovery platform.">
      <div className="grid projects-grid">
        {projects.map((p, i) => {
          const Icon = icons[p.icon]
          return (
            <Reveal key={p.id} delay={(i % 2) * 80}>
              <article className="card project-card" style={{ '--accent': p.accent }}>
                <div className="project-band"><Icon size={28} aria-hidden="true" /></div>
                <div className="project-body">
                  <Mockup id={p.id} accent={p.accent} compact />
                  <h3>{p.title}</h3>
                  <p>{p.overview}</p>
                  <div className="chips">
                    {(p.tech || ['Web application']).map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary" onClick={() => setSelected(p)} aria-haspopup="dialog">View Details</button>
                    {p.github && <a className="btn btn-ghost" href={p.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>}
                    {p.live && <a className="btn btn-ghost" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Live Demo</a>}
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
      {selected && <ProjectModal project={selected} onClose={close} />}
    </Section>
  )
}
