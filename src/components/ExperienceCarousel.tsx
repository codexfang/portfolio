import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const experiences = [
  {
    logo: 'AZ', company: 'Amazon', role: 'Software Development Engineer', date: 'Incoming Summer 2027', type: 'Internship', color: '#ff9900',
    desc: 'I will be designing and building scalable backend services and distributed systems that power Amazon\'s global e-commerce platform. I will be working alongside senior engineers to deliver high-impact solutions for millions of customers worldwide.',
  },
  {
    logo: 'HS', company: 'Handshake', role: 'AI Systems Quality Analyst', date: 'Apr 2026 - Present', type: 'Contract', color: '#06b6d4',
    desc: 'I ensure the reliability and accuracy of AI-driven systems by designing rigorous validation pipelines. I conduct in-depth performance analysis and implement quality assurance frameworks that maintain production-grade standards.',
  },
  {
    logo: 'LE', company: 'Lavner Education', role: 'AI/ML Instructor', date: 'June 2026 - Aug 2026', type: 'Full-time', color: '#10b981',
    desc: 'I teach artificial intelligence and machine learning concepts to students of all levels. I develop curriculum that connects theoretical foundations with practical programming applications to inspire the next generation of technologists.',
  },
  {
    logo: 'SL', company: 'San Leandro 2050', role: 'Data Systems Engineer', date: 'Oct 2024 - May 2025', type: 'Internship', color: '#3b82f6',
    desc: 'I designed reliable data pipelines and cloud-based infrastructure to support urban planning analytics. I turned raw municipal data into structured and actionable insights that informed community development and long-term strategic initiatives.',
  },
]

function getVisibleCount() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function ExperienceCarousel() {
  const [[page, dir], setPage] = useState([0, 0])
  const visible = getVisibleCount()
  const maxPage = Math.max(0, experiences.length - visible)

  const paginate = (newDir: number) => {
    setPage(([prev]) => {
      const next = Math.max(0, Math.min(maxPage, prev + newDir))
      return [next, newDir]
    })
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={page}
            custom={dir}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {experiences.slice(page, page + visible).map((exp) => (
              <div
                key={exp.company}
                className="glass-card rounded-2xl p-8 card-hover transition-all cursor-default flex flex-col"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0"
                    style={{ background: `linear-gradient(135deg, ${exp.color}25, ${exp.color}50)`, color: exp.color }}
                  >
                    {exp.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                    <p className="text-sm text-white/80">{exp.role}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70 leading-relaxed flex-1">{exp.desc}</p>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-sm text-white/60">{exp.date}</span>
                  <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/80">
                    {exp.type}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => paginate(-1)}
          disabled={page === 0}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`w-2 h-2 rounded-full transition-all ${
                i === page ? 'bg-cyan-400 w-6' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          disabled={page >= maxPage}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
