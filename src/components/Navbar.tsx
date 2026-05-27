const links = ['About', 'Experience', 'Projects', 'Collaborations', 'Contact']
const sectionMap: Record<string, string> = {
  About: 'work',
  Experience: 'experience',
  Projects: 'projects',
  Collaborations: 'collaborations',
  Contact: 'contact',
}

export default function Navbar() {
  const scrollTo = (id: string) => {
    const target = sectionMap[id] || id.toLowerCase()
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50">
      <div className="backdrop-blur-xl bg-black/50 border border-cyan-500/20 rounded-2xl px-4 py-4 md:px-6 md:py-5 flex justify-center items-center max-w-[640px] mx-auto">
        <div className="flex items-center gap-3 md:gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-base md:text-lg text-white hover:text-cyan-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
