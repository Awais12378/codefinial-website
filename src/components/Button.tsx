import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'onDrag'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none'
  
  const variants = {
    primary: 'bg-accent text-primary hover:opacity-90 shadow-md',
    secondary: 'bg-primary text-white hover:bg-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }
  
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
