import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { StakingSection } from "@/components/sections/staking-section"
import { DashboardSection } from "@/components/sections/dashboard-section"
import { ParticleField } from "@/components/effects/particle-field"
import { FloatingElements } from "@/components/effects/floating-elements"
import patternBgImg from "@/assets/pattern-bg.jpg"

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${patternBgImg})` }}
      />
      
      {/* Particle effects */}
      <ParticleField />
      <FloatingElements />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <StakingSection />
        <DashboardSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
