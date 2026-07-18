'use client'

import React from 'react'
import { ArrowRight, Bot, Cog, Rocket } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center min-h-[calc(100vh-7rem)]">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Badge label="AI ENGINEER • FULL-STACK DEVELOPER" variant="primary" className="tracking-[0.22em]" />
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold tracking-[-0.05em] leading-[0.92] text-balance">
                <span className="block text-foreground">Abdul Basit</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-fuchsia-400 bg-clip-text text-transparent">
                  AI Engineer &
                </span>
                <span className="block text-foreground">Full-Stack Developer</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
                Welcome to my portfolio. I build intelligent web experiences, machine learning systems, and automation tools with a polished, premium finish for modern businesses and startups.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-2xl text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore Projects
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 glass rounded-2xl text-foreground font-semibold hover:bg-white/20 transition-all duration-300 hover:border-accent/50"
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/60 max-w-2xl">
              <div className="rounded-2xl border border-border/70 bg-card/30 px-5 py-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-muted-foreground mt-1">AI/ML Projects</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/30 px-5 py-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/30 px-5 py-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Tech Stacks</div>
              </div>
            </div>
          </div>

          {/* Right side - Product mockup */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-[42rem] rounded-[2rem] border border-border/70 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(236,72,153,0.12),rgba(6,182,212,0.12))]" />
              <div className="relative rounded-[1.6rem] border border-white/10 bg-[#0b1020] p-5 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-white/8 pb-4">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  <div className="ml-4 flex-1 rounded-xl bg-white/5 px-4 py-2 text-sm text-muted-foreground">
                    abdulbasit23415.vercel.app
                  </div>
                </div>

                <div className="mt-5 rounded-[1.4rem] border border-white/8 bg-gradient-to-br from-primary/20 via-fuchsia-500/20 to-accent/20 p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
                      AI Portfolio Builder
                    </span>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                      Ready to build
                    </span>
                  </div>

                  <div className="mt-5 max-w-lg rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-base font-semibold text-white/95">
                    From idea to launch: AI-powered web apps, RAG systems, and automation workflows.
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {['Next.js', 'Python', 'LLMs'].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-center text-sm font-semibold text-white/90"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Bot className="h-5 w-5" />
                      <span className="text-sm font-semibold">AI Systems</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Conversational AI, RAG, and workflow automation.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 text-accent">
                      <Cog className="h-5 w-5" />
                      <span className="text-sm font-semibold">Modern Stack</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Full-stack shipping with performance and polish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
