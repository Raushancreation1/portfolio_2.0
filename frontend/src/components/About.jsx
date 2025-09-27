import TiltCard from './TiltCard.jsx'

export default function About() {
  return (
    <section id="about" className="container mt-16">
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 text-slate-300 leading-relaxed space-y-4">
          <p>
            I'm Raushan, a web developer focused on building fast, accessible, and visually engaging
            web applications. I enjoy working across the stack with React, Node.js, and MongoDB, and
            I love turning ideas into polished user experiences.
          </p>
          <p>
            My recent work includes creating a modern portfolio, setting up robust API backends, and
            integrating clean UI systems with Tailwind CSS. I'm always learning and exploring new tools
            to improve performance, maintainability, and developer experience.
          </p>
        </div>
        <TiltCard className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-medium text-primary">Highlights</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>Frontend: React, Tailwind, Vite</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: MongoDB (Mongoose)</li>
            <li>Clean code and performance minded</li>
          </ul>
        </TiltCard>
      </div>
    </section>
  )
}
