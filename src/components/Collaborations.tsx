import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function getGroupSize() {
  if (typeof window === 'undefined') return 4
  return window.innerWidth < 640 ? 2 : 4
}

const collaborations = [
  { logo: 'AZ', company: 'Amazon' },
  { logo: 'NV', company: 'NVIDIA' },
  { logo: 'HF', company: 'Hugging Face' },
  { logo: 'LN', company: 'Linear' },
  { logo: 'RD', company: 'Render' },
  { logo: 'SB', company: 'Supabase' },
  { logo: 'FG', company: 'Figma' },
  { logo: 'ND', company: 'NordVPN' },
  { logo: 'IC', company: 'Incogni' },
  { logo: 'SY', company: 'Saily' },
]

function buildGroups(size: number) {
  const groups: typeof collaborations[] = []
  for (let i = 0; i < collaborations.length; i += size) {
    groups.push(collaborations.slice(i, i + size))
  }
  return groups
}

export default function Collaborations() {
  const [groupSize, setGroupSize] = useState(getGroupSize)
  const [current, setCurrent] = useState(0)
  const groups = buildGroups(groupSize)

  useEffect(() => {
    const onResize = () => setGroupSize(getGroupSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => { setCurrent(0) }, [groupSize])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % groups.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [groups.length])

  return (
    <div className="relative overflow-hidden" style={{ minHeight: 100 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {groups[current].map((c) => (
            <div
              key={c.company}
              className="glass-card rounded-2xl p-6 md:p-8 card-hover transition-all flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-2xl font-bold shrink-0">
                {c.logo}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{c.company}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2 mt-6">
        {groups.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-cyan-400 w-6' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
