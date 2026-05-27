import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import ExperienceCarousel from './components/ExperienceCarousel'
import Collaborations from './components/Collaborations'
import ProjectsGrid from './components/ProjectsGrid'
import ContactForm from './components/ContactForm'

const sectionAnim = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { type: 'spring', stiffness: 80, damping: 18 },
}

function App() {
  return (
    <div className="relative min-h-screen font-display text-white bg-gradient-to-br from-[#08080f] via-[#0f0f1a] to-[#1a1a2a]">
      <div className="relative z-10">
        <Navbar />

        <section id="work" className="min-h-screen pt-20 md:pt-24 px-4 md:px-4 flex items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center w-full">
            <div className="hidden md:order-1 md:flex items-center justify-center md:ml-8 mt-4 md:mt-0">
              <img
                src="/FangHeadshot.png"
                alt="Jason Fang"
                className="w-48 h-48 md:w-[26rem] md:h-[26rem] rounded-2xl object-cover shadow-2xl shadow-cyan-500/10"
              />
            </div>
            <div className="order-2 md:order-2">
              <Hero />
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 md:py-24 px-4 md:px-4">
          <motion.div {...sectionAnim} className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-xs md:text-sm font-mono text-cyan-400/80 mb-1.5">/ experience</p>
              <h2 className="text-3xl md:text-5xl font-display italic text-white">Creating impact across industries</h2>
            </div>
            <ExperienceCarousel />
          </motion.div>
        </section>

        <section id="projects" className="py-20 md:py-24 px-4 md:px-4">
          <motion.div {...sectionAnim} className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-xs md:text-sm font-mono text-cyan-400/80 mb-1.5">/ projects</p>
              <h2 className="text-3xl md:text-5xl font-display italic text-white">Building systems that matter</h2>
            </div>
            <ProjectsGrid />
          </motion.div>
        </section>

        <section id="collaborations" className="py-20 md:py-24 px-4 md:px-4">
          <motion.div {...sectionAnim} className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-xs md:text-sm font-mono text-cyan-400/80 mb-1.5">/ collaborations</p>
              <h2 className="text-3xl md:text-5xl font-display italic text-white">Trusted by industry leaders</h2>
            </div>
            <Collaborations />
          </motion.div>
        </section>

        <section id="contact" className="py-20 md:py-24 px-4 md:px-4">
          <motion.div {...sectionAnim} className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-xs md:text-sm font-mono text-cyan-400/80 mb-1.5">/ contact</p>
              <h2 className="text-3xl md:text-5xl font-display italic text-white">Send a message to connect</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default App
