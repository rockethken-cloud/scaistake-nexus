import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, TrendingUp, Shield, Coins } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-scai-primary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-scai-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-scai-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stake, Earn,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Multiply
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cross-chain liquidity staking with dynamic rewards. Stake SCAI or ETH and earn premium yields across multiple EVM networks.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2 bg-gradient-primary hover:shadow-primary transition-all duration-300">
              Start Staking
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              View Dashboard
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <GlassCard className="p-6 text-center hover:shadow-elevation transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-scai-success/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-scai-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24.5%</h3>
              <p className="text-muted-foreground">Current APR</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:shadow-elevation transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-scai-accent/20 flex items-center justify-center mx-auto mb-4">
                <Coins className="w-6 h-6 text-scai-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">$2.4M</h3>
              <p className="text-muted-foreground">Total Value Locked</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:shadow-elevation transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-scai-warning/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-scai-warning" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">1,247</h3>
              <p className="text-muted-foreground">Active Stakers</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}