import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

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

const themes: ColorTheme[] = [
  {
    name: 'Ocean Blue',
    primary: '#2563EB',
    secondary: '#0891B2',
    accent: '#60A5FA',
    tertiary: '#0EA5E9',
    quaternary: '#06B6D4',
    background: '#080D18',
    card: '#111D30',
    text: '#60A5FA',
    textSecondary: '#94A3B8'
  },
  {
    name: 'Royal Purple',
    primary: '#6D28D9',
    secondary: '#7C3AED',
    accent: '#A78BFA',
    tertiary: '#8B5CF6',
    quaternary: '#A855F7',
    background: '#1A0B2E',
    card: '#2D1B4E',
    text: '#A78BFA',
    textSecondary: '#C4B5FD'
  },
  {
    name: 'Emerald Green',
    primary: '#047857',
    secondary: '#059669',
    accent: '#34D399',
    tertiary: '#10B981',
    quaternary: '#14B8A6',
    background: '#062C16',
    card: '#0F3D2E',
    text: '#34D399',
    textSecondary: '#6EE7B7'
  },
  {
    name: 'Sunset Orange',
    primary: '#C2410C',
    secondary: '#EA580C',
    accent: '#FB923C',
    tertiary: '#F97316',
    quaternary: '#F59E0B',
    background: '#2C1206',
    card: '#4E2C18',
    text: '#FB923C',
    textSecondary: '#FDBA74'
  },
  {
    name: 'Rose Pink',
    primary: '#BE185D',
    secondary: '#DB2777',
    accent: '#F472B6',
    tertiary: '#EC4899',
    quaternary: '#F43F5E',
    background: '#2C0618',
    card: '#4E1124',
    text: '#F472B6',
    textSecondary: '#F9A8D4'
  }
]

interface ThemeContextType {
  currentTheme: ColorTheme
  setTheme: (theme: ColorTheme) => void
  themes: ColorTheme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(themes[0])

  const setTheme = (theme: ColorTheme) => {
    setCurrentTheme(theme)
    
    // Update CSS variables
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
    
    // Update the overlay gradient and force text colors using a style element
    let styleElement = document.getElementById('theme-overlay')
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = 'theme-overlay'
      document.head.appendChild(styleElement)
    }
    styleElement.textContent = `
      body::before {
        background: linear-gradient(135deg, ${theme.background}cc 0%, ${theme.background}99 50%, ${theme.background}cc 100%) !important;
      }
      .text-text-main {
        color: ${theme.text} !important;
      }
      .text-text-secondary {
        color: ${theme.textSecondary} !important;
      }
      .text-gradient {
        background: linear-gradient(to right, ${theme.primary}, ${theme.secondary}) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        color: transparent !important;
      }
    `
  }

  // Initialize theme on mount
  useEffect(() => {
    setTheme(themes[0])
  }, [])

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
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
