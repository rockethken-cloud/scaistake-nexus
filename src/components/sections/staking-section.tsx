import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Coins, Zap, Calculator, AlertCircle, Star, Network } from "lucide-react"
import patternBgImg from "@/assets/pattern-bg.jpg"

export function StakingSection() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("scai")

  return (
    <section id="stake" className="py-20 relative">
      {/* Section background */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${patternBgImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-scai-primary/5 to-scai-secondary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-scai-accent animate-pulse" />
            <h2 className="text-4xl font-bold text-glow">
              Stake Your Assets
            </h2>
            <Star className="w-6 h-6 text-scai-accent animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg">
            Choose between SCAI tokens or native ETH staking with flexible terms and competitive rewards.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <GlassCard className="p-8 glass-effect hover-glow">
            <Tabs value={selectedToken} onValueChange={setSelectedToken} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 glass-effect">
                <TabsTrigger value="scai" className="gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
                  <Coins className="w-4 h-4" />
                  SCAI
                </TabsTrigger>
                <TabsTrigger value="eth" className="gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
                  <Zap className="w-4 h-4" />
                  ETH
                </TabsTrigger>
              </TabsList>

              <TabsContent value="scai" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="scai-amount" className="text-glow font-medium">Stake Amount</Label>
                  <div className="relative">
                    <Input
                      id="scai-amount"
                      placeholder="0.00"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="pr-16 glass-effect text-lg font-medium"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs bg-gradient-primary text-primary-foreground">SCAI</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Balance: 1,250.00 SCAI</span>
                    <button className="text-primary hover:underline hover-glow font-medium">Max</button>
                  </div>
                </div>

                <div className="glass-effect rounded-lg p-4 space-y-2 border border-scai-primary/20">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-scai-accent animate-pulse" />
                    <span className="font-medium text-glow">Staking Preview</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">LP Tokens Generated:</span>
                      <span className="text-glow">~{stakeAmount ? (parseFloat(stakeAmount) * 0.95).toFixed(2) : "0.00"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Est. Annual Rewards:</span>
                      <span className="text-scai-success font-bold">~{stakeAmount ? (parseFloat(stakeAmount) * 0.245).toFixed(2) : "0.00"} SCAI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lock Period:</span>
                      <span className="text-glow">30 days</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-primary hover-glow transition-all duration-300 text-lg py-6" size="lg">
                  <Star className="w-5 h-5 mr-2 animate-pulse" />
                  Stake SCAI Tokens
                </Button>
              </TabsContent>

              <TabsContent value="eth" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="eth-amount" className="text-glow font-medium">Stake Amount</Label>
                  <div className="relative">
                    <Input
                      id="eth-amount"
                      placeholder="0.00"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="pr-16 glass-effect text-lg font-medium"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs bg-gradient-accent text-primary-foreground">ETH</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Balance: 2.45 ETH</span>
                    <button className="text-primary hover:underline hover-glow font-medium">Max</button>
                  </div>
                </div>

                <div className="bg-scai-warning/10 border border-scai-warning/20 rounded-lg p-4 glass-effect">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-scai-warning mt-0.5 animate-pulse" />
                    <div className="text-sm">
                      <p className="font-medium text-scai-warning text-glow">Minimum Stake Required</p>
                      <p className="text-muted-foreground">ETH staking requires a minimum of $100 USD equivalent based on current market price.</p>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-lg p-4 space-y-2 border border-scai-accent/20">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-scai-accent animate-pulse" />
                    <span className="font-medium text-glow">Staking Preview</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">SCAI Equivalent:</span>
                      <span className="text-glow">~{stakeAmount ? (parseFloat(stakeAmount) * 1850).toFixed(0) : "0"} SCAI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Est. Annual Rewards:</span>
                      <span className="text-scai-success font-bold">~{stakeAmount ? (parseFloat(stakeAmount) * 0.18).toFixed(3) : "0.000"} ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lock Period:</span>
                      <span className="text-glow">30 days</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-primary hover-glow transition-all duration-300 text-lg py-6" size="lg">
                  <Zap className="w-5 h-5 mr-2 animate-pulse" />
                  Stake ETH
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-8 pt-6 border-t border-border/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  Network:
                </span>
                <Badge variant="outline" className="gap-1 glass-effect">
                  <div className="w-2 h-2 rounded-full bg-scai-success animate-pulse" />
                  Ethereum
                </Badge>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}