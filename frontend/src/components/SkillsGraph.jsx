import TiltCard from './TiltCard.jsx'

const skills = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Express', level: 70 },
  { name: 'MongoDB', level: 70 },
]

export default function SkillsGraph() {
  return (
    <section id="skills-graph" className="container mt-16">
      <h2 className="text-2xl font-semibold">Skills Graph</h2>
      <p className="text-slate-400 mt-1">A visual look at my proficiency levels.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {skills.map((s) => (
          <TiltCard key={s.name} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-200">{s.name}</span>
              <span className="text-xs text-slate-400">{s.level}%</span>
            </div>
            <div className="mt-3 h-2 rounded bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-700"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
