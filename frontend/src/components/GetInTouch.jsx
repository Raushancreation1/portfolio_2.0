import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import TiltCard from './TiltCard.jsx'

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="container mt-16">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-slate-400 mt-1 max-w-prose">
        I’m open to collaboration, freelance opportunities, and interesting conversations.
        Feel free to reach out via email or connect on social media.
      </p>

      <div className="mt-6 grid sm:grid-cols-3 gap-5">
        <TiltCard className="rounded-xl border border-slate-800 bg-slate-900/30 p-5 hover:border-primary/50">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary" size={20} />
            <h3 className="font-medium text-slate-100">Email</h3>
          </div>
          <a
            href="mailto:raushancreationofficial@gmail.com"
            className="mt-3 inline-block text-sm text-slate-300 hover:text-primary"
          >
            raushancreationofficial@gmail.com
          </a>
        </TiltCard>

        <TiltCard className="rounded-xl border border-slate-800 bg-slate-900/30 p-5 hover:border-primary/50">
          <div className="flex items-center gap-3">
            <FaGithub className="text-primary" size={20} />
            <h3 className="font-medium text-slate-100">GitHub</h3>
          </div>
          <a
            href="https://github.com/Raushancreation1"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-slate-300 hover:text-primary"
          >
            Raushancreation1
          </a>
        </TiltCard>

        <TiltCard className="rounded-xl border border-slate-800 bg-slate-900/30 p-5 hover:border-primary/50">
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-primary" size={20} />
            <h3 className="font-medium text-slate-100">LinkedIn</h3>
          </div>
          <a
            href="https://www.linkedin.com/in/raushan-kumar-b4a9a0203/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-slate-300 hover:text-primary"
          >
            raushan kumar 
          </a>
        </TiltCard>
      </div>
    </section>
  )
}
