'use client'

import { motion } from 'framer-motion'
import { Badge } from './badge'
import { Glow } from './glow'
import { Mockup } from './mockup'
import { Icons } from './icons'

interface HeroSectionProps {
  title: string
  description: string
  badgeText?: string
  badgeIcon?: keyof typeof Icons
  mockupContent?: React.ReactNode
}

export function HeroSection({
  title,
  description,
  badgeText,
  badgeIcon,
  mockupContent,
}: HeroSectionProps) {
  const BadgeIcon = badgeIcon ? Icons[badgeIcon] : null

  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="mb-4 rounded-lg px-4 py-1.5 text-sm font-medium"
              >
                {BadgeIcon && <BadgeIcon className="mr-2 h-4 w-4" />}
                {badgeText}
              </Badge>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg"
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flow-root sm:mt-16"
        >
          <Glow>
            <Mockup className="p-4 lg:p-6">
              <div className="relative rounded-xl bg-background p-4">
                {mockupContent}
              </div>
            </Mockup>
          </Glow>
        </motion.div>
      </div>
    </section>
  )
} 