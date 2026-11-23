import { motion } from 'framer-motion'
import { ArrowRight, Code, Shield, Zap, Globe, Sparkles, Cpu } from 'lucide-react'
import Button from './Button'
import Section from './Section'

const Hero = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-multicolor border border-white/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium tracking-wide">YOUR TECHNOLOGY PARTNER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-main leading-tight"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Build Smarter.
              </motion.span>
              <motion.span
                className="block text-gradient"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                Work Faster.
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Stay Secure.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg sm:text-xl text-white leading-relaxed max-w-xl"
            >
              From custom software and high-performance websites to intelligent AI automation and cybersecurity, Codefinial helps businesses turn complex challenges into powerful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => document.querySelector('#book-call')?.scrollIntoView({ behavior: 'smooth' })}
                  className="shadow-2xl shadow-accent-primary/30 hover:shadow-accent-primary/50"
                >
                  Let's Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="backdrop-blur-sm"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-gradient-multicolor rounded-full"
                />
                <span className="text-sm text-white">Available for Projects</span>
              </div>
              <div className="h-4 w-px bg-accent-primary/30" />
              <span className="text-sm text-white">Technology solutions built around your business goals</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-lg mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              {/* Main card */}
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

                <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-black/60 border border-white/20 rounded-2xl p-5 hover:border-white/40 transition-all cursor-pointer group"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-multicolor rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                        >
                          <Code className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-white font-semibold mb-1">Software</h3>
                        <p className="text-white/70 text-xs">Custom Solutions</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-black/60 border border-white/20 rounded-2xl p-5 hover:border-white/40 transition-all cursor-pointer group"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-multicolor-alt rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                        >
                          <Zap className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-white font-semibold mb-1">Automation</h3>
                        <p className="text-white/70 text-xs">AI Workflows</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-black/60 border border-white/20 rounded-2xl p-5 hover:border-white/40 transition-all cursor-pointer group"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-multicolor rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                        >
                          <Shield className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-white font-semibold mb-1">Security</h3>
                        <p className="text-white/70 text-xs">Penetration Testing</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-black/60 border border-white/20 rounded-2xl p-5 hover:border-white/40 transition-all cursor-pointer group"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-multicolor-alt rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                        >
                          <Globe className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-white font-semibold mb-1">Web Dev</h3>
                        <p className="text-white/70 text-xs">Modern Sites</p>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-multicolor rounded-2xl p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Cpu className="w-5 h-5 text-white" />
                          <span className="text-white text-sm font-medium">Engineering the Future</span>
                        </div>
                        <div className="flex space-x-1">
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-white/70 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-multicolor rounded-2xl flex items-center justify-center shadow-xl shadow-accent-primary/30"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-black border border-white/30 rounded-xl flex items-center justify-center shadow-xl"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
