import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Sparkles, ArrowRight } from 'lucide-react'
import Button from './Button'

interface HeaderProps {
  activeSection: string
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const logoVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        type: 'spring',
        stiffness: 200,
        damping: 15
      } 
    },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  const textRevealVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const navItemVariants = {
    initial: { y: -30, opacity: 0, scale: 0.8 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  const mobileItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300
      }
    })
  }

  const letterAnimation = {
    initial: { y: 50, opacity: 0, rotate: -10 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 200
      }
    })
  }

  const logoLetters = 'CODEFINIAL'.split('')

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 lg:top-0 top-12 ${
        isScrolled 
          ? 'bg-background-main/95 backdrop-blur-2xl border-b border-accent-primary/30 shadow-2xl shadow-accent-primary/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0"
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-24">
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <motion.div
              className="relative w-16 h-16 flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/Neon%20C-F%20Orbital%20Emblem.png"
                alt="Codefinial Logo"
                className="w-full h-full object-contain"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <div className="flex flex-col">
              <motion.div 
                className="flex items-center"
                variants={textRevealVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
              >
                {logoLetters.map((letter, i) => (
                  <motion.span
                    key={letter}
                    custom={i}
                    variants={letterAnimation}
                    initial="initial"
                    animate="animate"
                    className="text-text-main font-black text-2xl tracking-wider text-gradient"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
              <div className="flex items-center space-x-2">
                <span className="text-accent-secondary font-bold text-base tracking-[0.3em]">
                  DIGITAL SOLUTIONS
                </span>
              </div>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 + index * 0.08 }}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-6 py-3 text-base font-bold transition-all duration-300 rounded-xl group overflow-hidden ${
                  activeSection === link.href.slice(1) 
                    ? 'text-accent-primary bg-accent-primary/10' 
                    : 'text-text-secondary hover:text-text-main hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-xl ${
                    activeSection === link.href.slice(1) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full ${
                    activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            className="hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="md" 
                onClick={() => scrollToSection('#book-call')}
                className="shadow-2xl shadow-accent-primary/30 hover:shadow-accent-primary/50 px-8 py-4 text-base font-bold relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </motion.div>
          </motion.div>

          <motion.button
            className="lg:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center text-accent-primary hover:from-accent-primary/30 hover:to-accent-secondary/30 transition-all border border-accent-primary/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 180, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -180, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 top-24 lg:hidden bg-white/95 backdrop-blur-2xl z-40 overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    custom={index}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center justify-between p-5 text-left text-xl font-bold rounded-2xl transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 text-accent-primary border-2 border-accent-primary/50 shadow-lg shadow-accent-primary/20'
                        : 'text-text-secondary hover:bg-gradient-to-r hover:from-accent-primary/10 hover:to-accent-secondary/10 hover:text-text-main border-2 border-transparent'
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center space-x-3">
                      <Sparkles className="w-5 h-5" />
                      {link.name}
                    </span>
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                ))}
                
                <motion.div
                  custom={navLinks.length}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-8"
                >
                  <Button
                    size="lg"
                    className="w-full shadow-2xl shadow-accent-primary/30 text-lg font-bold py-5"
                    onClick={() => scrollToSection('#book-call')}
                  >
                    <span className="flex items-center justify-center">
                      Book a Free Consultation
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </span>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
