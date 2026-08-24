import {AboutHeroSection} from '../../components/sections/AboutHeroSection'
import {CertificationsSection} from '../../components/sections/CertificationsSection'
import {TechStackSection} from '../../components/sections/TechStackSection'
import {TimelineSection} from '../../components/sections/TimelineSection'
import {VolunteerSection} from '../../components/sections/VolunteerSection'

export function About() {
  return (
    <div className="min-h-screen pb-24 pt-28">
      <AboutHeroSection />
      <TechStackSection />
      <TimelineSection />
      <VolunteerSection />
      <CertificationsSection />
    </div>
  )
}
