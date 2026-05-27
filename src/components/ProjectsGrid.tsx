import { useState } from 'react'
import { X, ExternalLink, Github } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const allProjects = [
  {
    id: 'metricly-ai', title: 'Metricly AI', desc: 'Business analytics with metric evaluation',
    tech: ['Chart.js', 'LocalStorage API', 'JavaScript'],
    details: 'A business analytics platform that simulates metric evaluation, trend detection, and risk scoring using local datasets and interactive charting for data-driven decision making.',
    github: 'https://github.com/codexfang/metricly-ai', demo: 'https://codexfang.github.io/metricly-ai/',
    skills: ['Data Visualization', 'Metric Analysis', 'Risk Scoring', 'Trend Detection', 'Local Data Processing'],
    showSkills: 5,
  },
  {
    id: 'pomodoro-lab', title: 'Pomodoro Lab', desc: 'Productivity with session tracking',
    tech: ['Chart.js', 'LocalStorage API', 'JavaScript'],
    details: 'A focused productivity dashboard that combines Pomodoro timers with detailed session analytics. Track your focus patterns over time.',
    github: 'https://github.com/codexfang/pomodoro-lab', demo: 'https://codexfang.github.io/pomodoro-lab/',
    skills: ['Data Visualization', 'Session Management', 'UI/UX Design', 'State Management', 'Analytics'],
    showSkills: 2,
  },
  {
    id: 'forecast-os', title: 'Forecast OS', desc: 'Weather intelligence dashboard',
    tech: ['OpenWeather API', 'Chart.js', 'JavaScript'],
    details: 'A comprehensive weather intelligence dashboard providing 7-day forecasts with trend analysis and historical data comparison.',
    github: 'https://github.com/codexfang/forecast-os', demo: 'https://codexfang.github.io/forecast-os/',
    skills: ['Data Visualization', 'REST API Integration', 'Async Programming', 'Trend Analysis', 'Responsive Design'],
    showSkills: 2,
  },
  {
    id: 'recallify', title: 'Recallify', desc: 'Spaced repetition flashcards',
    tech: ['IndexedDB', 'LocalStorage', 'JavaScript'],
    details: 'An intelligent flashcard application using the SM-2 spaced repetition algorithm to optimize learning and retention.',
    github: 'https://github.com/codexfang/recallify', demo: 'https://codexfang.github.io/recallify/',
    skills: ['SM-2 Algorithm', 'Spaced Repetition', 'Data Persistence', 'UX Design', 'Cognitive Science'],
    showSkills: 5,
  },
  {
    id: 'fintrix-ai', title: 'Fintrix AI', desc: 'Financial news analyzer',
    tech: ['TypeScript', 'TensorFlow.js', 'News API'],
    details: 'Analyzes financial news articles and predicts market impact using TensorFlow.js-based natural language processing.',
    github: 'https://github.com/codexfang/fintrix-ai', demo: 'https://codexfang.github.io/fintrix-ai/',
    skills: ['Natural Language Processing', 'Financial Analysis', 'ML Model Training', 'API Integration', 'Data Processing'],
    showSkills: 5,
  },
  {
    id: 'sentinel-orbit', title: 'Sentinel Orbit', desc: 'Phishing URL detector',
    tech: ['JavaScript', 'ML Classifier', 'Browser Extension API'],
    details: 'A browser-based security tool that detects phishing URLs using machine learning classification models trained on URL patterns.',
    github: 'https://github.com/codexfang/sentinel-orbit', demo: 'https://codexfang.github.io/sentinel-orbit/',
    skills: ['Cybersecurity', 'Machine Learning', 'Pattern Recognition', 'URL Analysis', 'Threat Detection'],
    showSkills: 2,
  },
]

const layouts = [
  { left: 'md:col-span-2', right: 'md:col-span-1', align: 'items-start' },
  { left: 'md:col-span-1', right: 'md:col-span-2', align: 'items-end' },
  { left: 'md:col-span-2', right: 'md:col-span-1', align: 'items-center' },
]

export default function ProjectsGrid() {
  const [selected, setSelected] = useState<typeof allProjects[number] | null>(null)

  const pairs = []
  for (let i = 0; i < allProjects.length; i += 2) {
    pairs.push({
      first: allProjects[i],
      second: allProjects[i + 1],
      layout: layouts[(i / 2) % layouts.length],
    })
  }

  return (
    <>
      <div className="space-y-6">
        {pairs.map(({ first, second, layout }) => (
          <div key={first.id} className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${layout.align}`}>
            <div className={layout.left}>
              <div className="glass-card rounded-2xl p-6 card-hover transition-all h-full flex flex-col">
                <h3 className="text-lg font-semibold text-white">{first.title}</h3>
                <p className="text-sm text-white/80 mt-2 flex-1">{first.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {first.skills.slice(0, first.showSkills).map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelected(first)}
                  className="mt-4 text-xs text-cyan-400 hover:text-cyan-300 transition-colors self-start"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
            {second && (
              <div className={layout.right}>
                <div className="glass-card rounded-2xl p-6 card-hover transition-all h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-white">{second.title}</h3>
                  <p className="text-sm text-white/80 mt-2 flex-1">{second.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {second.skills.slice(0, second.showSkills).map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                        {s}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelected(second)}
                    className="mt-4 text-xs text-cyan-400 hover:text-cyan-300 transition-colors self-start"
                  >
                    View Details &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative glass rounded-2xl p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-3xl font-semibold text-white">{selected.title}</h3>
              <p className="text-base text-white/80 mt-4 leading-relaxed">{selected.details}</p>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-white/60 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2.5">
                  {selected.tech.map((t) => (
                    <span key={t} className="text-sm px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-sm uppercase tracking-wider text-white/60 mb-3">Skills Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {selected.skills.map((s) => (
                    <span key={s} className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-4 h-4" /> Source
                </a>
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
