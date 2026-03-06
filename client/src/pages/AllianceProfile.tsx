import { Navbar } from "@/components/layout/Navbar";
import { useParams, Link } from "wouter";
import { Shield, ChevronRight, Globe2, Users, CheckSquare, Copy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Alliance } from "@shared/schema";

export default function AllianceProfile() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: alliance, isLoading } = useQuery<Alliance>({
    queryKey: [`/api/alliances/${slug}`],
  });

  if (isLoading || !alliance) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground font-mono">Loading alliance...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center text-sm text-muted-foreground font-mono">
          <Link href="/alliances"><span className="hover:text-white cursor-pointer">Alliances</span></Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href={`/state/${alliance.stateNumber}`}><span className="hover:text-white cursor-pointer">State #{alliance.stateNumber}</span></Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">{alliance.name}</span>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="metallic-panel p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Shield className="w-48 h-48" />
               </div>
               
               <div className="relative z-10 flex items-start gap-6">
                 <div className="w-24 h-24 rounded bg-black/50 border-2 border-primary/50 flex items-center justify-center font-display font-bold text-4xl text-primary shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                   {alliance.logo}
                 </div>
                 
                 <div className="flex-1">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                     <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
                       {alliance.name}
                     </h1>
                     <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold border inline-flex items-center w-max ${
                        alliance.recruitingStatus === 'Open' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}>
                        Recruiting: {alliance.recruitingStatus}
                      </div>
                   </div>
                   
                   <p className="text-muted-foreground flex items-center gap-2 font-mono">
                     <Globe2 className="w-4 h-4" /> State #{alliance.stateNumber}
                   </p>
                 </div>
               </div>
            </div>

            <div className="metallic-panel p-6">
              <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                About Us
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {alliance.description}
                {"\n\n"}
                We are a highly coordinated group focused on maximizing event rewards and dominating SvS. We expect all members to use Discord for communication during major events. Our leadership team is experienced and fair.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="metallic-panel p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-primary" />
                  Requirements
                </h3>
                <div className="bg-black/40 p-4 rounded-md border border-white/5">
                  <p className="font-mono text-sm text-white">{alliance.requirements}</p>
                </div>
              </div>
              
              <div className="metallic-panel p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Looking For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {alliance.lookingFor.map(role => (
                    <span key={role} className="text-sm bg-primary/10 border border-primary/30 px-3 py-1.5 rounded text-primary">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="metallic-panel p-6 border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              <div className="text-center mb-6">
                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                   <Users className="w-8 h-8 text-primary" />
                 </div>
                 <h2 className="font-display text-2xl font-bold text-white mb-1">Apply to Join</h2>
                 <p className="text-sm text-primary font-mono font-bold">~ {alliance.openSlotsEstimate} Slots Available</p>
              </div>
              
              <Link href={`/apply/${alliance.slug}`}>
                <Button className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.5)] mb-4 transition-all hover:scale-105" data-testid="button-submit-application">
                  Submit Application
                </Button>
              </Link>
              
              <Button variant="outline" className="w-full border-white/10 bg-black/40 hover:bg-white/5 text-white flex items-center justify-center gap-2" data-testid="button-copy-link">
                <Copy className="w-4 h-4" /> Copy Apply Link
              </Button>
              
              <div className="mt-6 text-center border-t border-white/10 pt-4">
                <p className="text-xs text-muted-foreground">Last updated {alliance.lastUpdated}</p>
              </div>
            </div>
            
            <div className="metallic-panel p-6">
              <h3 className="font-display text-lg font-bold text-white mb-3">Recruiters</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-black/30 p-2 rounded">
                  <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-xs font-bold">R5</div>
                  <div>
                    <p className="text-sm font-bold text-white">VNG|Boss</p>
                    <p className="text-[10px] text-muted-foreground">Alliance Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
