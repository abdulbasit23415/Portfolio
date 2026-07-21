'use client'

import React from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { Code2, Brain, Database, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Building intelligent systems with LLMs, RAG pipelines, and neural networks.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web apps with Next.js, React, Python, and modern APIs.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing scalable data pipelines and database architectures.',
  },
  {
    icon: Rocket,
    title: 'Automation',
    description: 'Workflow automation with n8n, custom scripts, and API integrations.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Dedicated data science professional with expertise in AI engineering, machine learning, and full-stack development."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left content — Photo */}
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <div className="relative">
                {/* Gradient border ring */}
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden relative">
                  <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-primary via-accent to-fuchsia-400" />
                  <div className="absolute inset-0 rounded-3xl bg-background m-[2px]" />
                  <div className="absolute inset-[3px] rounded-[calc(1.5rem-3px)] overflow-hidden bg-white/5 backdrop-blur-sm">
                    <Image
                      src="/profile-v2.png"
                      alt="Abdul Basit - AI Engineer and Full-Stack Developer at Excels Tech Solution"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 to-accent/15 blur-2xl -z-10" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right content — Text */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Abdul Basit is a dedicated AI engineer and full-stack developer with hands-on experience in building intelligent, data-driven applications. Currently working at <span className="text-accent font-semibold">Excels Tech Solution LLC</span>, where I develop AI-powered platforms, RAG pipelines, and automation solutions using Python, Next.js, and LLMs.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans machine learning, data science, backend optimization, and modern web technologies. I specialize in integrating Large Language Models, implementing Retrieval-Augmented Generation, and building scalable production systems.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    <AnimatedCounter target={10} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">AI Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    <AnimatedCounter target={15} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Tech Skills</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    <AnimatedCounter target={9} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Projects Shipped</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} direction="up" delay={index * 100}>
                <GlassCard tilt className="h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
