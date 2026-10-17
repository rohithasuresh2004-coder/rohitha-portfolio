const bars = (n) => Array.from({ length: n }, (_, i) => <i key={i} className="m-line" style={{ width: `${90 - i * 18}%` }} />)

function Clinical() {
  return (
    <div className="m-row">
      <div className="m-side">{bars(4)}</div>
      <div className="m-main">
        <div className="m-search">Search records</div>
        {[0, 1, 2].map((k) => <div key={k} className="m-card">{bars(2)}</div>)}
      </div>
    </div>
  )
}
function Tourism() {
  const tiles = ['Villages', 'Events', 'Art forms', 'Handicrafts']
  return <div className="m-tiles">{tiles.map((t, k) => <div key={t} className="m-tile" style={{ opacity: 1 - k * 0.12 }}><span>{t}</span></div>)}</div>
}
function Car() {
  return (
    <div className="m-main">
      <div className="m-search">Search vehicles</div>
      <div className="m-cols">
        {[0, 1, 2].map((k) => <div key={k} className="m-card"><div className="m-car" />{bars(2)}</div>)}
      </div>
    </div>
  )
}
function Tutor() {
  return (
    <div className="m-main">
      <div className="m-chips"><span>Subject</span><span>Location</span><span>Mode</span><span>Fees</span></div>
      {[0, 1].map((k) => (
        <div key={k} className="m-card m-tutor"><div className="m-avatar" /><div className="m-fill">{bars(2)}</div><span className="m-btn">Book demo</span></div>
      ))}
    </div>
  )
}
const views = { clinical: Clinical, tourism: Tourism, car: Car, tutor: Tutor }

export default function Mockup({ id, accent, compact = false }) {
  const View = views[id]
  return (
    <figure className={`mock ${compact ? 'mock-sm' : ''}`} style={{ '--accent': accent }}>
      <div className="mock-screen" aria-hidden="true"><View /></div>
      <figcaption>Illustrative mockup, not a screenshot of the actual application.</figcaption>
    </figure>
  )
}
