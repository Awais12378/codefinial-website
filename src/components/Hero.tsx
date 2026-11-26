import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'
import Section from './Section'

const Hero = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-20 bg-offWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-primary text-sm font-semibold tracking-wide">YOUR TECHNOLOGY PARTNER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-textPrimary leading-tight"
            >
              Empowering Your Success With <span className="text-accent">Digital Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-textSecondary leading-relaxed max-w-xl"
            >
              From custom software and high-performance websites to intelligent AI automation and cybersecurity, CODEFINIAL helps businesses turn complex challenges into powerful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary"
                onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="secondary"
                onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
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
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80)' }}
              >
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8">
                  <h3 className="text-4xl font-black text-white mb-4 text-center drop-shadow-lg">Digital Innovation</h3>
                  <p className="text-white font-bold text-center text-lg leading-relaxed drop-shadow-md">
                    Transform your business with cutting-edge technology solutions.
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

export default Hero
