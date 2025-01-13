'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Mockup({ children, className, ...props }: MockupProps) {
  return (
    <div className={cn('rounded-lg border bg-background p-4 lg:p-6', className)} {...props}>
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function MockupFrame({ children, className, ...props }: MockupProps) {
  return (
    <div className={cn('rounded-lg border bg-background/50 p-4 backdrop-blur-sm lg:p-6', className)} {...props}>
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500/50" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
        <div className="h-3 w-3 rounded-full bg-green-500/50" />
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
} 