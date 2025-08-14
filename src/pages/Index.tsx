import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { StakingSection } from "@/components/sections/staking-section"
import { DashboardSection } from "@/components/sections/dashboard-section"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StakingSection />
      <DashboardSection />
      <Footer />
    </div>
  );
};

export default Index;
