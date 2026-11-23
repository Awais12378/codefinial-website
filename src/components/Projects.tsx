import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import { projects } from '../config/projectsConfig'

const categories = ['All', 'Software', 'Web', 'Automation', 'Security']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <Section id="projects" className="bg-transparent">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Selected Projects
          </motion.h2>
          <motion.p
            className="text-lg text-white max-w-3xl mx-auto"
          >
            Explore some of the digital products, software solutions, and automation systems developed by our team.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-text-main shadow-lg shadow-accent-primary/30'
                  : 'bg-background-card/80 backdrop-blur-sm border border-accent-primary/20 text-white hover:border-accent-primary/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="bg-background-card/95 backdrop-blur-sm border border-accent-primary/10 rounded-2xl overflow-hidden hover:border-accent-primary/30 transition-all duration-300 shadow-xl"
            >
              <motion.div
                className="aspect-video bg-gradient-to-br from-background-secondary to-background-card flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center p-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="w-8 h-8 bg-accent-primary/20 rounded"></div>
                  </motion.div>
                  <p className="text-white text-sm">Project Screenshot</p>
                  <p className="text-white/50 text-xs mt-1">Replace with actual image</p>
                </div>
              </motion.div>

              <div className="p-6">
                <motion.div 
                  className="flex items-center justify-between mb-3"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xs font-medium text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-text-main mb-2"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-white text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs text-white bg-background-secondary px-2 py-1 rounded cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoLink !== '#' && (
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-sm text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubLink !== '#' && (
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-sm text-white hover:text-accent-primary transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-white">No projects found in this category.</p>
          </motion.div>
        )}
      </motion.div>
    </Section>
  )
}

export default Projects
