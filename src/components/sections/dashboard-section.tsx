import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, TrendingUp, AlertTriangle, Gift } from "lucide-react"

export function DashboardSection() {
  const userStakes = [
    {
      id: 1,
      amount: "500.00",
      token: "SCAI",
      lpTokens: "475.00",
      startDate: "2024-01-15",
      daysStaked: 12,
      timeLeft: 18,
      penalty: 15,
      rewards: "12.35"
    },
    {
      id: 2,
      amount: "1.2",
      token: "ETH",
      lpTokens: "2,220.00",
      startDate: "2024-01-08",
      daysStaked: 19,
      timeLeft: 11,
      penalty: 8,
      rewards: "0.025"
    }
  ]

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-background to-scai-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Stakes Dashboard</h2>
            <p className="text-muted-foreground text-lg">
              Monitor your active stakes, track rewards, and manage your positions.
            </p>
          </div>

          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <GlassCard className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Staked</h3>
              <p className="text-2xl font-bold text-foreground">$4,832.50</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Rewards</h3>
              <p className="text-2xl font-bold text-scai-success">$127.84</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Stakes</h3>
              <p className="text-2xl font-bold text-foreground">2</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg APR</h3>
              <p className="text-2xl font-bold text-scai-accent">22.8%</p>
            </GlassCard>
          </div>

          {/* Active Stakes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Active Stakes</h3>
            
            {userStakes.map((stake) => (
              <GlassCard key={stake.id} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Stake Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold">{stake.amount} {stake.token}</h4>
                      <Badge variant="outline" className="gap-1">
                        <div className="w-2 h-2 rounded-full bg-scai-success" />
                        Active
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">LP Tokens:</span>
                        <span>{stake.lpTokens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Start Date:</span>
                        <span>{stake.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Days Staked:</span>
                        <span>{stake.daysStaked} days</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress & Rewards */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Lock Period Progress</span>
                        <span className="text-sm text-muted-foreground">{stake.daysStaked}/30 days</span>
                      </div>
                      <Progress value={(stake.daysStaked / 30) * 100} className="h-2" />
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{stake.timeLeft} days remaining</span>
                    </div>

                    <div className="bg-scai-success/10 border border-scai-success/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Gift className="w-4 h-4 text-scai-success" />
                        <span className="text-sm font-medium text-scai-success">Pending Rewards</span>
                      </div>
                      <p className="text-lg font-bold text-scai-success">{stake.rewards} {stake.token}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    {stake.penalty > 0 && (
                      <div className="bg-scai-warning/10 border border-scai-warning/20 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <AlertTriangle className="w-4 h-4 text-scai-warning" />
                          <span className="text-sm font-medium text-scai-warning">Early Withdrawal Penalty</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stake.penalty}% penalty if unstaked now</p>
                      </div>
                    )}

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300" 
                        disabled={stake.daysStaked < 7}
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Claim Rewards
                      </Button>
                      <Button variant="outline" className="w-full">
                        Unstake Position
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}