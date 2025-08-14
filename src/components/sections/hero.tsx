import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { BrandBanner } from "@/components/ui/brand-banner"
import { ArrowRight, TrendingUp, Shield, Coins, Sparkles } from "lucide-react"
import scaiLogoImg from "@/assets/scai-logo.png"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Brand banner background */}
      <BrandBanner className="absolute inset-0" showLogo={false} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Brand logo and title */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src={scaiLogoImg} 
                alt="SCAI Logo" 
                className="w-16 h-16 object-contain animate-brand-pulse"
              />
              <div className="text-left">
                <h1 className="text-6xl md:text-8xl font-bold text-glow bg-gradient-primary bg-clip-text text-transparent">
                  SCAI
                </h1>
                <p className="text-lg text-muted-foreground -mt-2">Liquidity Staking Protocol</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stake, Earn,{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent relative">
                Multiply
                <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-scai-accent animate-pulse" />
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cross-chain liquidity staking with dynamic rewards. Stake SCAI or ETH and earn premium yields across multiple EVM networks.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2 bg-gradient-primary hover:shadow-primary hover-glow transition-all duration-300 text-lg px-8 py-4">
              Start Staking
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 glass-effect hover-glow text-lg px-8 py-4">
              View Dashboard
            </Button>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <GlassCard className="p-8 text-center hover-glow glass-effect transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-scai-success/30 to-scai-success/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <TrendingUp className="w-8 h-8 text-scai-success" />
              </div>
              <h3 className="text-3xl font-bold text-glow mb-2">24.5%</h3>
              <p className="text-muted-foreground font-medium">Current APR</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-scai-success/20 to-scai-success rounded-full" />
            </GlassCard>

            <GlassCard className="p-8 text-center hover-glow glass-effect transition-all duration-300 scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-scai-accent/30 to-scai-accent/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Coins className="w-8 h-8 text-scai-accent" />
              </div>
              <h3 className="text-3xl font-bold text-glow mb-2">$2.4M</h3>
              <p className="text-muted-foreground font-medium">Total Value Locked</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-scai-accent/20 to-scai-accent rounded-full" />
            </GlassCard>

            <GlassCard className="p-8 text-center hover-glow glass-effect transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-scai-warning/30 to-scai-warning/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Shield className="w-8 h-8 text-scai-warning" />
              </div>
              <h3 className="text-3xl font-bold text-glow mb-2">1,247</h3>
              <p className="text-muted-foreground font-medium">Active Stakers</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-scai-warning/20 to-scai-warning rounded-full" />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}