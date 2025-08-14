import { Button } from "@/components/ui/button"
import { Wallet, Zap } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              SCAI
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Liquidity Staking</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#stake" className="text-foreground/80 hover:text-primary transition-colors">
            Stake
          </a>
          <a href="#dashboard" className="text-foreground/80 hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#rewards" className="text-foreground/80 hover:text-primary transition-colors">
            Rewards
          </a>
        </nav>

        <Button variant="outline" className="gap-2">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}