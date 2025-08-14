import { Button } from "@/components/ui/button"
import { Wallet, Zap, Menu } from "lucide-react"
import { BrandBanner } from "@/components/ui/brand-banner"
import scaiLogoImg from "@/assets/scai-logo.png"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 glass-effect backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={scaiLogoImg} 
            alt="SCAI Logo" 
            className="w-8 h-8 object-contain animate-brand-pulse"
          />
          <div>
            <h1 className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent text-glow">
              SCAI
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Liquidity Staking</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#stake" className="text-foreground/80 hover:text-primary transition-colors hover-glow font-medium">
            Stake
          </a>
          <a href="#dashboard" className="text-foreground/80 hover:text-primary transition-colors hover-glow font-medium">
            Dashboard
          </a>
          <a href="#rewards" className="text-foreground/80 hover:text-primary transition-colors hover-glow font-medium">
            Rewards
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2 glass-effect hover-glow hidden sm:flex">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}