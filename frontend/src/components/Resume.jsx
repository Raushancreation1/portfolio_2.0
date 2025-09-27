import React from 'react'
import TiltCard from './TiltCard.jsx'

const experiences = [
  {
    role: 'Full‑Stack Developer',
    company: 'Your Company',
    period: '2024 — Present',
    bullets: [
      'Built responsive React frontends with Tailwind CSS and Vite.',
      'Designed REST APIs with Node.js/Express and MongoDB.',
      'Implemented CI/CD and optimized Lighthouse performance scores.'
    ],
  },
]

const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Your University',
    period: '2019 — 2023',
  },
]

const skills = [
  'React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Git', 'Docker'
]

export default function Resume() {
  return (
    <section id="resume" className="container mt-16">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
        Resume
      </h2>
      <p className="text-slate-400 mt-1">Snapshot of my experience, education, and core skills.</p>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://old-surf-250.linkyhost.com"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-slate-950 font-medium"
        >
          Download CV
        </a>
        <a
          href="https://old-surf-250.linkyhost.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded border border-slate-700 font-medium hover:border-primary/60"
        >
          View PDF
        </a>
      </div>
    </section>
  )
}
