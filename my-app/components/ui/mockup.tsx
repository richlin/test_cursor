'use client'

import { cn } from '@/lib/utils'

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Mockup({ children, className, ...props }: MockupProps) {
  return (
    <div
      className={cn(
        'rounded-xl border bg-background shadow-2xl shadow-foreground/10',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-start space-x-1.5 p-4">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
      </div>
      {children}
    </div>
  )
} 