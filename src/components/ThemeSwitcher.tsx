import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { Palette } from 'lucide-react'

const ThemeSwitcher = () => {
  const { currentTheme, setTheme, themes } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-24 right-4 z-50 bg-background-card/95 backdrop-blur-xl border border-accent-primary/20 rounded-2xl p-3 shadow-2xl lg:p-4"
    >
      <div className="hidden lg:flex items-center space-x-2 mb-3">
        <Palette className="w-5 h-5 text-accent-primary" />
        <span className="text-text-main font-semibold text-sm">Color Theme</span>
      </div>
      <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-2 gap-2">
        {themes.map((theme) => (
          <motion.button
            key={theme.name}
            onClick={() => setTheme(theme)}
            className={`flex items-center space-x-2 lg:space-x-3 p-2 rounded-lg transition-all ${
              currentTheme.name === theme.name
                ? 'bg-accent-primary/20 border-2 border-accent-primary'
                : 'bg-background-secondary/50 border-2 border-transparent hover:border-accent-primary/30'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-5 h-5 lg:w-6 lg:h-6 rounded-full"
              style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
            />
            <span className="text-text-main text-xs lg:text-sm font-medium hidden lg:block">{theme.name}</span>
            {currentTheme.name === theme.name && (
              <motion.div
                layoutId="activeTheme"
                className="w-2 h-2 bg-accent-primary rounded-full ml-auto"
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default ThemeSwitcher
