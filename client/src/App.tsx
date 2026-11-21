import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Campaign from "@/pages/Campaign";
import Rules from "@/pages/Rules";
import NotFound from "@/pages/not-found";
import EnhancedLoadingScreen from "@/components/EnhancedLoadingScreen";
import { TemplateProvider, useTemplate } from "@/context/TemplateContext";
import TemplateSwitcher from "@/components/TemplateSwitcher";
import Template2Home from "@/template2/Template2Home";
import Template3Home from "@/template3/Template3Home";
import T2Rules from "@/template2/pages/T2Rules";
import T2Campaign from "@/template2/pages/T2Campaign";

// Check if loading screen was already shown this session
const LOADING_SHOWN_KEY = "enigma26_loading_shown";

function DynamicHome() {
  const { template } = useTemplate();
  if (template === "template3") return <Template3Home />;
  if (template === "template2") return <Template2Home />;
  return <Home />;
}

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
  return <DynamicHome />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={DynamicHome} />
      <Route path="/template-1" component={Home} />
      <Route path="/template-2" component={Template2Home} />
      <Route path="/template-3" component={Template3Home} />
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
        <TemplateSwitcher />
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
