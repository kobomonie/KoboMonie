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
    <main className="bg-[#f8f8f8] min-h-screen w-full">
      <div>
        <HeroSection />
      </div>
      <div>
        <WhyKoboMonie />
      </div>
      <div>
        <ContributeSection />
      </div>
      <div>
        <ProtectedSavingsSection />
      </div>
      <div>
        <TransparentRotationSection />
      </div>
      <div>
        <WhyTrustSection />
      </div>
      <div>
        <HowItWorksSection />
      </div>
      <div>
        <BuildDisciplineSection />
      </div>
      <div>
        <TestimonialsSection />
      </div>
      <div>
        <MeetTheTeamSection />
      </div>
      <div>
        <FAQSection />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}

