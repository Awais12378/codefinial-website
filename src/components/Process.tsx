import { motion } from 'framer-motion'
import { Search, FileText, Code, CheckCircle, Headphones } from 'lucide-react'
import Section from './Section'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'We understand your business, objectives, current challenges, and project requirements.'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Strategy & Planning',
    description: 'We define the solution, technical approach, deliverables, and project scope.'
  },
  {
    icon: Code,
    number: '03',
    title: 'Design & Development',
    description: 'We design, develop, integrate, and test the solution.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Testing & Delivery',
    description: 'We validate functionality, resolve issues, and prepare the final implementation.'
  },
  {
    icon: Headphones,
    number: '05',
    title: 'Support & Improvement',
    description: 'We provide documentation and discuss ongoing improvements and support where required.'
  }
]

const Process = () => {
  return (
    <Section id="process" className="bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-multicolor mb-4"
          >
            <span className="text-white text-sm font-medium tracking-wide">OUR PROCESS</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-4">
            From Idea to Implementation
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            A straightforward process designed to turn your requirements into reliable digital solutions.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-multicolor -translate-y-1/2"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="relative"
                >
                  <div className="bg-gradient-multicolor p-1 rounded-2xl shadow-2xl">
                    <div className="bg-black/90 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 bg-gradient-multicolor-alt rounded-xl flex items-center justify-center mb-4 relative z-10"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-3xl font-bold text-white mb-2"
                      >
                        {step.number}
                      </motion.div>
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-lg font-bold text-white mb-3"
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0.8 }}
                        className="text-white/80 text-sm leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Process
