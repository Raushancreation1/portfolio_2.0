import TiltCard from './TiltCard.jsx'
import { FaReact, FaServer, FaTools, FaCheckCircle } from 'react-icons/fa'

const items = [
  {
    title: 'Frontend Engineering',
    Icon: FaReact,
    points: [
      'Building responsive UIs with React and Tailwind CSS',
      'Component-driven architecture and state management',
      'Performance-focused bundles with Vite',
    ],
  },
  {
    title: 'Backend & APIs',
    Icon: FaServer,
    points: [
      'Designing RESTful APIs with Node.js and Express',
      'Data modeling and CRUD with MongoDB & Mongoose',
      'Robust validation, logging and security middleware',
    ],
  },
  {
    title: 'Dev Tools & Quality',
    Icon: FaTools,
    points: [
      'Git/GitHub workflows and code reviews',
      'Postman for API testing and documentation',
      'Pragmatic testing and debugging practices',
    ],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="container mt-16">
      <h2 className="text-2xl font-semibold">My Expertise</h2>
      <p className="text-slate-400 mt-1">Areas where I create the most impact.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {items.map(({ title, Icon, points }) => (
          <TiltCard key={title} className="rounded-xl border border-slate-800 bg-slate-900/30 p-5 hover:border-primary/50">
            <div className="flex items-center gap-3">
              {Icon ? <Icon className="text-primary" size={22} /> : null}
              <h3 className="font-medium text-primary">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-slate-300">
              {points.map((p, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 text-primary/80 shrink-0" size={14} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
