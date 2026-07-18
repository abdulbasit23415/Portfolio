'use client'

import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Mail, Github, Linkedin, Globe, MapPin, Phone, Send } from 'lucide-react'

export function ContactSection() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:kashifabdulbasit@gmail.com', label: 'Email', brand: 'email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/abdulbasit-kashif0003', label: 'LinkedIn', brand: 'linkedin' },
    { icon: Github, href: 'https://github.com/abdulbasit23415', label: 'GitHub', brand: 'github' },
    { icon: Globe, href: 'https://abdulbasit23415.vercel.app', label: 'Portfolio', brand: 'portfolio' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Connect"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — Contact Form */}
          <ScrollReveal direction="left">
            <GlassCard hover={false} className="!p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
                <form
                  action="mailto:kashifabdulbasit@gmail.com"
                  method="POST"
                  encType="text/plain"
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="Project inquiry..."
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="form-input resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
                  >
                    <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Right — Contact Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Info cards */}
              <GlassCard tilt>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:kashifabdulbasit@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      kashifabdulbasit@gmail.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard tilt>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a
                      href="tel:+923191533977"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      +92 319 153 3977
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard tilt>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground text-sm">Lahore, Pakistan</p>
                  </div>
                </div>
              </GlassCard>

              {/* Social links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon glass-card-premium rounded-xl p-4 flex items-center justify-center text-foreground/80"
                        title={social.label}
                        data-brand={social.brand}
                      >
                        <Icon size={22} />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <GlassCard hover={false} className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Available for <span className="text-accent font-semibold">AI/ML projects</span>, <span className="text-primary font-semibold">full-stack development</span>, and <span className="text-foreground font-semibold">technical consultation</span>. Let&apos;s build something amazing together!
                </p>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
