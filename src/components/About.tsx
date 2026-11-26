import { motion } from 'framer-motion'
import Button from './Button'
import Section from './Section'

const About = () => {
  return (
    <Section id="about" className="bg-primary py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/20 mb-4"
            >
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold tracking-wide">ABOUT US</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Technology Built Around Your <span className="text-accent">Business</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/80 mb-6 leading-relaxed"
            >
              Codefinial is a technology solutions agency focused on helping businesses build, modernize, automate, and secure their digital operations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-white/80 mb-8 leading-relaxed"
            >
              We bring together software engineering, web development, intelligent automation, and cybersecurity to deliver practical solutions for real-world business challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-accent font-semibold mb-8"
            >
              Our goal is simple: help businesses use technology more effectively.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button 
                variant="primary"
                onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="aspect-square bg-cover bg-center relative"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80)' }}
              >
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8">
                  <h3 className="text-4xl font-black text-white mb-4 text-center drop-shadow-lg">Building the Future</h3>
                  <p className="text-white font-bold text-center text-lg leading-relaxed drop-shadow-md">
                    We deliver innovative solutions that transform businesses and drive growth.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-2">
                          <span className="text-primary font-black text-xl font-bold">3+</span>
                        </div>
                        <p className="text-white font-bold text-sm text-center drop-shadow-md">Years Experience</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-2">
                          <span className="text-primary font-black text-xl font-bold">50+</span>
                        </div>
                        <p className="text-white font-bold text-sm text-center drop-shadow-md">Projects Completed</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-2">
                          <span className="text-primary font-black text-xl font-bold">100%</span>
                        </div>
                        <p className="text-white font-bold text-sm text-center drop-shadow-md">Client Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default About
