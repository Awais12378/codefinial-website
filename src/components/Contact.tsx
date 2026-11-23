import { motion } from 'framer-motion'
import { Mail, ArrowRight, MapPin, Phone } from 'lucide-react'
import Button from './Button'
import Section from './Section'
import siteConfig from '../config/siteConfig'

const Contact = () => {
  const { contact } = siteConfig

  return (
    <Section id="contact" className="bg-transparent">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Whether you need a new website, custom software, intelligent automation, or a security assessment, let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 backdrop-blur-sm border border-accent-primary/30 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-text-main mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center p-4 bg-background-card/80 backdrop-blur-sm rounded-2xl hover:bg-background-card transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email Us</p>
                  <p className="text-text-main font-semibold">{contact.email}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center p-4 bg-background-card/80 backdrop-blur-sm rounded-2xl hover:bg-background-card transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-secondary to-accent-primary rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="text-text-main font-semibold">Remote / Worldwide</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center p-4 bg-background-card/80 backdrop-blur-sm rounded-2xl hover:bg-background-card transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Response Time</p>
                  <p className="text-text-main font-semibold">Within 24 Hours</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button
                size="lg"
                onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full shadow-2xl shadow-accent-primary/30"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-background-card/95 to-background-secondary/95 backdrop-blur-sm border border-accent-primary/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-text-main mb-6">Ready to Start?</h3>
              
              <div className="space-y-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-accent-primary/10 border border-accent-primary/30 rounded-2xl"
                >
                  <h4 className="text-text-main font-semibold mb-2">🚀 Software Development</h4>
                  <p className="text-white/70 text-sm">Custom applications tailored to your business needs</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-accent-secondary/10 border border-accent-secondary/30 rounded-2xl"
                >
                  <h4 className="text-text-main font-semibold mb-2">🌐 Web Development</h4>
                  <p className="text-white/70 text-sm">Modern, high-performance websites</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-accent-primary/10 border border-accent-primary/30 rounded-2xl"
                >
                  <h4 className="text-text-main font-semibold mb-2">⚡ AI Automation</h4>
                  <p className="text-white/70 text-sm">Streamline your workflows with intelligent automation</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-accent-secondary/10 border border-accent-secondary/30 rounded-2xl"
                >
                  <h4 className="text-text-main font-semibold mb-2">🛡️ Cybersecurity</h4>
                  <p className="text-white/70 text-sm">Authorized penetration testing and security assessments</p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Contact
