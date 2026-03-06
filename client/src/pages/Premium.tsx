import { Navbar } from "@/components/layout/Navbar";
import { Check, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Premium() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Level Up Your <span className="text-primary">Recruitment</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stand out from the crowd. Whether you're a player looking for the perfect state, or an alliance hunting for whales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Player Tier */}
          <div className="metallic-panel p-8 flex flex-col relative">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Player Premium</h3>
              <div className="text-3xl font-bold text-white mb-1">$2.00<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground">Get noticed by top alliances faster.</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Premium badge on your profile
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Pinned to the top of Player Search
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Custom profile banner
              </li>
            </ul>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Upgrade Profile</Button>
          </div>

          {/* Recruiter Tier */}
          <div className="metallic-panel p-8 flex flex-col relative border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.15)] transform md:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(0,229,255,0.4)]">
              Most Popular
            </div>
            <div className="mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Recruiter Pro</h3>
              <div className="text-3xl font-bold text-white mb-1">$5.00<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground">Everything you need to scout talent.</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Unlock Discord contact info
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> View full player transfer history
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Advanced filtering tools
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Send direct in-app messages
              </li>
            </ul>
            
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all">Get Pro Access</Button>
          </div>

          {/* Alliance Sponsor Tier */}
          <div className="metallic-panel p-8 flex flex-col relative">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Alliance Sponsor</h3>
              <div className="text-3xl font-bold text-white mb-1">$10.00<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground">Fill your roster in record time.</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Featured on the Home Page
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Highlighted in Alliance Directory
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-primary shrink-0" /> Includes 3 Recruiter Pro accounts
              </li>
            </ul>
            
            <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Sponsor Alliance</Button>
          </div>

        </div>
      </main>
    </div>
  );
}
