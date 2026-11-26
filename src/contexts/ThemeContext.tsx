import { createContext, useContext, useEffect, ReactNode } from 'react'

export interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  tertiary: string
  quaternary: string
  background: string
  card: string
  text: string
  textSecondary: string
}

const theme: ColorTheme = {
  name: 'CODEFINIAL',
  primary: '#123D2D',
  secondary: '#0C3023',
  accent: '#B7F500',
  tertiary: '#123D2D',
  quaternary: '#0C3023',
  background: '#F6F7F3',
  card: '#FFFFFF',
  text: '#17221C',
  textSecondary: '#68736C'
}

interface ThemeContextType {
  currentTheme: ColorTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', theme.primary)
    root.style.setProperty('--color-secondary', theme.secondary)
    root.style.setProperty('--color-accent', theme.accent)
    root.style.setProperty('--color-tertiary', theme.tertiary)
    root.style.setProperty('--color-quaternary', theme.quaternary)
    root.style.setProperty('--color-background', theme.background)
    root.style.setProperty('--color-card', theme.card)
    root.style.setProperty('--color-text', theme.text)
    root.style.setProperty('--color-text-secondary', theme.textSecondary)
    
    let styleElement = document.getElementById('theme-overlay')
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = 'theme-overlay'
      document.head.appendChild(styleElement)
    }
    styleElement.textContent = `
      .text-text-main {
        color: ${theme.text} !important;
      }
      .text-text-secondary {
        color: ${theme.textSecondary} !important;
      }
      .text-gradient {
        background: linear-gradient(to right, ${theme.primary}, ${theme.accent}) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        color: transparent !important;
      }
    `
  }, [])

  return (
    <ThemeContext.Provider value={{ currentTheme: theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
