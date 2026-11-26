import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import Button from './Button'
import Section from './Section'

const Contact = () => {
  return (
    <Section id="contact" className="bg-offWhite py-24">
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
            <span className="text-primary text-sm font-semibold tracking-wide">CONTACT US</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
            Have a Project in <span className="text-accent">Mind?</span>
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Whether you need a new website, custom software, intelligent automation, or a security assessment, let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <motion.a
                href="mailto:contact@codefinial.tech"
                whileHover={{ x: 5 }}
                className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email Us</p>
                  <p className="text-white font-semibold">contact@codefinial.tech</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center p-4 bg-white/10 rounded-xl"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Response Time</p>
                  <p className="text-white font-semibold">Within 24 Hours</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button
                variant="primary"
                onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-lightGrey"
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-6">Ready to Start?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-offWhite rounded-xl">
                <h4 className="text-textPrimary font-semibold mb-2">Software Development</h4>
                <p className="text-textSecondary text-sm">Custom applications tailored to your business needs</p>
              </div>

              <div className="p-4 bg-offWhite rounded-xl">
                <h4 className="text-textPrimary font-semibold mb-2">Web Development</h4>
                <p className="text-textSecondary text-sm">Modern, high-performance websites</p>
              </div>

              <div className="p-4 bg-offWhite rounded-xl">
                <h4 className="text-textPrimary font-semibold mb-2">AI Automation</h4>
                <p className="text-textSecondary text-sm">Streamline your workflows with intelligent automation</p>
              </div>

              <div className="p-4 bg-offWhite rounded-xl">
                <h4 className="text-textPrimary font-semibold mb-2">Cybersecurity</h4>
                <p className="text-textSecondary text-sm">Authorized penetration testing and security assessments</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
