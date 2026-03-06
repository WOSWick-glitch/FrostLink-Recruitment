import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Players from "@/pages/Players";
import PlayerProfile from "@/pages/PlayerProfile";
import Alliances from "@/pages/Alliances";
import AllianceProfile from "@/pages/AllianceProfile";
import States from "@/pages/States";
import StateProfile from "@/pages/StateProfile";
import Apply from "@/pages/Apply";
import TransferTracker from "@/pages/TransferTracker";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      <Route path="/states" component={States} />
      <Route path="/state/:stateNumber" component={StateProfile} />
      
      <Route path="/alliances" component={Alliances} />
      <Route path="/alliance/:slug" component={AllianceProfile} />
      <Route path="/apply/:slug" component={Apply} />
      
      <Route path="/players" component={Players} />
      <Route path="/player/:slug" component={PlayerProfile} />

      <Route path="/tracker" component={TransferTracker} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
