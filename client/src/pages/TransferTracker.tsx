import { Navbar } from "@/components/layout/Navbar";
import { Users, Globe2, Shield, ArrowUpRight, Activity } from "lucide-react";
import { Link } from "wouter";

export default function TransferTracker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="border-b border-white/10 bg-card/50 backdrop-blur-md sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-white flex items-center gap-3">
                <Activity className="w-8 h-8 text-primary" />
                Transfer Tracker
              </h1>
              <p className="text-muted-foreground mt-1 font-mono">Live updates on active transfer groups and recruitment.</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Active Transfer Groups */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
              <Users className="w-5 h-5 text-primary" />
              Active Transfer Groups
            </h2>
            
            <div className="metallic-panel p-4 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white">Project Vanguard</h3>
                <span className="text-xs bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded">Forming</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Group of 15 players (1.2B total power) looking for a competitive state to take over.</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Led by: FrostKing</span>
                <span className="text-primary hover:underline cursor-pointer">View Details <ArrowUpRight className="w-3 h-3 inline" /></span>
              </div>
            </div>

            <div className="metallic-panel p-4 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white">Casual Collective</h3>
                <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded">Moving Soon</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Small group of 5 friends looking for a peaceful state with strong NAP rules.</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Led by: SnowQueen</span>
                <span className="text-primary hover:underline cursor-pointer">View Details <ArrowUpRight className="w-3 h-3 inline" /></span>
              </div>
            </div>
          </div>

          {/* States Recruiting */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
              <Globe2 className="w-5 h-5 text-primary" />
              States Recruiting
            </h2>
            
            <div className="metallic-panel p-4 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-white text-lg">State #1042</h3>
                <span className="text-xs text-orange-400 flex items-center gap-1">Highly Active</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Looking for strong leads. Won last 3 SvS.</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-black/30 p-2 rounded text-center">
                  <span className="block text-[10px] text-muted-foreground uppercase">Power Cap</span>
                  <span className="text-sm font-mono text-white">150M</span>
                </div>
                <div className="bg-black/30 p-2 rounded text-center">
                  <span className="block text-[10px] text-muted-foreground uppercase">Type</span>
                  <span className="text-sm font-mono text-white">Competitive</span>
                </div>
              </div>
              <Link href="/state/1042">
                <span className="block w-full text-center text-xs bg-white/5 hover:bg-white/10 text-white py-2 rounded transition-colors cursor-pointer">View State Profile</span>
              </Link>
            </div>

            <div className="metallic-panel p-4 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-white text-lg">State #998</h3>
                <span className="text-xs text-green-400 flex items-center gap-1">Open</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Peaceful state with NAP across top 10.</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-black/30 p-2 rounded text-center">
                  <span className="block text-[10px] text-muted-foreground uppercase">Power Cap</span>
                  <span className="text-sm font-mono text-white">None</span>
                </div>
                <div className="bg-black/30 p-2 rounded text-center">
                  <span className="block text-[10px] text-muted-foreground uppercase">Type</span>
                  <span className="text-sm font-mono text-white">Casual</span>
                </div>
              </div>
              <Link href="/state/998">
                <span className="block w-full text-center text-xs bg-white/5 hover:bg-white/10 text-white py-2 rounded transition-colors cursor-pointer">View State Profile</span>
              </Link>
            </div>
          </div>

          {/* Alliances Recruiting */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
              <Shield className="w-5 h-5 text-primary" />
              Alliances Recruiting
            </h2>
            
            <div className="metallic-panel p-4 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-white">[VNG] Vanguard</h3>
                  <p className="text-xs text-muted-foreground">State #1042</p>
                </div>
                <span className="text-xs font-bold text-green-400">Open</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Top 1 alliance in 1042. Looking for dedicated fighters.</p>
              <div className="mb-3">
                <span className="text-[10px] text-muted-foreground uppercase block mb-1">Looking For</span>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] bg-primary/10 border border-primary/20 px-2 py-0.5 rounded text-primary">Garrison Lead</span>
                  <span className="text-[10px] bg-primary/10 border border-primary/20 px-2 py-0.5 rounded text-primary">Rally Lead</span>
                </div>
              </div>
              <Link href="/alliance/vng-vanguard">
                <span className="block w-full text-center text-xs bg-primary/20 hover:bg-primary/30 text-primary py-2 rounded transition-colors cursor-pointer">Apply to Join</span>
              </Link>
            </div>

            <div className="metallic-panel p-4 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-white">[AwK] Awakened</h3>
                  <p className="text-xs text-muted-foreground">State #998</p>
                </div>
                <span className="text-xs font-bold text-yellow-400">Limited</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">Friendly community focused on growth and events.</p>
              <div className="mb-3">
                <span className="text-[10px] text-muted-foreground uppercase block mb-1">Looking For</span>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] bg-primary/10 border border-primary/20 px-2 py-0.5 rounded text-primary">Event Organizer</span>
                </div>
              </div>
              <Link href="/alliance/awk-awakened">
                <span className="block w-full text-center text-xs bg-primary/20 hover:bg-primary/30 text-primary py-2 rounded transition-colors cursor-pointer">Apply to Join</span>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
