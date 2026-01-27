import './app.css'
import HeroSection from './components/HeroSection'
import WhyKoboMonie from './components/WhyKoboMonie'
import ContributeSection from './components/ContributeSection'
import TransparentRotationSection from './components/TransparentRotationSection'
import ProtectedSavingsSection from './components/ProtectedSavingsSection'
import WhyTrustSection from './components/WhyTrustSection'
import HowItWorksSection from './components/HowItWorksSection'
import BuildDisciplineSection from './components/BuildDisciplineSection'
import TestimonialsSection from './components/TestimonialsSection'
import MeetTheTeamSection from './components/MeetTheTeamSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-[#f8f8f8] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth w-full">
      <div className="snap-start shrink-0">
        <HeroSection />
      </div>
      <div className="snap-start shrink-0">
        <WhyKoboMonie />
      </div>
      <div className="snap-start shrink-0">
        <ContributeSection />
      </div>
      <div className="snap-start shrink-0">
        <ProtectedSavingsSection />
      </div>
      <div className="snap-start shrink-0">
        <TransparentRotationSection />
      </div>
      <div className="snap-start shrink-0">
        <WhyTrustSection />
      </div>
      <div className="snap-start shrink-0">
        <HowItWorksSection />
      </div>
      <div className="snap-start shrink-0">
        <BuildDisciplineSection />
      </div>
      <div className="snap-start shrink-0">
        <TestimonialsSection />
      </div>
      <div className="snap-start shrink-0">
        <MeetTheTeamSection />
      </div>
      <div className="snap-start shrink-0">
        <FAQSection />
      </div>
      <div className="snap-start shrink-0">
        <Footer />
      </div>
    </main>
  )
}
