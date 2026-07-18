'use client'

import React from 'react'
import AchmeLogo from './AchmeLogo'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary/30 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <AchmeLogo />
              <span className="text-foreground font-bold text-lg">Abdul Basit</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              AI Engineer & Full-Stack Developer building intelligent web experiences, ML systems, and automation tools. Available for freelance and full-time opportunities.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://github.com/abdulbasit23415"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 glass-card-premium rounded-lg flex items-center justify-center text-foreground/60"
                data-brand="github"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/abdulbasit-kashif0003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 glass-card-premium rounded-lg flex items-center justify-center text-foreground/60"
                data-brand="linkedin"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:kashifabdulbasit@gmail.com"
                className="social-icon w-10 h-10 glass-card-premium rounded-lg flex items-center justify-center text-foreground/60"
                data-brand="email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/abdulbasit23415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/abdulbasit-kashif0003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/ABDUL_BASIT_RESUME.pdf"
                  download
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <a
                  href="mailto:kashifabdulbasit@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Abdul Basit. Built with Next.js, React & Tailwind CSS.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
            >
              Back to Top
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
