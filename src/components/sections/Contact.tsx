'use client'

import React, { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { Mail, Github, Linkedin, Globe, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:kashifabdulbasit@gmail.com', label: 'Email', brand: 'email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/abdulbasit-kashif0003', label: 'LinkedIn', brand: 'linkedin' },
    { icon: Github, href: 'https://github.com/abdulbasit23415', label: 'GitHub', brand: 'github' },
    { icon: Globe, href: 'https://abdulbasit23415.vercel.app', label: 'Portfolio', brand: 'portfolio' },
  ]

  return (
    <section id="contact" aria-label="How to contact Abdul Basit?" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
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
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="p-3 text-sm text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Send Message
                      </>
                    )}
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
