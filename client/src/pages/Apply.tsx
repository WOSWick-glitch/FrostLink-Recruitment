import { useParams, Link, useLocation } from "wouter";
import { Shield, Snowflake, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import type { Alliance } from "@shared/schema";

export default function Apply() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();

  const { data: alliance, isLoading } = useQuery<Alliance>({
    queryKey: [`/api/alliances/${slug}`],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setLocation("/players"); 
  };

  if (isLoading || !alliance) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground font-mono">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-white/10 bg-card/50 backdrop-blur-md h-16 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href={`/alliance/${alliance.slug}`}>
            <span className="text-sm text-muted-foreground hover:text-white flex items-center gap-2 cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Back to Alliance
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Snowflake className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-lg text-white">FROST<span className="text-primary">LINK</span></span>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 flex justify-center items-start">
        <div className="w-full max-w-2xl">
          
          <div className="metallic-panel p-8 mb-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 z-0" />
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-16 h-16 rounded bg-black/50 border border-primary/50 flex items-center justify-center font-display font-bold text-2xl text-primary mb-4 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                 {alliance.logo}
               </div>
               <h1 className="font-display text-3xl font-bold text-white mb-2">Apply to {alliance.name}</h1>
               <p className="text-muted-foreground font-mono">State #{alliance.stateNumber}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="metallic-panel p-8">
            <div className="mb-8">
               <h3 className="text-lg font-medium text-white mb-2">Before you apply...</h3>
               <div className="bg-black/40 border border-white/5 rounded p-4 text-sm font-mono text-gray-300">
                 <p className="mb-2"><strong className="text-primary">Requirements:</strong> {alliance.requirements}</p>
                 <p><strong className="text-primary">Looking for:</strong> {alliance.lookingFor.join(", ")}</p>
               </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why are you a good fit? (Optional)
                </label>
                <Textarea 
                  placeholder="Share a bit about your playstyle, availability for events, etc."
                  className="bg-black/40 border-white/10 focus-visible:ring-primary min-h-[120px]"
                  data-testid="input-application-message"
                />
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded p-4 flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-primary/80">
                  Your complete player profile (including stats, furnace level, and roles) will be attached automatically to this application. Make sure your profile is up to date!
                </p>
              </div>

              <Button type="submit" className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,229,255,0.4)]" data-testid="button-send-application">
                <Send className="w-5 h-5 mr-2" />
                Send Application
              </Button>
            </div>
          </form>
          
        </div>
      </main>
    </div>
  );
}
