import { useEffect, useState } from 'react'

export default function Typing({ words }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [i, setI] = useState(0)
  const [text, setText] = useState(reduce ? words[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const word = words[i]
    let delay = deleting ? 45 : 85
    if (!deleting && text === word) delay = 1500
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') { setDeleting(false); return setI((i + 1) % words.length) }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words, reduce])

  return (
    <span className="typing">
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  )
}
