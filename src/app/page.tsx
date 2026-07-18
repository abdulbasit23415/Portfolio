import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/About'
import { SkillsSection } from '@/components/sections/Skills'
import { EducationSection } from '@/components/sections/Education'
import { ProjectsSection } from '@/components/sections/Projects'
import { ExperienceSection } from '@/components/sections/Experience'
import { ContactSection } from '@/components/sections/Contact'
import { ResumeSection } from '@/components/sections/Resume'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
