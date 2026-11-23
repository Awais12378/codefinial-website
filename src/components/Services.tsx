import { motion } from 'framer-motion'
import { Code, Globe, Zap, Shield, ArrowRight } from 'lucide-react'
import Button from './Button'
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
    cta: 'Discuss Your Software Project',
    backgroundImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
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
    cta: 'Build Your Website',
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
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
    cta: 'Automate Your Business',
    backgroundImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
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
    note: 'All security assessments are conducted with prior written authorization and an agreed testing scope.',
    backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  }
]

const Services = () => {
  return (
    <Section id="services" className="bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-multicolor mb-4"
        >
          <span className="text-white text-sm font-medium tracking-wide">OUR SERVICES</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-4">
          What We Build & What We Solve
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto">
          Technology should make your business simpler, faster, and more efficient. We deliver solutions that help you achieve exactly that.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black/50 transition-all duration-300" />
              
              <div className="relative p-8 h-full flex flex-col">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-multicolor rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-text-main mb-4">{service.name}</h3>
                <p className="text-white mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.capabilities.slice(0, 4).map((capability) => (
                    <motion.li
                      key={capability}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-sm text-white"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-multicolor rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {capability}
                    </motion.li>
                  ))}
                </ul>

                {service.note && (
                  <p className="text-xs text-white/70 mb-6 italic">
                    {service.note}
                  </p>
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
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
