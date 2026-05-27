import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const collaborations = [
  { logo: 'GO', company: 'Google', period: '2025 - 2026' },
  { logo: 'MT', company: 'Meta', period: '2025 - 2026' },
  { logo: 'JP', company: 'JP Morgan Chase', period: '2025 - 2026' },
  { logo: 'AP', company: 'Apple', period: '2025 - 2026' },
  { logo: 'NV', company: 'NVIDIA', period: '2025 - 2026' },
  { logo: 'TS', company: 'Tesla', period: '2025' },
  { logo: 'VS', company: 'Visa', period: '2025' },
  { logo: 'IN', company: 'Intel', period: '2024 - 2026' },
  { logo: 'UB', company: 'Uber', period: '2023 - 2024' },
  { logo: 'FX', company: 'FedEx', period: '2023 - 2024' },
  { logo: 'AZ', company: 'Amazon', period: '2023' },
  { logo: 'MS', company: 'Microsoft', period: '2022 - 2023' },
]

const groupSize = 4
const groups: typeof collaborations[] = []
for (let i = 0; i < collaborations.length; i += groupSize) {
  groups.push(collaborations.slice(i, i + groupSize))
}

export default function Collaborations() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % groups.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

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
              className="glass-card rounded-2xl p-6 card-hover transition-all flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-2xl font-bold shrink-0">
                {c.logo}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{c.company}</h3>
                <p className="text-sm text-white/60 mt-0.5">{c.period}</p>
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
