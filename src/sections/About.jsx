import { BookOpen, Database, Github, Globe, Layout, Lightbulb, Puzzle, Server } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/portfolio.js'

const interests = [
  [Globe, 'Full-stack web development'], [Layout, 'React.js interfaces'], [Server, 'REST API development'],
  [Database, 'Database integration'], [BookOpen, 'Learning new technologies'], [Lightbulb, 'Building useful digital applications'], [Puzzle, 'Problem-solving'],
]
const facts = [
  ['Name', profile.name], ['Location', profile.location], ['Education', 'MCA, pursuing'],
  ['Professional focus', 'Software Development'], ['Primary stack', 'MERN'],
]

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="about-grid">
        <Reveal>
          <p>
            I'm pursuing a Master of Computer Applications (MCA) after completing a BCA, and my interest lies in
            full-stack development and building practical web applications.
          </p>
          <p>
            During my internship at Faith Infotech I worked on both the front end and back end of a Clinical Management
            System. Alongside it I've built projects in tourism, vehicle sales and tutor discovery, which gave me
            hands-on practice with React.js interfaces, REST APIs using Node.js and Express.js, and MongoDB.
          </p>
          <p>I enjoy turning ideas into useful applications and I'm keen to keep improving my technical skills.</p>
          <ul className="interest-list">
            {interests.map(([Icon, label]) => (
              <li key={label}><Icon size={18} aria-hidden="true" /> {label}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <dl className="card info-card">
            {facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
            <div>
              <dt>GitHub</dt>
              <dd><a className="link" href={profile.github} target="_blank" rel="noreferrer">{profile.githubHandle}</a></dd>
            </div>
          </dl>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost visit-gh">
            <Github size={16} aria-hidden="true" /> Visit GitHub Profile
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
