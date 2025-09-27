import { useRef, useState } from 'react'

export default function TiltCard({ children, className = '', strength = 15 }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2

    const rotateY = ((x - midX) / midX) * strength
    const rotateX = -((y - midY) / midY) * strength

    setStyle({
      transform: `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`,
    })
  }

  const onMouseLeave = () => {
    setStyle({ transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)' })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`will-change-transform transition-transform duration-150 ease-linear ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
