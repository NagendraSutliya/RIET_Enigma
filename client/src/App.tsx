import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import NotFound from "@/pages/not-found";
import EnhancedLoadingScreen from "@/components/EnhancedLoadingScreen";
import { TemplateProvider, useTemplate } from "@/context/TemplateContext";

function RedirectToSection({ section }: { section: string }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace(`/#${section}`);
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [section]);
  return <Home />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/template-1" component={Home} />
      <Route path="/template-2">
        <Redirect to="/" />
      </Route>
      <Route path="/template-3">
        <Redirect to="/" />
      </Route>
      <Route path="/register" component={Register} />
      <Route path="/campaign">
        <RedirectToSection section="campaign" />
      </Route>
      <Route path="/rules">
        <RedirectToSection section="rules" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const { isLaunchAnimationActive, completeLaunchAnimation } = useTemplate();

  return (
    <>
      {isLaunchAnimationActive && (
        <EnhancedLoadingScreen onComplete={completeLaunchAnimation} />
      )}
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TemplateProvider>
        <AppContent />
      </TemplateProvider>
    </QueryClientProvider>
  );
}

export default App;
