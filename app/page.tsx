'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from '@/components/ui/hero-section'
import { AuroraBackground } from '@/components/ui/aurora-background'

export default function Home() {
  const featuredVideos = [
    {
      title: "Building the World\u2019s Largest Elephant Toothpaste Experiment",
      videoId: "XXn4fP3CnJg",
      url: "https://www.youtube.com/watch?v=XXn4fP3CnJg",
    },
    {
      title: "Glitterbomb Trap Catches Phone Scammer",
      videoId: "VrKW58MS12g",
      url: "https://www.youtube.com/watch?v=VrKW58MS12g",
    },
    {
      title: "World\u2019s Largest Devil\u2019s Toothpaste Explosion",
      videoId: "BHiWygziyso",
      url: "https://www.youtube.com/watch?v=BHiWygziyso",
    },
  ].map(video => ({
    ...video,
    title: video.title.replace(/[']/g, "'")
  }))

  const socialLinks = [
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@MarkRober",
      icon: "youtube",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/markrober",
      icon: "twitter",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/markrober/",
      icon: "instagram",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/markrober/",
      icon: "linkedin",
    },
  ]

  return (
    <AuroraBackground className="min-h-screen">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection
          title="Mark Rober"
          description="Join me on my journey of making science and engineering fun through creative experiments and inventions. From NASA JPL to YouTube, I\u2019m passionate about inspiring the next generation of innovators."
          badgeText="Featured on Discovery Channel & Jimmy Kimmel Live"
          badgeIcon="youtube"
          mockupContent={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredVideos.map((video) => (
                <Link
                  key={video.videoId}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    width={640}
                    height={360}
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">{video.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          }
        />

        {/* Background Section */}
        <section className="w-full bg-gray-50/50 py-24 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Background & Experience</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white/80 p-6 shadow-lg dark:bg-gray-800/80 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-semibold">Education</h3>
                <ul className="space-y-2">
                  <li>• Mechanical Engineering at BYU</li>
                  <li>• Master\u2019s from USC</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white/80 p-6 shadow-lg dark:bg-gray-800/80 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-semibold">Career Highlights</h3>
                <ul className="space-y-2">
                  <li>• 9 years at NASA\u2019s Jet Propulsion Laboratory</li>
                  <li>• Worked on Curiosity Rover</li>
                  <li>• Founded CrunchLabs</li>
                  <li>• 23M+ YouTube Subscribers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CrunchLabs Section */}
        <section className="w-full bg-white/50 py-24 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-6 text-3xl font-bold">Join CrunchLabs</h2>
              <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
                Get monthly engineering projects delivered to your door
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-white/80 p-6 shadow-lg dark:bg-gray-900/80 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold">Monthly</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$50</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li>✓ Monthly Engineering Project Box</li>
                  <li>✓ Video Tutorials</li>
                  <li>✓ Cancel Anytime</li>
                </ul>
                <Link
                  href="https://www.crunchlabs.com/signup"
                  className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Subscribe Monthly
                </Link>
              </div>

              <div className="relative rounded-lg border bg-white/80 p-6 shadow-lg dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="absolute -top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-sm font-semibold text-white">
                  Save $100
                </div>
                <h3 className="mb-4 text-2xl font-bold">Annual</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$500</span>
                  <span className="text-gray-600 dark:text-gray-400">/year</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li>✓ 12 Engineering Project Boxes</li>
                  <li>✓ Video Tutorials</li>
                  <li>✓ Two Months Free</li>
                </ul>
                <Link
                  href="https://www.crunchlabs.com/signup"
                  className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Subscribe Annually
                </Link>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Free shipping in the continental US. International shipping available.
            </p>
          </div>
        </section>

        {/* Footer with Social Links */}
        <footer className="w-full bg-gray-900/80 py-12 text-white backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  {link.platform}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </AuroraBackground>
  )
} 