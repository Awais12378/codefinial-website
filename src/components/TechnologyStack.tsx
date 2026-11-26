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
    <Section id="technology" className="bg-offWhite py-24">
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
            <span className="text-primary text-sm font-semibold tracking-wide">TECHNOLOGY STACK</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
            Technology We <span className="text-accent">Work With</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Modern tools and frameworks for building reliable, scalable, and secure solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 border border-lightGrey"
            >
              <h3 className="text-lg font-bold text-textPrimary mb-4">{category.name}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-textSecondary hover:text-primary transition-colors cursor-default"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TechnologyStack
