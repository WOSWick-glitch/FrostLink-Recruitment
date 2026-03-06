import { Link } from "wouter";
import { Snowflake, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all">
              <Snowflake className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white">
              FROST<span className="text-primary">LINK</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/states">
            <span className="text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer">States</span>
          </Link>
          <Link href="/alliances">
            <span className="text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer">Alliances</span>
          </Link>
          <Link href="/players">
            <span className="text-sm font-medium text-muted-foreground hover:text-white transition-colors cursor-pointer">Players</span>
          </Link>
          <Link href="/tracker">
            <span className="text-sm font-medium text-primary hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              Tracker
            </span>
          </Link>
          
          <div className="w-px h-4 bg-white/10 mx-2"></div>
          
          <Link href="/premium">
            <span className="text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer flex items-center gap-1">
              Upgrade
            </span>
          </Link>
          
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium hover:text-white">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-muted-foreground hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-card p-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <Link href="/states">
              <span className="px-4 py-2 rounded-md hover:bg-white/5 text-sm font-medium cursor-pointer">States</span>
            </Link>
            <Link href="/alliances">
              <span className="px-4 py-2 rounded-md hover:bg-white/5 text-sm font-medium cursor-pointer">Alliances</span>
            </Link>
            <Link href="/players">
              <span className="px-4 py-2 rounded-md hover:bg-white/5 text-sm font-medium cursor-pointer">Players</span>
            </Link>
            <Link href="/tracker">
              <span className="px-4 py-2 rounded-md hover:bg-white/5 text-sm font-medium text-primary cursor-pointer">Tracker</span>
            </Link>
          </div>
          <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
            <Link href="/login">
              <Button variant="ghost" className="w-full justify-start">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="w-full bg-primary/20 text-primary border border-primary/50">Register</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
