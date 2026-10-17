import Reveal from './Reveal.jsx'

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <h2 id={`${id}-title`} className="section-title">{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
