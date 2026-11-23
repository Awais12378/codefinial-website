import { motion } from 'framer-motion'
import Section from './Section'

const techCategories = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'Tailwind CSS', icon: '🎨' }
    ]
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'REST APIs', icon: '🔌' }
    ]
  },
  {
    name: 'Automation & AI',
    technologies: [
      { name: 'n8n', icon: '🔄' },
      { name: 'OpenAI APIs', icon: '🤖' },
      { name: 'AI Integrations', icon: '🧠' },
      { name: 'Webhooks', icon: '🔗' },
      { name: 'Workflow Automation', icon: '⚙️' }
    ]
  },
  {
    name: 'Cybersecurity',
    technologies: [
      { name: 'OWASP', icon: '🛡️' },
      { name: 'Burp Suite', icon: '🔍' },
      { name: 'Nmap', icon: '📡' },
      { name: 'Security Testing', icon: '🔒' },
      { name: 'Vulnerability Assessment', icon: '🎯' }
    ]
  }
]

const TechnologyStack = () => {
  return (
    <Section id="technology" className="bg-transparent">
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
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-multicolor-alt mb-4"
          >
            <span className="text-white text-sm font-medium tracking-wide">TECHNOLOGY STACK</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-4">
            Technology We Work With
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Modern tools and frameworks for building reliable, scalable, and secure solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-multicolor p-1 rounded-3xl shadow-2xl"
            >
              <div className="bg-background-card/95 backdrop-blur-sm border border-accent-primary/10 rounded-3xl p-6 h-full">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-lg font-bold text-text-main mb-4"
                >
                  {category.name}
                </motion.h3>
                <div className="space-y-3">
                  {category.technologies.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ x: 5, scale: 1.05 }}
                      className="flex items-center space-x-3 text-white hover:text-accent-primary transition-colors cursor-default"
                    >
                      <motion.span
                        whileHover={{ rotate: 10 }}
                        className="text-xl"
                      >
                        {tech.icon}
                      </motion.span>
                      <span className="text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

export default TechnologyStack
