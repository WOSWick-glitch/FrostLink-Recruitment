import { Navbar } from "@/components/layout/Navbar";
import { Search, Filter, Shield, ChevronDown, Globe2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Alliance } from "@shared/schema";

export default function Alliances() {
  const { data: alliances = [], isLoading } = useQuery<Alliance[]>({
    queryKey: ["/api/alliances"],
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="border-b border-white/10 bg-card/50 backdrop-blur-md sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-white flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Alliance Directory
              </h1>
              <p className="text-muted-foreground mt-1 font-mono">Find your next home. Browse top alliances currently recruiting.</p>
            </div>
            
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name or state..." 
                  className="pl-9 bg-black/40 border-white/10 focus-visible:ring-primary h-10"
                  data-testid="input-search-alliances"
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
              Recruiting: Open
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              State: Any <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-muted-foreground hover:text-white">
              Needs: Garrison Lead <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground font-mono">
            {isLoading ? "Loading..." : `Showing ${alliances.length} alliances`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alliances.map(alliance => (
            <div key={alliance.id} data-testid={`card-alliance-${alliance.id}`} className="metallic-panel group flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="p-5 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-black/50 border border-white/10 flex items-center justify-center font-display font-bold text-lg text-primary">
                      {alliance.logo}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {alliance.name}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Globe2 className="w-3 h-3" /> State #{alliance.stateNumber}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-black/30 border border-white/5 rounded p-2 text-center">
                    <span className="block text-[10px] text-muted-foreground uppercase">Status</span>
                    <span className={`text-sm font-bold ${alliance.recruitingStatus === 'Open' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {alliance.recruitingStatus}
                    </span>
                  </div>
                  <div className="bg-black/30 border border-white/5 rounded p-2 text-center">
                    <span className="block text-[10px] text-muted-foreground uppercase">Open Slots</span>
                    <span className="text-sm font-bold text-white flex justify-center items-center gap-1">
                      <Users className="w-3 h-3 text-primary" /> {alliance.openSlotsEstimate}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] text-muted-foreground uppercase block mb-1">Requirements</span>
                  <p className="text-sm font-mono text-gray-300">{alliance.requirements}</p>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] text-muted-foreground uppercase block mb-2">Looking For</span>
                  <div className="flex flex-wrap gap-1.5">
                    {alliance.lookingFor.map(role => (
                      <span key={role} className="text-[10px] uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-1 rounded text-primary">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-5 border-t border-white/5 bg-black/20 flex flex-col gap-3 mt-auto">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    Updated {alliance.lastUpdated}
                  </span>
                  <Link href={`/alliance/${alliance.slug}`}>
                    <span className="text-sm text-primary hover:text-white transition-colors cursor-pointer">Details</span>
                  </Link>
                </div>
                <Link href={`/apply/${alliance.slug}`}>
                  <Button className="w-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/50 shadow-[0_0_10px_rgba(0,229,255,0.2)]" data-testid={`button-apply-${alliance.id}`}>
                    Apply Now
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
