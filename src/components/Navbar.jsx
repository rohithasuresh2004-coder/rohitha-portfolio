import { useEffect, useState } from 'react'
import { Download, Github, Linkedin, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio.js'
import useActiveSection from '../hooks/useActiveSection.js'

const ids = navLinks.map(([id]) => id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="Rohitha S, back to top" onClick={() => setOpen(false)}>
          <span className="logo-mark">RS</span>
          <span className="logo-name">Rohitha S</span>
        </a>
        <nav id="site-nav" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}
               aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub profile (opens in a new tab)"><Github size={18} aria-hidden="true" /><span className="nav-icon-text">GitHub</span></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn profile (opens in a new tab)"><Linkedin size={18} aria-hidden="true" /><span className="nav-icon-text">LinkedIn</span></a>
          <a href={profile.resume} download className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav"
                aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
