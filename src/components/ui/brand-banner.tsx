import heroBannerImg from "@/assets/hero-banner.jpg"
import scaiLogoImg from "@/assets/scai-logo.png"
import { cn } from "@/lib/utils"

interface BrandBannerProps {
  className?: string
  showLogo?: boolean
}

export function BrandBanner({ className, showLogo = true }: BrandBannerProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img 
          src={heroBannerImg} 
          alt="SCAI DeFi Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-scai-primary/20" />
      </div>
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pattern-overlay" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-scai-primary/20 blur-xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-scai-secondary/15 blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Brand logo */}
      {showLogo && (
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-3 animate-brand-pulse">
            <img 
              src={scaiLogoImg} 
              alt="SCAI Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="font-bold text-2xl text-glow bg-gradient-primary bg-clip-text text-transparent">
                SCAI
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Liquidity Protocol</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}