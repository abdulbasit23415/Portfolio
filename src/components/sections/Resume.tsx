'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Download, FileText, Briefcase, GraduationCap, Code2, Brain } from 'lucide-react'

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Resume"
          subtitle="Download my full resume to learn more about my experience and skills."
        />

        <ScrollReveal direction="up">
          <GlassCard hover={false} className="text-center">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <FileText className="w-10 h-10 text-accent" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3">Abdul Basit</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              AI Engineer & Full-Stack Developer: LLMs, RAG Pipelines, Next.js, Python, and more.
            </p>

            {/* Quick highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Brain, label: 'AI / ML' },
                { icon: Code2, label: 'Full-Stack' },
                { icon: Briefcase, label: '2+ Years' },
                { icon: GraduationCap, label: 'BS Data Science' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex flex-col items-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-border/30">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-xs font-semibold text-muted-foreground">{item.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Download button */}
            <a
              href="/ABDUL_BASIT_RESUME.pdf"
              download
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
