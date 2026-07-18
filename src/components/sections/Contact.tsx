'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Mail, Github, Linkedin, Globe } from 'lucide-react'

export function ContactSection() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:kashifabdulbasit@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/abdulbasit-kashif0003', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/abdulbasit23415', label: 'GitHub' },
    { icon: Globe, href: 'https://abdulbasit23415.vercel.app', label: 'Portfolio' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Connect"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Info cards */}
              <GlassCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:kashifabdulbasit@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      kashifabdulbasit@gmail.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/abdulbasit-kashif0003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      linkedin.com/in/abdulbasit-kashif0003
                    </a>
                  </div>
                </div>
              </GlassCard>

              {/* Social links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-lg p-3 flex items-center justify-center text-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110"
                        title={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <GlassCard className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <p className="text-foreground font-semibold mb-4">
                  Location: Lahore, Pakistan
                </p>
                <p className="text-foreground font-semibold mb-2">Phone: 03191533977</p>
                <p className="text-muted-foreground text-sm">
                  Available for AI/ML projects, full-stack development, and technical consultation.
                </p>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
