import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { Palette } from 'lucide-react'

const ThemeSwitcher = () => {
  const { currentTheme, setTheme, themes } = useTheme()

  return (
    <>
      {/* Mobile: Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background-card/95 backdrop-blur-xl border-b border-accent-primary/20 shadow-2xl lg:hidden"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-accent-primary" />
              <span className="text-text-main font-semibold text-xs">Theme</span>
            </div>
            <div className="flex space-x-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.name}
                  onClick={() => setTheme(theme)}
                  className={`w-8 h-8 rounded-full transition-all ${
                    currentTheme.name === theme.name
                      ? 'ring-2 ring-accent-primary ring-offset-2 ring-offset-background-card'
                      : 'hover:scale-110'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desktop: Floating card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:block fixed top-24 right-4 z-50 bg-background-card/95 backdrop-blur-xl border border-accent-primary/20 rounded-2xl p-4 shadow-2xl"
      >
        <div className="flex items-center space-x-2 mb-3">
          <Palette className="w-5 h-5 text-accent-primary" />
          <span className="text-text-main font-semibold text-sm">Color Theme</span>
        </div>
        <div className="space-y-2">
          {themes.map((theme) => (
            <motion.button
              key={theme.name}
              onClick={() => setTheme(theme)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-all ${
                currentTheme.name === theme.name
                  ? 'bg-accent-primary/20 border-2 border-accent-primary'
                  : 'bg-background-secondary/50 border-2 border-transparent hover:border-accent-primary/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              />
              <span className="text-text-main text-sm font-medium">{theme.name}</span>
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
    </>
  )
}

export default ThemeSwitcher
