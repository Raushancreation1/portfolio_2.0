import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="container py-8 text-sm text-slate-400 grid gap-6 md:grid-cols-3 items-center">
        <p className="order-2 md:order-1">© {new Date().getFullYear()} Raushan. All rights reserved.</p>

        <ul className="order-1 md:order-2 flex items-center justify-center gap-6">
          <li><a href="#home" className="hover:text-primary">Home</a></li>
          <li><a href="#projects" className="hover:text-primary">Projects</a></li>
          <li><a href="#skills" className="hover:text-primary">Skills</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>

        <div className="order-3 flex items-center justify-end gap-4">
          <a href="https://github.com/Raushancreation1" target="_blank" rel="noreferrer" aria-label="GitHub"
             className="hover:text-primary">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/raushan-kumar-b4a9a0203/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="hover:text-primary">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:raushancreationofficial@gmail.com" aria-label="Email" className="hover:text-primary">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
