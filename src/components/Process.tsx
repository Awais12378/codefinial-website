import { motion } from 'framer-motion'
import { Search, FileText, Code, CheckCircle, Headphones } from 'lucide-react'
import Section from './Section'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover Your Goals',
    description: 'Understand the client\'s business, target audience and objectives.'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Develop Your Strategy',
    description: 'Create a customized digital marketing and creative strategy.'
  },
  {
    icon: Code,
    number: '03',
    title: 'Execute and Optimize',
    description: 'Launch campaigns, monitor performance and improve results.'
  }
]

const Process = () => {
  return (
    <Section id="process" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-4"
          >
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-primary text-sm font-semibold tracking-wide">OUR PROCESS</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
            Step-by-Step to Your <span className="text-accent">Growth</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            A straightforward process designed to turn your requirements into reliable digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="bg-offWhite rounded-2xl p-8 border border-lightGrey h-full">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-6xl font-bold text-primary/10 mb-4"
                  >
                    {step.number}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-accent" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-textPrimary mb-3">{step.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 -translate-y-1/2"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Process
