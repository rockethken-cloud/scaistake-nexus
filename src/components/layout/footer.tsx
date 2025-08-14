import { Zap, Twitter, Github, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                  SCAI
                </h3>
                <p className="text-xs text-muted-foreground -mt-1">Liquidity Staking</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Cross-chain liquidity staking protocol with dynamic rewards and seamless multi-network support.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#stake" className="block hover:text-primary transition-colors">Stake Assets</a>
              <a href="#dashboard" className="block hover:text-primary transition-colors">Dashboard</a>
              <a href="#rewards" className="block hover:text-primary transition-colors">Rewards</a>
              <a href="#admin" className="block hover:text-primary transition-colors">Admin Panel</a>
            </div>
          </div>

          {/* Network */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Networks</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="block">Ethereum</div>
              <div className="block">Polygon</div>
              <div className="block">BSC</div>
              <div className="block">Arbitrum</div>
              <div className="block">Optimism</div>
              <div className="block">Avalanche</div>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Community</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Join our community for updates and support.
            </p>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SCAI Protocol. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  )
}