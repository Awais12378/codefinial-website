import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'
import Section from './Section'

const Splash = () => {
  return (
    <Section className="min-h-screen flex items-center pt-20 bg-offWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-primary text-sm font-semibold tracking-wide">WELCOME TO CODEFINIAL</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-textPrimary leading-tight"
            >
              Empowering Your <span className="text-accent">Success</span> With Digital Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-textSecondary leading-relaxed max-w-xl"
            >
              From custom software and high-performance websites to intelligent AI automation and cybersecurity, we help businesses turn complex challenges into powerful digital solutions.
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
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Button>
              <Button 
                variant="secondary"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-lightGrey"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                <div className="text-textSecondary text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-textSecondary text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-textSecondary text-sm">Client Satisfaction</div>
              </div>
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
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80)' }}
              >
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8">
                  <h3 className="text-4xl font-black text-white mb-4 text-center drop-shadow-lg">Building the Future</h3>
                  <p className="text-white font-bold text-center text-lg leading-relaxed drop-shadow-md">
                    We deliver innovative solutions that transform businesses and drive growth.
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-black text-xl font-bold">10+</span>
                    </div>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-black text-xl font-bold">50+</span>
                    </div>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-black text-xl font-bold">100%</span>
                    </div>
                  </div>
                  <div className="mt-4 text-white font-bold text-sm space-y-1 drop-shadow-md">
                    <p>Years Experience</p>
                    <p>Projects Completed</p>
                    <p>Client Satisfaction</p>
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

export default Splash
