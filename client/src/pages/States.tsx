import { Navbar } from "@/components/layout/Navbar";
import { Search, Filter, Globe2, ChevronDown, Users, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { State } from "@shared/schema";

export default function States() {
  const { data: states = [], isLoading } = useQuery<State[]>({
    queryKey: ["/api/states"],
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="border-b border-white/10 bg-card/50 backdrop-blur-md sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-white flex items-center gap-3">
                <Globe2 className="w-8 h-8 text-primary" />
                State Directory
              </h1>
              <p className="text-muted-foreground mt-1 font-mono">Explore states, their rules, and top alliances.</p>
            </div>
            
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search state number..." 
                  className="pl-9 bg-black/40 border-white/10 focus-visible:ring-primary h-10"
                  data-testid="input-search-states"
                />
              </div>
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 h-10 px-3" data-testid="button-filters">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6">
            <Button variant="secondary" size="sm" className="bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30">
              Recruiting Open
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              Playstyle <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              Language <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground font-mono">
            {isLoading ? "Loading..." : `Showing ${states.length} states`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map(state => (
            <div key={state.id} data-testid={`card-state-${state.id}`} className="metallic-panel group flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="p-5 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                      <Globe2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                        State #{state.stateNumber}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        {state.language} Server
                      </p>
                    </div>
                  </div>
                  <div className={`text-xs font-mono px-2 py-1 rounded border ${
                    state.recruitingStatus === 'Open' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }`}>
                    {state.recruitingStatus}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-black/30 border border-white/5 rounded p-2 text-center flex flex-col items-center justify-center">
                    <span className="block text-[10px] text-muted-foreground uppercase mb-1">Playstyle</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-500" /> {state.playstyle}
                    </span>
                  </div>
                  <div className="bg-black/30 border border-white/5 rounded p-2 text-center flex flex-col items-center justify-center">
                    <span className="block text-[10px] text-muted-foreground uppercase mb-1">Top Alliances</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1">
                      <Users className="w-3 h-3 text-primary" /> {state.topAlliancesCount} Recruiting
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] text-muted-foreground uppercase block mb-1">Power Cap / Rules</span>
                  <p className="text-sm font-mono text-gray-300">{state.powerCapNotes}</p>
                </div>

                <p className="text-sm text-gray-400 italic line-clamp-2">"{state.description}"</p>
              </div>
              
              <div className="p-5 border-t border-white/5 bg-black/20 flex items-center justify-between mt-auto">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  Updated {state.lastUpdated}
                </span>
                <Link href={`/state/${state.stateNumber}`}>
                  <Button size="sm" className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30" data-testid={`button-view-state-${state.id}`}>
                    View State
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
