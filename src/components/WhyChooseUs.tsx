import { motion } from 'framer-motion'
import { CheckCircle, Zap, Shield, Users, TrendingUp, Clock } from 'lucide-react'
import Section from './Section'

const features = [
  {
    icon: CheckCircle,
    title: 'Quality First',
    description: 'We deliver clean, maintainable, and scalable code that stands the test of time.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We prioritize efficiency without compromising on quality, getting your solution to market faster.'
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Security is built into everything we do, from design to deployment.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team brings years of experience across multiple technologies and industries.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'We build solutions that grow with your business, adapting to changing needs.'
  },
  {
    icon: Clock,
    title: 'Ongoing Support',
    description: 'We don\'t just deliver and disappear. We provide ongoing support and improvements.'
  }
]

const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" className="bg-transparent">
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
            <span className="text-white text-sm font-medium tracking-wide">WHY CHOOSE US</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-4">
            Why Businesses Choose Codefinial
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            We combine technical expertise with a deep understanding of business needs to deliver solutions that truly make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-multicolor p-1 rounded-3xl shadow-2xl group"
              >
                <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-6 h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-multicolor-alt rounded-2xl flex items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}

export default WhyChooseUs
