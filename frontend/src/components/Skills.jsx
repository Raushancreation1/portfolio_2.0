import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaLinux, FaCode } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiVite, SiExpress, SiMongodb, SiMongoose, SiPostman, SiNpm } from 'react-icons/si'
import TiltCard from './TiltCard.jsx'

const ICON_SIZE = 34

const groups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', Icon: FaReact },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'HTML5', Icon: FaHtml5 },
      { name: 'CSS3', Icon: FaCss3Alt },
      { name: 'Tailwind', Icon: SiTailwindcss },
      { name: 'Vite', Icon: SiVite },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', Icon: FaNodeJs },
      { name: 'Express', Icon: SiExpress },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Mongoose', Icon: SiMongoose },
      { name: 'REST APIs', Icon: SiExpress },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', Icon: FaGitAlt },
      { name: 'GitHub', Icon: FaGithub },
      { name: 'VS Code', Icon: FaCode },
      { name: 'Linux', Icon: FaLinux },
      { name: 'Postman', Icon: SiPostman },
      { name: 'NPM', Icon: SiNpm },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container mt-16">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="text-slate-400 mt-1">Technologies and tools I use frequently.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {groups.map((group) => (
          <div key={group.title} className="rounded-xl border border-slate-800 p-5 bg-slate-900/30">
            <h3 className="font-medium text-primary">{group.title}</h3>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {group.items.map(({ name, Icon }) => (
                <TiltCard key={name} className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-center hover:border-primary/50">
                  <div className="flex flex-col items-center gap-2">
                    <Icon size={ICON_SIZE} className="text-slate-200" />
                    <span className="text-xs text-slate-300">{name}</span>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
