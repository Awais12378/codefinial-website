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
    <Section id="why-choose-us" className="bg-offWhite py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-4"
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-primary text-sm font-semibold tracking-wide">WHY CHOOSE US</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                Why Our Clients <span className="text-accent">Believe We're Different</span>
              </h2>
              <p className="text-lg text-textSecondary">
                We combine technical expertise with a deep understanding of business needs to deliver solutions that truly make a difference.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-2xl p-5 border border-lightGrey"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-textPrimary mb-2">{feature.title}</h3>
                    <p className="text-sm text-textSecondary">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="bg-primary rounded-3xl p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
                  
                  {features.slice(4).map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-start space-x-4 mb-6 last:mb-0"
                      >
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                          <p className="text-white/80 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-lg"
              >
                <div className="text-primary font-bold text-lg">CF</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default WhyChooseUs
