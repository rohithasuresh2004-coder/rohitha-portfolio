import { useEffect, useRef } from 'react'
import Mockup from './Mockup.jsx'
import { ExternalLink, Github, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" style={{ '--accent': project.accent }}>
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close project details">
          <X size={20} />
        </button>
        <h3 id="modal-title">{project.title}</h3>
        <p className="modal-lead">{project.overview}</p>
        <Mockup id={project.id} accent={project.accent} />
        <h4>Problem addressed</h4>
        <p>{project.problem}</p>
        <h4>Main features</h4>
        <ul className="check-list">
          {project.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <h4>Technologies</h4>
        {project.tech ? (
          <div className="chips">{project.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        ) : (
          <p>Web application</p>
        )}
        {(project.github || project.live) && (
          <div className="card-actions">
            {project.github && <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>}
            {project.live && <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Live Demo</a>}
          </div>
        )}
      </div>
    </div>
  )
}
