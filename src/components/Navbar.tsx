import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Projects', 'Collaborations', 'Contact']
const sectionMap: Record<string, string> = {
  About: 'work',
  Experience: 'experience',
  Projects: 'projects',
  Collaborations: 'collaborations',
  Contact: 'contact',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    const target = sectionMap[id] || id.toLowerCase()
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50">
      <div className="backdrop-blur-xl bg-black/50 border border-cyan-500/20 rounded-2xl px-4 py-3 md:px-6 md:py-4 max-w-[640px] mx-auto">
        <div className="flex items-center justify-between md:justify-center">
          <span className="md:hidden text-white italic font-semibold text-lg tracking-tight">JF</span>
          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-lg text-white hover:text-cyan-400 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-[640px] mt-2 backdrop-blur-xl bg-black/90 border border-cyan-500/20 rounded-2xl p-3 flex flex-col gap-1 md:hidden">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="w-full text-left text-base text-white hover:text-cyan-400 hover:bg-white/5 transition-colors px-4 py-3 rounded-xl"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
