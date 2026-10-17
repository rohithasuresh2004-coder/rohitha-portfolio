import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">{profile.title}</p>
          <p className="muted small">Thanks for visiting. Let's connect.</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#home" className="btn btn-ghost"><ArrowUp size={16} aria-hidden="true" /> Back to top</a>
        </div>
      </div>
      <p className="container muted small copy">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
