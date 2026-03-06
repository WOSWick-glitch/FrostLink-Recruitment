import { Navbar } from "@/components/layout/Navbar";
import { MOCK_PLAYERS } from "@/lib/mock-data";
import { Search, Filter, Swords, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function Players() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="border-b border-white/10 bg-card/50 backdrop-blur-md sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-white flex items-center gap-3">
                <Swords className="w-8 h-8 text-primary" />
                Player Recruitment
              </h1>
              <p className="text-muted-foreground mt-1 font-mono">Find the perfect additions to your alliance roster.</p>
            </div>
            
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, state, or ID..." 
                  className="pl-9 bg-black/40 border-white/10 focus-visible:ring-primary h-10"
                />
              </div>
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 h-10 px-3">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-6">
            <Button variant="secondary" size="sm" className="bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30">
              Transfer Ready
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              Furnace Level <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              Hero Power <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              State Age <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              Language <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              Role <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground font-mono">Showing {MOCK_PLAYERS.length} players</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Sort by: <span className="text-white font-medium cursor-pointer">Recently Updated</span> <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PLAYERS.map(player => (
            <div key={player.id} className="metallic-panel group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="p-5 flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      {player.displayName}
                      {player.reputation > 90 && (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      Current State: <span className="text-white">#{player.currentStateNumber}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className={`text-xs font-mono px-2 py-1 rounded border ${
                      player.transferStatus === 'Ready' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {player.transferStatus}
                    </div>
                    {player.statsStatus === 'Update Required' && (
                      <div className="text-[10px] font-bold px-2 py-1 rounded border bg-red-500/20 text-red-400 border-red-500/50 animate-pulse">
                        UPDATE REQUIRED
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 my-4">
                  <div className="runescape-stat-box py-2">
                    <span className="text-[10px] text-muted-foreground uppercase">Power Bucket</span>
                    <span className="text-sm font-mono text-white">{player.powerBucket}</span>
                  </div>
                  <div className="runescape-stat-box py-2">
                    <span className="text-[10px] text-muted-foreground uppercase">Furnace</span>
                    <span className="text-sm font-mono text-white">{player.furnaceLevel}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {player.roles.map(role => (
                    <span key={role} className="text-[11px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
                      {role}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-400 italic line-clamp-2">"{player.notesPublic}"</p>
              </div>
              
              <div className="p-5 border-t border-white/5 bg-black/20 flex items-center justify-between mt-auto">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  Updated {player.lastUpdated}
                </span>
                <Link href={`/player/${player.slug}`}>
                  <Button size="sm" className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
