'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  containerClassName?: string
}

export function Glow({
  children,
  className,
  containerClassName,
  ...props
}: GlowProps) {
  return (
    <div className={cn('relative group', containerClassName)}>
      <motion.div
        className="absolute -inset-px rounded-xl blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"
        style={{
          background:
            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
        }}
      ></motion.div>
      <div
        className={cn(
          'relative rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-3xl',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
} 