import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Shield, Swords, Globe2, Flame, ArrowRight, UserCheck, Snowflake } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Alliance, Player } from "@shared/schema";

export default function Home() {
  const { data: alliances = [] } = useQuery<Alliance[]>({
    queryKey: ["/api/alliances"],
  });
  const { data: players = [] } = useQuery<Player[]>({
    queryKey: ["/api/players"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                  <Flame className="w-8 h-8 text-orange-500" />
                  Hot This Transfer Season
                </h2>
                <p className="text-muted-foreground mt-2 font-mono text-lg">Top destinations and elite talents looking for a new home.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <h3 className="text-xl font-medium text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Top Recruiting Alliances
                  </h3>
                  <Link href="/alliances">
                    <span className="text-sm text-primary hover:text-white flex items-center transition-colors cursor-pointer">
                      View All <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {alliances.map(alliance => (
                    <div key={alliance.id} data-testid={`card-featured-alliance-${alliance.id}`} className={`metallic-panel p-5 group transition-colors relative overflow-hidden ${alliance.isSponsored ? 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 'hover:border-primary/50'}`}>
                      {alliance.isSponsored && (
                        <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-bold px-3 py-0.5 rounded-bl-lg">
                          SPONSORED
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-4 mt-1">
                        <div>
                          <h4 className={`font-display text-xl font-bold group-hover:text-primary transition-colors ${alliance.isSponsored ? 'text-yellow-400' : 'text-white'}`}>
                            {alliance.name}
                          </h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <Globe2 className="w-3 h-3" /> State #{alliance.stateNumber}
                          </p>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 text-primary text-xs px-2 py-1 rounded">
                          {alliance.openSlotsEstimate} Slots Left
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-2">{alliance.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {alliance.lookingFor.map(role => (
                          <span key={role} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400">
                            {role}
                          </span>
                        ))}
                      </div>
                      <Link href={`/alliance/${alliance.slug}`}>
                        <Button className="w-full bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 hover:border-primary transition-all">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <h3 className="text-xl font-medium text-white flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    Player Spotlight
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  {players.slice(0, 2).map(player => (
                    <div key={player.id} data-testid={`card-spotlight-player-${player.id}`} className="metallic-panel p-5 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Swords className="w-16 h-16" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-display text-lg font-bold text-white group-hover:text-primary transition-colors">
                            {player.displayName}
                          </h4>
                          <span className="text-xs font-mono bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded">
                            {player.transferStatus}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mb-3 mt-4">
                          <div className="runescape-stat-box py-2">
                            <span className="text-[10px] text-muted-foreground uppercase">Power</span>
                            <span className="text-sm font-mono text-white">{player.powerBucket}</span>
                          </div>
                          <div className="runescape-stat-box py-2">
                            <span className="text-[10px] text-muted-foreground uppercase">Furnace</span>
                            <span className="text-sm font-mono text-white">{player.furnaceLevel}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 italic mb-4 line-clamp-2">"{player.notesPublic}"</p>
                        
                        <Link href={`/player/${player.slug}`}>
                          <Button variant="ghost" size="sm" className="w-full text-primary hover:text-white hover:bg-primary/20">
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black/40 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16">
              How Transfer Season Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Create Profile", desc: "Build your character sheet. Showcase your stats, preferred playstyle, and what you're looking for in a new state." },
                { step: "02", title: "Browse & Filter", desc: "Use advanced filters to find the perfect alliance or state that matches your power level and timezone." },
                { step: "03", title: "Connect & Apply", desc: "Apply directly through our secure platform. No more messy Discord DMs or lost screenshots." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center relative">
                  {i !== 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center font-display text-2xl text-primary font-bold mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-mono">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 bg-background border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div className="flex items-center gap-2">
              <Snowflake className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-lg text-white">FROST<span className="text-primary">LINK</span></span>
            </div>
            <div className="text-sm text-muted-foreground flex gap-4">
              <Link href="/about"><span className="hover:text-white cursor-pointer">About</span></Link>
              <Link href="/rules"><span className="hover:text-white cursor-pointer">Rules</span></Link>
              <Link href="/privacy"><span className="hover:text-white cursor-pointer">Privacy</span></Link>
            </div>
            <div className="text-xs text-muted-foreground/50">
              A controlled recruitment environment. Verified endorsements only.
            </div>
          </div>
          
          <div className="max-w-3xl text-center border-t border-white/5 pt-6 mt-2">
            <p className="text-[10px] text-muted-foreground/40 font-mono uppercase tracking-wider">
              DISCLAIMER: FrostLink is an independent, community-driven platform and is NOT affiliated with, endorsed by, sponsored by, or officially connected to Whiteout Survival, Century Games, or any of their partners. This tool is built by players, for players, to improve the recruitment and transfer season experience.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
