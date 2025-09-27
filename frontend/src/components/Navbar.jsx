import { useState } from 'react'
import TiltCard from './TiltCard.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <nav className="container flex items-center justify-between h-14">
        <TiltCard className="inline-block">
          <a
            href="#home"
            className="font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent"
          >
            Raushan Kumar
          </a>
        </TiltCard>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <TiltCard className="inline-block">
              <a
                href="#projects"
                className="group relative inline-block transition-colors duration-200 text-slate-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-fuchsia-400 hover:to-amber-300"
              >
                Projects
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </TiltCard>
          </li>
          <li>
            <TiltCard className="inline-block">
              <a
                href="#expertise"
                className="group relative inline-block transition-colors duration-200 text-slate-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-fuchsia-400 hover:to-amber-300"
              >
                Expertise
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </TiltCard>
          </li>
          <li>
            <TiltCard className="inline-block">
              <a
                href="#skills"
                className="group relative inline-block transition-colors duration-200 text-slate-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-fuchsia-400 hover:to-amber-300"
              >
                Skills
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </TiltCard>
          </li>
          <li>
            <TiltCard className="inline-block">
              <a
                href="#contact"
                className="group relative inline-block transition-colors duration-200 text-slate-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-fuchsia-400 hover:to-amber-300"
              >
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </TiltCard>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded border border-slate-700 px-3 py-1.5 text-slate-200 hover:border-primary/60"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {/* Simple hamburger icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-800 bg-slate-900/90">
          <div className="container py-3">
            <ul className="grid gap-2 text-sm">
              <li>
                <a href="#projects" className="block px-2 py-2 rounded hover:bg-slate-800/60" onClick={() => setOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#expertise" className="block px-2 py-2 rounded hover:bg-slate-800/60" onClick={() => setOpen(false)}>
                  Expertise
                </a>
              </li>
              <li>
                <a href="#skills" className="block px-2 py-2 rounded hover:bg-slate-800/60" onClick={() => setOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="block px-2 py-2 rounded hover:bg-slate-800/60" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
