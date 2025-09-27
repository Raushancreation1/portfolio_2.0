import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import TiltCard from './components/TiltCard.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import SkillsGraph from './components/SkillsGraph.jsx'
import Expertise from './components/Expertise.jsx'
import More from './components/More.jsx'
import GetInTouch from './components/GetInTouch.jsx'
import { fetchProjects, submitContact } from './lib/api.js'
import profileImg from './assets/Image .jpeg'
import Loading3D from './components/Loading3D.jsx'
import Background3D from './components/Background3D.jsx'
import Resume from './components/Resume.jsx'

export default function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProjects()
        setProjects(Array.isArray(data) ? data : data?.projects || [])
      } catch (e) {
        setError('Failed to fetch projects')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <div>
      <Background3D />
      <Navbar />
      {loading && <Loading3D message="Loading projects..." />}

      {/* Hero */}
      <section id="home" className="container pt-16">
        <div className="py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Hi, I'm Raushan Kumar
            </h1>
            <p className="mt-4 text-slate-300 max-w-prose">
              <span className="font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                Full-stack developer
              </span>
              {" "}specializing in building modern web applications with React, Node.js, and Tailwind CSS.
            </p>
            <TiltCard className="mt-6 inline-block">
              <div className="flex gap-3">
                <a href="#projects" className="px-4 py-2 bg-primary text-slate-950 rounded font-medium">View Projects</a>
                <a href="#contact" className="px-4 py-2 border border-slate-700 rounded font-medium hover:border-primary/60">Contact</a>
              </div>
            </TiltCard>
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl">
            <TiltCard className="aspect-square rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <img
                  src={profileImg}
                  alt="Portrait of Raushan Kumar"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* My Expertise */}
      <Expertise />

      {/* Skills Graph */}
      <SkillsGraph />

      {/* Resume */}
      <Resume />

      {/* Projects */}
      <section id="projects" className="container mt-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-slate-400 mt-1">Some things I’ve built recently.</p>

        {loading && <p className="mt-6">Loading projects...</p>}
        {error && <p className="mt-6 text-red-400">{error}</p>}

        {!loading && !error && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.id || p.title} project={p} />)
            )}
          </div>
        )}
      </section>

      {/* Contact */}
      <ContactSection />

      {/* And many more... */}
      <More />

      {/* Get In Touch */}
      <GetInTouch />

      <Footer />
      <ChatWidget />
    </div>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      await submitContact(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('error')
      setError('Failed to send message')
    }
  }

  return (
    <section id="contact" className="container mt-16 mb-20">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
        Contact
      </h2>
      <p className="text-slate-400 mt-1">Have a question or want to work together? Send me a message.</p>

      <TiltCard className="mt-6 max-w-xl">
        <div className="rounded-xl p-[1px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400">
          <form onSubmit={onSubmit} className="grid gap-4 rounded-xl bg-slate-950 p-5 sm:p-6">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="w-full rounded border border-slate-800 bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email address"
              className="w-full rounded border border-slate-800 bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-400/50"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Message"
              rows="5"
              className="w-full rounded border border-slate-800 bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/50"
              required
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center rounded bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 text-slate-950 font-medium px-4 py-2 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400">Thanks! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400">{error}</p>
            )}
          </form>
        </div>
      </TiltCard>
    </section>
  )
}
