import { motion } from 'framer-motion'
import Button from './Button'
import Section from './Section'

const About = () => {
  return (
    <Section id="about" className="bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-multicolor mb-4"
            >
              <span className="text-white text-sm font-medium tracking-wide">ABOUT US</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-6"
            >
              Technology Built Around Your Business by Codefinial
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-white mb-6 leading-relaxed"
            >
              Codefinial is a technology solutions agency focused on helping businesses build, modernize, automate, and secure their digital operations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-white mb-8 leading-relaxed"
            >
              We bring together software engineering, web development, intelligent automation, and cybersecurity to deliver practical solutions for real-world business challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-accent-primary font-semibold mb-8"
            >
              Our goal is simple: help businesses use technology more effectively.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="relative aspect-square max-w-lg mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="bg-gradient-multicolor p-1 rounded-3xl shadow-2xl relative overflow-hidden"
              >
                {/* Animated background elements */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
                />

                <div className="relative bg-black/90 backdrop-blur-sm border border-accent-primary/20 rounded-3xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-32 h-32 bg-gradient-multicolor-alt rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl"
                      >
                        🚀
                      </motion.div>
                    </motion.div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-4">
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-3 h-3 bg-gradient-multicolor rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-3 h-3 bg-gradient-multicolor-alt rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-3 h-3 bg-gradient-multicolor rounded-full"
                        />
                      </div>
                      <p className="text-text-secondary text-sm">Building the Future</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

export default About
