import { motion } from 'framer-motion'
import { Code, Globe, Zap, Shield, ArrowRight, FileText, GraduationCap, BookOpen, Laptop } from 'lucide-react'
import Section from './Section'

const services = [
  {
    icon: Code,
    name: 'Software Development',
    description: 'We develop custom software solutions designed around your business requirements, helping you streamline operations and manage complex processes.',
    capabilities: [
      'Custom business applications',
      'CRM development',
      'Inventory management systems',
      'Admin dashboards',
      'SaaS application development',
      'API development and integrations',
      'Database architecture',
      'Internal business management systems'
    ],
    cta: 'Discuss Your Software Project'
  },
  {
    icon: Globe,
    name: 'Web Development',
    description: 'We create modern, responsive, and high-performance websites that strengthen your online presence and turn visitors into customers.',
    capabilities: [
      'Business websites',
      'Landing pages',
      'E-commerce websites',
      'Website redesign',
      'Custom web applications',
      'Frontend and backend development',
      'API integration',
      'Performance optimization',
      'Responsive UI/UX'
    ],
    cta: 'Build Your Website'
  },
  {
    icon: Zap,
    name: 'AI & Business Automation',
    description: 'We automate repetitive business processes using intelligent workflows, AI integrations, and powerful automation platforms.',
    capabilities: [
      'n8n workflow automation',
      'AI-powered business workflows',
      'Automated lead management',
      'CRM automation',
      'Email automation',
      'AI chatbot integrations',
      'Data synchronization',
      'Automated reporting',
      'Third-party API integrations',
      'Business process automation'
    ],
    cta: 'Automate Your Business'
  },
  {
    icon: Shield,
    name: 'Cybersecurity & Penetration Testing',
    description: 'We help businesses identify security weaknesses, assess application security, and improve their overall digital security posture through authorized security assessments.',
    capabilities: [
      'Authorized website penetration testing',
      'Web application security assessments',
      'Vulnerability identification',
      'Security configuration reviews',
      'API security assessments',
      'OWASP Top 10 testing',
      'Security recommendations',
      'Vulnerability assessment reports'
    ],
    cta: 'Discuss Your Security Assessment',
    note: 'All security assessments are conducted with prior written authorization and an agreed testing scope.'
  },
  {
    icon: FileText,
    name: 'Assignment Writing',
    description: 'Professional academic writing services for various assignments and coursework across multiple subjects and disciplines.',
    capabilities: [
      'Essay writing',
      'Research papers',
      'Case studies',
      'Coursework assistance',
      'Literature reviews',
      'Academic editing',
      'Proofreading services',
      'Citation formatting'
    ],
    cta: 'Get Assignment Help'
  },
  {
    icon: BookOpen,
    name: 'University Projects',
    description: 'Complete university project assistance from conceptualization to final submission, ensuring academic excellence.',
    capabilities: [
      'Project planning and structuring',
      'Research methodology',
      'Data analysis',
      'Report writing',
      'Presentation preparation',
      'Project documentation',
      'Quality assurance',
      'On-time delivery'
    ],
    cta: 'Start Your Project'
  },
  {
    icon: GraduationCap,
    name: 'Thesis Writing',
    description: 'Expert thesis and dissertation writing services with comprehensive research support and academic guidance.',
    capabilities: [
      'Thesis proposal development',
      'Literature review',
      'Research methodology design',
      'Data collection and analysis',
      'Thesis writing and editing',
      'Statistical analysis',
      'Plagiarism-free content',
      'Formatting and citation'
    ],
    cta: 'Discuss Your Thesis'
  },
  {
    icon: Laptop,
    name: 'Final Year Projects',
    description: 'Software-based final year projects for computer science and IT students with complete development and documentation.',
    capabilities: [
      'Project ideation and planning',
      'Software development',
      'Database design',
      'Frontend and backend',
      'Technical documentation',
      'Source code delivery',
      'Project report writing',
      'Presentation and viva preparation'
    ],
    cta: 'Build Your Final Year Project'
  }
]

const Services = () => {
  return (
    <Section id="services" className="bg-primary py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
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
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/20 mb-4"
        >
          <div className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-accent text-sm font-semibold tracking-wide">OUR SERVICES</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Boost Your Brand With Our <span className="text-accent">Expertise</span>
        </h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          Technology should make your business simpler, faster, and more efficient. We deliver solutions that help you achieve exactly that.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon
          const isMiddle = index === 1 || index === 2 || index === 5 || index === 6
          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden border ${
                isMiddle 
                  ? 'bg-accent border-accent' 
                  : 'bg-white border-lightGrey'
              }`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 h-full flex flex-col">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${isMiddle ? 'bg-primary' : 'bg-primary/10'}`}
                >
                  <Icon className={`w-7 h-7 ${isMiddle ? 'text-accent' : 'text-primary'}`} />
                </motion.div>

                <h3 className={`text-xl font-bold mb-3 ${isMiddle ? 'text-primary' : 'text-textPrimary'}`}>
                  {service.name}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${isMiddle ? 'text-primary/95' : 'text-textSecondary'}`}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4 flex-grow">
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <li
                      key={capability}
                      className={`flex items-start text-xs ${
                        isMiddle ? 'text-primary/90' : 'text-textSecondary'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        isMiddle ? 'bg-primary' : 'bg-accent'
                      }`} />
                      {capability}
                    </li>
                  ))}
                </ul>

                {service.note && (
                  <p className={`text-xs mb-4 italic ${isMiddle ? 'text-primary/80' : 'text-textSecondary'}`}>
                    {service.note}
                  </p>
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto"
                >
                  <button
                    onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`flex items-center text-sm font-semibold ${
                      isMiddle ? 'text-primary font-bold' : 'text-primary'
                    }`}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default Services
