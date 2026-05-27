import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react'

const words = ['intelligent', 'adaptive', 'predictive', 'autonomous', 'generative']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length)
        setVisible(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.2 }}
      className="flex flex-col justify-center h-full"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display italic text-white mb-3 leading-tight md:text-left">
        Jason Fang
      </h1>
      <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-lg md:text-left">
        Building{' '}
        <span
          className={`text-cyan-300 font-serif italic transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {words[wordIndex]}
        </span>{' '}
        systems at scale
      </p>
      <p className="text-white/70 text-sm sm:text-base max-w-lg mt-4 leading-relaxed md:text-left">
        As a driven student with a strong foundation in data analysis and computational modeling, I develop advanced platforms that integrate research, automation, and analytics to solve real-world problems.
      </p>

      <div className="flex flex-row items-center gap-3 sm:gap-4 mt-8">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all shrink-0"
        >
          Explore Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <div className="hidden sm:block w-16 md:w-24" />
        <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
          <a
            href="https://www.linkedin.com/in/jasonfangz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="https://github.com/codexfang"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="mailto:jason@fangux.com"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
