import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import Typing from '../components/Typing.jsx'
import { profile } from '../data/portfolio.js'

const code = `const developer = {
  name: "Rohitha S",
  focus: "Full Stack",
  stack: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
  ],
  studying: "MCA",
};`

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <div className="container hero-grid">
        <div>
          <p className="hero-hi">Hi, I'm Rohitha S</p>
          <h1 id="hero-title">Building Digital Experiences with Code</h1>
          <p className="hero-sub">{profile.title}</p>
          <p className="hero-typed">I'm a <Typing words={profile.roles} /></p>
          <p className="hero-desc">
            I'm an MCA student and aspiring software developer passionate about building responsive web applications,
            developing practical digital solutions, and continuously improving my software development skills.
          </p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary"><ArrowDown size={16} aria-hidden="true" /> Explore My Projects</a>
            <a href="#contact" className="btn btn-ghost"><Mail size={16} aria-hidden="true" /> Contact Me</a>
          </div>
          <div className="btn-row">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-quiet"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
            <a href={profile.resume} download className="btn btn-primary"><Download size={16} aria-hidden="true" /> Download Resume</a>
          </div>
          <div className="btn-row">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-quiet"><Github size={16} aria-hidden="true" /> GitHub</a>
            <a href={`mailto:${profile.email}`} className="btn btn-quiet"><Mail size={16} aria-hidden="true" /> Email</a>
          </div>
        </div>

        <div className="code-card" aria-hidden="true">
          <div className="code-bar"><i /><i /><i /><span>developer.js</span></div>
          <div className="code-body">
            <div className="monogram">RS</div>
            <pre>{code}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
