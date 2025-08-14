import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Coins, Zap, Calculator, AlertCircle } from "lucide-react"

export function StakingSection() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("scai")

  return (
    <section id="stake" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Stake Your Assets
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose between SCAI tokens or native ETH staking with flexible terms and competitive rewards.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <GlassCard className="p-8">
            <Tabs value={selectedToken} onValueChange={setSelectedToken} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="scai" className="gap-2">
                  <Coins className="w-4 h-4" />
                  SCAI
                </TabsTrigger>
                <TabsTrigger value="eth" className="gap-2">
                  <Zap className="w-4 h-4" />
                  ETH
                </TabsTrigger>
              </TabsList>

              <TabsContent value="scai" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="scai-amount">Stake Amount</Label>
                  <div className="relative">
                    <Input
                      id="scai-amount"
                      placeholder="0.00"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="pr-16"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">SCAI</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Balance: 1,250.00 SCAI</span>
                    <button className="text-primary hover:underline">Max</button>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-scai-accent" />
                    <span className="font-medium">Staking Preview</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">LP Tokens Generated:</span>
                      <span>~{stakeAmount ? (parseFloat(stakeAmount) * 0.95).toFixed(2) : "0.00"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Est. Annual Rewards:</span>
                      <span className="text-scai-success">~{stakeAmount ? (parseFloat(stakeAmount) * 0.245).toFixed(2) : "0.00"} SCAI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lock Period:</span>
                      <span>30 days</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300" size="lg">
                  Stake SCAI Tokens
                </Button>
              </TabsContent>

              <TabsContent value="eth" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="eth-amount">Stake Amount</Label>
                  <div className="relative">
                    <Input
                      id="eth-amount"
                      placeholder="0.00"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="pr-16"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">ETH</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Balance: 2.45 ETH</span>
                    <button className="text-primary hover:underline">Max</button>
                  </div>
                </div>

                <div className="bg-scai-warning/10 border border-scai-warning/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-scai-warning mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-scai-warning">Minimum Stake Required</p>
                      <p className="text-muted-foreground">ETH staking requires a minimum of $100 USD equivalent based on current market price.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-scai-accent" />
                    <span className="font-medium">Staking Preview</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">SCAI Equivalent:</span>
                      <span>~{stakeAmount ? (parseFloat(stakeAmount) * 1850).toFixed(0) : "0"} SCAI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Est. Annual Rewards:</span>
                      <span className="text-scai-success">~{stakeAmount ? (parseFloat(stakeAmount) * 0.18).toFixed(3) : "0.000"} ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lock Period:</span>
                      <span>30 days</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300" size="lg">
                  Stake ETH
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t border-border/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Network:</span>
                <Badge variant="outline" className="gap-1">
                  <div className="w-2 h-2 rounded-full bg-scai-success" />
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