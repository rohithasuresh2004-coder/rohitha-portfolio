import { Database, Monitor, Server, Terminal, Wrench } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { skillGroups } from '../data/portfolio.js'

const icons = { terminal: Terminal, monitor: Monitor, server: Server, database: Database, wrench: Wrench }

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" intro="The languages, frameworks and tools I've used in my projects and internship.">
      <div className="grid skills-grid">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon]
          return (
            <Reveal key={g.title} delay={i * 60}>
              <article className="card skill-card">
                <div className="icon-tile"><Icon size={22} aria-hidden="true" /></div>
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.items.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
