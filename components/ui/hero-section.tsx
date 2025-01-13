'use client'

import * as React from 'react'
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon } from "lucide-react"
import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"
import Image from "next/image"
import { useTheme } from "next-themes"

interface HeroSectionProps {
  title: string
  description: string
  badgeText?: string
  badgeIcon?: string
  mockupContent?: React.ReactNode
}

export function HeroSection({
  title,
  description,
  badgeText,
  badgeIcon,
  mockupContent,
}: HeroSectionProps) {
  const { theme } = useTheme()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          {badgeText && (
            <Badge className="h-9 items-center rounded-lg px-4 py-2">
              {badgeIcon && <ArrowRightIcon className="mr-2 h-4 w-4" />}
              {badgeText}
            </Badge>
          )}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            {title}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            {description}
          </p>
        </div>
        {mockupContent && (
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
            <Glow>
              <MockupFrame>{mockupContent}</MockupFrame>
            </Glow>
          </div>
        )}
      </div>
    </section>
  )
} 