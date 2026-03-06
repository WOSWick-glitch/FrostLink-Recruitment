import { Navbar } from "@/components/layout/Navbar";
import { MOCK_STATES, MOCK_ALLIANCES } from "@/lib/mock-data";
import { useParams, Link } from "wouter";
import { Globe2, Users, Flame, Shield, ChevronRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StateProfile() {
  const { stateNumber } = useParams<{ stateNumber: string }>();
  const state = MOCK_STATES.find(s => s.stateNumber === Number(stateNumber)) || MOCK_STATES[0];
  const stateAlliances = MOCK_ALLIANCES.filter(a => a.stateNumber === state.stateNumber);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center text-sm text-muted-foreground font-mono">
          <Link href="/states"><a className="hover:text-white">States</a></Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">State #{state.stateNumber}</span>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        
        {/* State Header Header */}
        <div className="metallic-panel p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Globe2 className="w-48 h-48" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <Globe2 className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  State #{state.stateNumber}
                </h1>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className={`px-3 py-1 rounded-full font-mono font-bold border ${
                    state.recruitingStatus === 'Open' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }`}>
                    Recruiting {state.recruitingStatus}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-500" /> {state.playstyle}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {state.language}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
               <Button variant="outline" className="border-white/10 bg-black/40 hover:bg-white/5 text-white">
                Save State
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full md:w-auto flex flex-wrap bg-card border border-white/10 p-1 mb-8 h-auto">
            <TabsTrigger value="overview" className="flex-1 md:flex-none data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_10px_rgba(0,229,255,0.2)]">
              Overview
            </TabsTrigger>
            <TabsTrigger value="alliances" className="flex-1 md:flex-none data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_10px_rgba(0,229,255,0.2)]">
              Recruiting Alliances ({stateAlliances.length})
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex-1 md:flex-none data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_10px_rgba(0,229,255,0.2)]">
              Contacts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div className="metallic-panel p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                    State Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {state.description}
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    We are currently looking for strong players to bolster our ranks for the next SvS. We have a highly organized leadership council and a drama-free environment. All top alliances work together for the betterment of the state.
                  </p>
                </div>
                
                <div className="metallic-panel p-6">
                   <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                    <History className="w-5 h-5 text-primary" />
                    Recent Updates
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/50 pl-4 py-1">
                      <p className="text-xs text-muted-foreground mb-1">2 days ago</p>
                      <p className="text-sm text-gray-300">Updated power cap notes for upcoming transfer event. Now accepting applications for leads.</p>
                    </div>
                    <div className="border-l-2 border-white/10 pl-4 py-1">
                      <p className="text-xs text-muted-foreground mb-1">1 week ago</p>
                      <p className="text-sm text-gray-300">Won SvS against State 1024! Great job everyone.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="metallic-panel p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                    State Reputation
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-sm text-muted-foreground">Politics</span>
                      <span className="font-mono text-white text-sm">{state.politics || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-sm text-muted-foreground">NAP Stability</span>
                      <span className="font-mono text-white text-sm">{state.napStability || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-sm text-muted-foreground">SvS Coordination</span>
                      <span className="font-mono text-white text-sm">{state.svsCoordination || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between items-center pb-1">
                      <span className="text-sm text-muted-foreground">Drama Level</span>
                      <span className={`font-mono text-sm font-bold ${
                        state.dramaLevel === 'Low' ? 'text-green-400' :
                        state.dramaLevel === 'Medium' ? 'text-yellow-400' :
                        state.dramaLevel === 'High' ? 'text-red-400' : 'text-white'
                      }`}>{state.dramaLevel || "Unknown"}</span>
                    </div>
                  </div>
                </div>

                <div className="metallic-panel p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                    Transfer Rules
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-primary uppercase font-bold tracking-wider mb-1 block">Power Cap / Requirements</span>
                      <p className="text-sm font-mono text-white bg-black/40 p-3 rounded border border-white/5">
                        {state.powerCapNotes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="alliances">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateAlliances.length > 0 ? (
                 stateAlliances.map(alliance => (
                   <div key={alliance.id} className="metallic-panel p-5 group flex flex-col h-full hover:border-primary/50 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded bg-black/50 border border-white/10 flex items-center justify-center font-display font-bold text-lg text-primary">
                            {alliance.logo}
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-bold text-white group-hover:text-primary transition-colors">
                              {alliance.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-2">{alliance.description}</p>
                      <div className="mt-auto pt-4 flex gap-2">
                        <Link href={`/alliance/${alliance.slug}`}>
                           <Button className="w-full bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 hover:border-primary transition-all">
                             View Alliance
                           </Button>
                        </Link>
                      </div>
                   </div>
                 ))
              ) : (
                <div className="col-span-full py-12 text-center text-muted-foreground">
                  No alliances are currently actively recruiting on FrostLink in this state.
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="contacts">
             <div className="metallic-panel p-6 text-center py-16">
                <Shield className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">State Contacts</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Only verified State Staff can be listed here to prevent spam. Please log in to view Discord contact tags.
                </p>
                <Button className="mt-6 bg-primary/20 text-primary border border-primary/50">
                  Sign in to View
                </Button>
             </div>
          </TabsContent>
        </Tabs>

      </main>
    </div>
  );
}
