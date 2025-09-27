import { SiTypescript, SiRedux, SiDocker, SiNodedotjs, SiNextdotjs, SiGithubactions } from 'react-icons/si'
import TiltCard from './TiltCard.jsx'

const extras = [
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Redux', Icon: SiRedux },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'GitHub Actions', Icon: SiGithubactions },
]

export default function More() {
  return (
    <section id="more" className="container mt-16">
      <h2 className="text-2xl font-semibold">And many more...</h2>
      <p className="text-slate-400 mt-1">A snapshot of additional tools and platforms I work with.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {extras.map(({ name, Icon }) => (
          <TiltCard key={name} className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-center hover:border-primary/50">
            <div className="flex flex-col items-center gap-2">
              <Icon size={28} className="text-slate-200" />
              <span className="text-xs text-slate-300">{name}</span>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
