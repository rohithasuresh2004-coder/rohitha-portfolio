import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/portfolio.js'

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!v.email.trim()) e.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address, like name@example.com.'
  if (!v.subject.trim()) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const change = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setSent(false)
    if (Object.keys(found).length) return
    const body = `${values.message}\n\nFrom: ${values.name} (${values.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field = (name, label, type = 'text') => {
    const common = {
      id: name, name, value: values[name], onChange: change,
      'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-err` : undefined,
    }
    return (
      <div className="field">
        <label htmlFor={name}>{label}</label>
        {type === 'textarea'
          ? <textarea rows={5} {...common} />
          : <input type={type} autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : 'off'} {...common} />}
        {errors[name] && <p id={`${name}-err`} className="error" role="alert">{errors[name]}</p>}
      </div>
    )
  }

  return (
    <Section id="contact" title="Let's Build Something Together"
      intro="I'm looking forward to connecting with professionals, exploring software development opportunities, and contributing to meaningful projects.">
      <div className="contact-grid">
        <Reveal>
          <ul className="contact-list">
            <li><Mail size={20} aria-hidden="true" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><Phone size={20} aria-hidden="true" /><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
            <li><MapPin size={20} aria-hidden="true" /><span>{profile.location}</span></li>
            <li><Linkedin size={20} aria-hidden="true" /><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/rohitha-s-9b2469334</a></li>
            <li><Github size={20} aria-hidden="true" /><a href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.githubHandle}</a></li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <form className="card form" onSubmit={submit} noValidate>
            {field('name', 'Name')}
            {field('email', 'Email', 'email')}
            {field('subject', 'Subject')}
            {field('message', 'Message', 'textarea')}
            <button type="submit" className="btn btn-primary">Send by email</button>
            <p className="muted small" role="status">
              {sent
                ? 'Your email app should now open with this message ready to send.'
                : 'This form opens your email app with the message filled in. It does not send messages through a server.'}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
