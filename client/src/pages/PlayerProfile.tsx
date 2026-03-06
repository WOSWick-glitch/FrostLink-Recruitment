import { Navbar } from "@/components/layout/Navbar";
import { MOCK_PLAYERS } from "@/lib/mock-data";
import { useParams } from "wouter";
import { Shield, Swords, Activity, Flame, ChevronRight, CheckCircle2, ThumbsUp, Star, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PlayerProfile() {
  const { slug } = useParams<{ slug: string }>();
  // In a real app, we'd fetch the player by slug
  const player = MOCK_PLAYERS.find(p => p.slug === slug) || MOCK_PLAYERS[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center text-sm text-muted-foreground font-mono">
          <Link href="/players"><a className="hover:text-white">Players</a></Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className={player.isPremium ? "text-blue-400 font-bold" : "text-white"}>{player.displayName}</span>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column - Character Sheet */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`metallic-panel p-1 relative overflow-hidden ${player.isPremium ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : ''}`}>
              {player.isPremium && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full z-0"></div>
              )}
              <div className="bg-card border border-white/5 rounded-md p-6 h-full relative z-10 flex flex-col items-center text-center">
                
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 relative ${
                  player.isPremium 
                    ? 'bg-blue-500/20 border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                    : 'bg-primary/10 border-2 border-primary/50 shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                }`}>
                  <Swords className={`w-10 h-10 ${player.isPremium ? 'text-blue-400' : 'text-primary'}`} />
                  {player.isPremium && (
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1 border-2 border-background">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  )}
                </div>
                
                <h1 className={`font-display text-3xl font-bold mb-1 flex items-center gap-2 ${player.isPremium ? 'text-blue-400 text-shadow-glow-blue' : 'text-white'}`}>
                  {player.displayName}
                  {player.reputation > 90 && (
                    <CheckCircle2 className="w-5 h-5 text-primary" title="Highly Verified" />
                  )}
                </h1>
                
                <p className="text-muted-foreground font-mono mb-4">State #{player.currentStateNumber}</p>
                
                <div className={`px-4 py-1.5 rounded-full text-sm font-bold border mb-2 ${
                    player.transferStatus === 'Ready' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.2)]' 
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                  }`}>
                  Transfer: {player.transferStatus}
                </div>

                <div className={`px-4 py-1.5 rounded-full text-xs font-bold border mb-6 ${
                    player.statsStatus === 'Up to Date' 
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' 
                      : 'bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-pulse'
                  }`}>
                  Stats: {player.statsStatus || 'Unknown'}
                </div>

                <div className="w-full space-y-3 mt-4 text-left">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm text-muted-foreground">Reputation Score</span>
                    <span className="font-mono text-primary font-bold text-lg">{player.reputation}/100</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm text-muted-foreground">Playstyle</span>
                    <span className="font-mono text-white">{player.playstyle}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm text-muted-foreground">Language</span>
                    <span className="font-mono text-white">{player.language}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">Discord <Lock className="w-3 h-3" /></span>
                    <div className="group relative cursor-pointer">
                      <span className="font-mono text-white blur-sm select-none">Hidden#0000</span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded font-bold">PRO REQUIRED</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-muted-foreground">Last Updated</span>
                    <span className="font-mono text-white text-xs">{player.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Endorsements Panel */}
            <div className="metallic-panel p-6">
              <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-primary" />
                Endorsements
              </h3>
              <div className="space-y-3">
                {player.endorsements.map(end => (
                  <div key={end.id} className="bg-black/40 border border-white/5 rounded p-3 flex items-start gap-3">
                    <div className="mt-1">
                      {end.type === 'state_staff' ? (
                        <Shield className="w-4 h-4 text-purple-400" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white">{end.tag}</span>
                      <p className="text-xs text-muted-foreground">
                        by Verified {end.type === 'state_staff' ? 'State Staff' : 'Recruiter'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Details */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Action Bar */}
            <div className="flex justify-end gap-3">
              <Button variant="outline" className="border-white/10 bg-black/40 hover:bg-white/5 text-white">
                Save Profile
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                Invite to Alliance
              </Button>
            </div>

            {/* Runescape Style Stats Grid */}
            <div className="metallic-panel p-6">
              <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6 text-primary" />
                Combat Statistics
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="runescape-stat-box p-4 border-primary/20">
                  <span className="text-xs text-primary uppercase font-bold tracking-wider mb-1">Power Bucket</span>
                  <span className="text-lg md:text-xl font-mono text-white font-bold">{player.powerBucket}</span>
                </div>
                <div className="runescape-stat-box p-4 border-primary/20">
                  <span className="text-xs text-primary uppercase font-bold tracking-wider mb-1">Furnace</span>
                  <span className="text-lg md:text-xl font-mono text-white font-bold">{player.furnaceLevel}</span>
                </div>
                <div className="runescape-stat-box p-4 border-red-500/20">
                  <span className="text-xs text-red-400 uppercase font-bold tracking-wider mb-1">Total Kills</span>
                  <span className="text-lg md:text-xl font-mono text-white font-bold">{player.stats?.kills || "N/A"}</span>
                </div>
                <div className="runescape-stat-box p-4 border-orange-500/20">
                  <span className="text-xs text-orange-400 uppercase font-bold tracking-wider mb-1">Highest Power</span>
                  <span className="text-lg md:text-xl font-mono text-white font-bold">{player.stats?.highestPower || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Details & Looking For */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="metallic-panel p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                  Player Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {player.roles.map(role => (
                    <div key={role} className="bg-black/60 border border-primary/30 px-3 py-2 rounded-md text-sm text-primary font-medium flex items-center gap-2">
                      <Flame className="w-4 h-4" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>

              <div className="metallic-panel p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                  Public Notes
                </h3>
                <p className="text-gray-300 italic bg-black/40 p-4 rounded-md border-l-2 border-primary">
                  "{player.notesPublic}"
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
