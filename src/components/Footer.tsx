import { motion } from 'framer-motion'
import { Mail, ArrowUp, Heart, Sparkles, Zap } from 'lucide-react'
import siteConfig from '../config/siteConfig'

const Footer = () => {
  const { contact } = siteConfig
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    { name: 'Software Development', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'AI Automation', href: '#services' },
    { name: 'Penetration Testing', href: '#services' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-multicolor p-1 backdrop-blur-sm"
    >
      <div className="bg-black/90 backdrop-blur-sm rounded-t-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-4 cursor-pointer"
                onClick={() => scrollToTop()}
              >
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  src="/Neon CF Monogram App Icon.png"
                  alt="Codefinial Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-white font-bold text-lg leading-none"
                  >
                    CODEFINIAL
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-accent-secondary font-semibold text-sm leading-none mt-1"
                  >
                    DIGITAL SOLUTIONS
                  </motion.span>
                </div>
              </motion.div>
              <p className="text-white text-sm mb-4">
                "Build. Automate. Secure."
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Technology solutions agency helping businesses build, modernize, automate, and secure their digital operations.
              </p>
              
              {/* Animated badges */}
              <motion.div
                className="flex space-x-2 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-3 py-1 bg-gradient-multicolor-alt rounded-full text-xs text-white font-medium"
                >
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Quality
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="px-3 py-1 bg-gradient-multicolor rounded-full text-xs text-white font-medium"
                >
                  <Zap className="w-3 h-3 inline mr-1" />
                  Fast
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h4
                whileHover={{ x: 5 }}
                className="text-white font-semibold mb-4"
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="text-white/70 text-sm hover:text-white transition-colors inline-flex items-center"
                    >
                      <span className="w-1 h-1 bg-gradient-multicolor rounded-full mr-2" />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h4
                whileHover={{ x: 5 }}
                className="text-white font-semibold mb-4"
              >
                Services
              </motion.h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <motion.a
                      href={service.href}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="text-white/70 text-sm hover:text-white transition-colors inline-flex items-center"
                    >
                      <span className="w-1 h-1 bg-gradient-multicolor-alt rounded-full mr-2" />
                      {service.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h4
                whileHover={{ x: 5 }}
                className="text-white font-semibold mb-4"
              >
                Connect
              </motion.h4>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${contact.email}`}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-white text-sm hover:text-white/80 transition-colors"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-8 h-8 bg-gradient-multicolor rounded-lg flex items-center justify-center mr-3"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </motion.div>
                  Email
                </motion.a>
                <motion.button
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center text-white text-sm font-medium hover:text-accent-primary transition-colors"
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="w-8 h-8 bg-gradient-multicolor-alt rounded-lg flex items-center justify-center mr-3"
                  >
                    <ArrowUp className="w-4 h-4 text-white" />
                  </motion.div>
                  Book a Call
                </motion.button>
              </div>
              
              {/* Animated social icons */}
              <motion.div
                className="mt-6 flex space-x-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 bg-gradient-multicolor rounded-full flex items-center justify-center cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className="w-10 h-10 bg-gradient-multicolor-alt rounded-full flex items-center justify-center cursor-pointer"
                >
                  <Zap className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="text-white/70 text-sm"
              >
                © 2026 Codefinial. All rights reserved.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 text-white/70 text-sm"
              >
                Made with <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-accent-primary fill-accent-primary inline mx-1" />
                </motion.span> by Codefinial
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
