import React, { createContext, useContext, useState, useEffect } from "react";

export type TemplateMode = "template1" | "template2" | "template3";

interface TemplateContextType {
  template: TemplateMode;
  setTemplate: (template: TemplateMode) => void;
  toggleTemplate: () => void;
  isLaunchAnimationActive: boolean;
  isInitialLaunch: boolean;
  playLaunchAnimation: () => void;
  completeLaunchAnimation: () => void;
}

const TEMPLATE_STORAGE_KEY = "enigma_active_template";

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [template, setTemplateState] = useState<TemplateMode>("template1");

  const setTemplate = (newTemplate: TemplateMode) => {
    setTemplateState("template1");
    if (typeof window !== "undefined") {
      localStorage.setItem(TEMPLATE_STORAGE_KEY, "template1");
    }
  };

  const toggleTemplate = () => {
    setTemplate("template1");
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.template = "template1";
      document.documentElement.style.setProperty("--switcher-height", "0px");
      if (typeof window !== "undefined") {
        localStorage.setItem(TEMPLATE_STORAGE_KEY, "template1");
      }
    }
  }, []);

  const [isLaunchAnimationActive, setIsLaunchAnimationActive] = useState(true);
  const [isInitialLaunch, setIsInitialLaunch] = useState(true);

  const playLaunchAnimation = () => {
    setIsInitialLaunch(false);
    setIsLaunchAnimationActive(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const completeLaunchAnimation = () => {
    setIsLaunchAnimationActive(false);
    setIsInitialLaunch(false);
  };

  return (
    <TemplateContext.Provider
      value={{
        template,
        setTemplate,
        toggleTemplate,
        isLaunchAnimationActive,
        isInitialLaunch,
        playLaunchAnimation,
        completeLaunchAnimation,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
}
