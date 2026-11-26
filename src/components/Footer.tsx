import { motion } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
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
    { name: 'Cybersecurity', href: '#services' },
    { name: 'Assignment Writing', href: '#services' },
    { name: 'University Projects', href: '#services' },
  ]

  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="flex items-center space-x-3 mb-4 cursor-pointer"
              onClick={() => scrollToTop()}
            >
              <img
                src="/logo.png"
                alt="Codefinial Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">
                  CODEFINIAL
                </span>
                <span className="text-accent font-semibold text-sm leading-none mt-1">
                  DIGITAL SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Technology solutions agency helping businesses build, modernize, automate, and secure their digital operations.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@codefinial.tech"
                className="flex items-center text-white font-semibold text-sm hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@codefinial.tech
              </a>
              <button
                onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center text-white text-sm font-normal hover:text-accent transition-colors"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Book a Call
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2026 Codefinial. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
