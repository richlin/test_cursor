'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from "@/components/blocks/hero-section"

export default function Home() {
  const featuredVideos = [
    {
      title: "World's Largest Jello Pool",
      url: "https://www.youtube.com/watch?v=DPZzrlFCD_I",
      videoId: "DPZzrlFCD_I",
    },
    {
      title: "Skin a Watermelon Party Trick",
      url: "https://www.youtube.com/watch?v=Q6vVuj3iggE",
      videoId: "Q6vVuj3iggE",
    },
    {
      title: "Liquid Sand Hot Tub",
      url: "https://www.youtube.com/watch?v=My4RA5I0FKs",
      videoId: "My4RA5I0FKs",
    },
  ]

  const socialLinks = [
    { platform: 'Instagram', url: 'https://instagram.com/markrober', icon: 'instagram' },
    { platform: 'TikTok', url: 'https://tiktok.com/@markrober', icon: 'tiktok' },
    { platform: 'Twitter', url: 'https://twitter.com/MarkRober', icon: 'twitter' },
    { platform: 'Facebook', url: 'https://facebook.com/MarkRoberYouTube', icon: 'facebook' },
  ]

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Mark Rober"
        description="Former NASA Engineer. Current CrunchLabs Founder. Friend of Science."
        badgeText="Featured on Discovery Channel & Jimmy Kimmel Live"
        badgeIcon="youtube"
        mockupContent={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <Link 
                key={index} 
                href={video.url}
                className="group hover:transform hover:scale-105 transition duration-300"
                target="_blank"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video relative">
                    <Image
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-blue-600">{video.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        }
      />

      {/* Background Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Background</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <p>
              With a background in Mechanical Engineering from BYU (undergrad) and USC (Masters), 
              I spent 9 remarkable years at NASA JPL, with 7 of those years dedicated to the Curiosity Rover project.
            </p>
            <p>
              My journey then led me to Apple&apos;s Special Projects Group, where I worked as a Mechanical Engineer 
              in Product Design for 5 years.
            </p>
            <p>
              In 2022, I founded CrunchLabs with a mission to inspire the next generation of engineers 
              through monthly hands-on projects and engaging video content.
            </p>
          </div>
        </div>
      </section>

      {/* CrunchLabs Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Join CrunchLabs</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Get monthly engineering projects delivered to your door! Each box comes with a video tutorial 
            where we build together and learn to think like an engineer.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Monthly Plan */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Monthly Plan</h3>
              <div className="text-blue-600 mb-6">
                <span className="text-5xl font-bold">$50</span>
                <span className="text-xl">/month</span>
              </div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Monthly Engineering Project Box
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Video Tutorials
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
              <Link 
                href="https://crunchlabs.com/subscribe/monthly" 
                className="block w-full bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-700 transition"
                target="_blank"
              >
                Start Monthly Plan
              </Link>
            </div>

            {/* Annual Plan */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-green-500 text-white text-sm py-1 px-3 rounded-full">
                Save $100
              </div>
              <h3 className="text-2xl font-bold mb-4">Annual Plan</h3>
              <div className="text-blue-600 mb-6">
                <span className="text-5xl font-bold">$500</span>
                <span className="text-xl">/year</span>
              </div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  12 Engineering Project Boxes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Video Tutorials
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Two Months Free
                </li>
              </ul>
              <Link 
                href="https://crunchlabs.com/subscribe/annual" 
                className="block w-full bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-700 transition"
                target="_blank"
              >
                Start Annual Plan
              </Link>
            </div>
          </div>

          <p className="text-sm opacity-90">
            All plans include access to video tutorials and community support.
            Cancel anytime. Shipping included.
          </p>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.url}
                className="hover:text-blue-400 transition"
                target="_blank"
              >
                {link.platform}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
