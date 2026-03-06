import { Navbar } from "@/components/layout/Navbar";
import { Users, Globe2, Shield, ArrowUpRight, Activity } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { TransferGroup, State, Alliance } from "@shared/schema";

export default function TransferTracker() {
  const { data: groups = [] } = useQuery<TransferGroup[]>({
    queryKey: ["/api/transfer-groups"],
  });
  const { data: states = [] } = useQuery<State[]>({
    queryKey: ["/api/states"],
  });
  const { data: alliances = [] } = useQuery<Alliance[]>({
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
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
              <Users className="w-5 h-5 text-primary" />
              Active Transfer Groups
            </h2>
            
            {groups.map(group => (
              <div key={group.id} data-testid={`card-transfer-group-${group.id}`} className="metallic-panel p-4 hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{group.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded border ${
                    group.status === 'Forming' 
                      ? 'bg-primary/20 text-primary border-primary/30' 
                      : 'bg-green-500/20 text-green-400 border-green-500/30'
                  }`}>{group.status}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{group.description}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Led by: {group.leader}</span>
                  <span className="text-primary hover:underline cursor-pointer">View Details <ArrowUpRight className="w-3 h-3 inline" /></span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
              <Globe2 className="w-5 h-5 text-primary" />
              States Recruiting
            </h2>
            
            {states.map(state => (
              <div key={state.id} data-testid={`card-tracker-state-${state.id}`} className="metallic-panel p-4 hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-white text-lg">State #{state.stateNumber}</h3>
                  <span className="text-xs text-green-400 flex items-center gap-1">{state.recruitingStatus}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{state.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-black/30 p-2 rounded text-center">
                    <span className="block text-[10px] text-muted-foreground uppercase">Power Cap</span>
                    <span className="text-sm font-mono text-white">{state.powerCapNotes?.split(',')[0] || 'None'}</span>
                  </div>
                  <div className="bg-black/30 p-2 rounded text-center">
                    <span className="block text-[10px] text-muted-foreground uppercase">Type</span>
                    <span className="text-sm font-mono text-white">{state.playstyle}</span>
                  </div>
                </div>
                <Link href={`/state/${state.stateNumber}`}>
                  <span className="block w-full text-center text-xs bg-white/5 hover:bg-white/10 text-white py-2 rounded transition-colors cursor-pointer">View State Profile</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
              <Shield className="w-5 h-5 text-primary" />
              Alliances Recruiting
            </h2>
            
            {alliances.map(alliance => (
              <div key={alliance.id} data-testid={`card-tracker-alliance-${alliance.id}`} className="metallic-panel p-4 hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-white">{alliance.name}</h3>
                    <p className="text-xs text-muted-foreground">State #{alliance.stateNumber}</p>
                  </div>
                  <span className={`text-xs font-bold ${alliance.recruitingStatus === 'Open' ? 'text-green-400' : 'text-yellow-400'}`}>{alliance.recruitingStatus}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{alliance.description}</p>
                <div className="mb-3">
                  <span className="text-[10px] text-muted-foreground uppercase block mb-1">Looking For</span>
                  <div className="flex flex-wrap gap-1">
                    {alliance.lookingFor.slice(0, 2).map(role => (
                      <span key={role} className="text-[10px] bg-primary/10 border border-primary/20 px-2 py-0.5 rounded text-primary">{role}</span>
                    ))}
                  </div>
                </div>
                <Link href={`/alliance/${alliance.slug}`}>
                  <span className="block w-full text-center text-xs bg-primary/20 hover:bg-primary/30 text-primary py-2 rounded transition-colors cursor-pointer">Apply to Join</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
