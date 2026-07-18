'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { TypeWriter } from '@/components/animations/TypeWriter'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { ParticleField } from '@/components/animations/ParticleField'

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 pb-16"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_28%),linear-gradient(180deg,#050816_0%,#070b18_58%,#050816_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Particle background */}
      <ParticleField count={50} className="-z-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center min-h-[calc(100vh-7rem)]">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Badge label="OPEN TO WORK" variant="accent" className="tracking-[0.22em]" />
              <Badge label="AI ENGINEER" variant="primary" className="tracking-[0.22em]" />
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold tracking-[-0.05em] leading-[0.92] text-balance">
                <span className="block text-foreground">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-fuchsia-400 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto] text-glow">
                  Abdul Basit
                </span>
                <span className="block text-foreground text-3xl sm:text-4xl lg:text-5xl mt-3 font-bold">
                  <TypeWriter
                    words={['AI Engineer', 'Full-Stack Developer', 'ML Specialist', 'Data Scientist']}
                    speed={80}
                    deleteSpeed={40}
                    pauseTime={2500}
                  />
                </span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
                I build intelligent web experiences, machine learning systems, and automation tools with a polished, premium finish for modern businesses and startups.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-2xl text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                Explore Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/ABDUL_BASIT_RESUME.pdf"
                download
                className="px-8 py-4 glass rounded-2xl text-foreground font-semibold hover:bg-white/10 transition-all duration-300 hover:border-accent/50 flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 glass rounded-2xl text-foreground font-semibold hover:bg-white/10 transition-all duration-300 hover:border-primary/50 flex items-center justify-center gap-2"
              >
                Get in Touch
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/60 max-w-2xl">
              <div className="rounded-2xl border border-border/70 bg-card/30 px-5 py-4 text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">AI/ML Projects</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/30 px-5 py-4 text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <AnimatedCounter target={2} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/30 px-5 py-4 text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">Tech Skills</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile Photo */}
          <div className="hidden md:flex items-center justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-8 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute -inset-16 rounded-full border border-accent/10" />
              <div className="absolute -inset-24 rounded-full border border-fuchsia-500/5" />

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-xl font-bold animate-float shadow-lg shadow-primary/30">
                AI
              </div>
              <div className="absolute -bottom-4 -left-8 w-12 h-12 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-accent flex items-center justify-center text-white text-sm font-bold animate-float shadow-lg shadow-fuchsia-500/30" style={{ animationDelay: '1s' }}>
                ML
              </div>
              <div className="absolute top-1/2 -right-12 w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-emerald-400 flex items-center justify-center text-white text-xs font-bold animate-float shadow-lg shadow-accent/30" style={{ animationDelay: '2s' }}>
                FS
              </div>

              {/* Profile image with gradient ring */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                {/* Spinning gradient ring */}
                <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#3b82f6,#06b6d4,#ec4899,#f59e0b,#3b82f6)] animate-ring-spin" />
                <div className="absolute inset-0 rounded-full bg-background" />
                <div className="absolute inset-1 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm">
                  <Image
                    src="/profile-v2.png"
                    alt="Abdul Basit - AI Engineer & Full-Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
