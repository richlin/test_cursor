'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Glow({ children, className, ...props }: GlowProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 blur-2xl transition duration-1000 group-hover:opacity-10" />
      {children}
    </div>
  )
} 