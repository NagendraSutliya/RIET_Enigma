import React, { createContext, useContext, useState, useEffect } from "react";

export type TemplateMode = "template1" | "template2" | "template3";

interface TemplateContextType {
  template: TemplateMode;
  setTemplate: (template: TemplateMode) => void;
  toggleTemplate: () => void;
  isLaunchAnimationActive: boolean;
  playLaunchAnimation: () => void;
  completeLaunchAnimation: () => void;
}

const TEMPLATE_STORAGE_KEY = "enigma_active_template";

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [template, setTemplateState] = useState<TemplateMode>(() => {
    if (typeof window !== "undefined") {
      // Check URL query param first: ?template=1, ?template=2, ?template=3
      const params = new URLSearchParams(window.location.search);
      const urlTemplate = params.get("template");
      if (urlTemplate === "3" || urlTemplate === "template3") return "template3";
      if (urlTemplate === "2" || urlTemplate === "template2") return "template2";
      if (urlTemplate === "1" || urlTemplate === "template1") return "template1";

      const stored = localStorage.getItem(TEMPLATE_STORAGE_KEY) as TemplateMode;
      if (stored === "template3" || stored === "template2" || stored === "template1") return stored;
    }
    return "template2"; // default to Template 2 (Cyber Pro ✨)
  });

  const setTemplate = (newTemplate: TemplateMode) => {
    setTemplateState(newTemplate);
    if (typeof window !== "undefined") {
      localStorage.setItem(TEMPLATE_STORAGE_KEY, newTemplate);
    }
  };

  const toggleTemplate = () => {
    setTemplate(template === "template1" ? "template2" : template === "template2" ? "template3" : "template1");
  };

  useEffect(() => {
    // Sync document title and theme class if needed
    if (typeof document !== "undefined") {
      document.documentElement.dataset.template = template;
    }
  }, [template]);

  const [isLaunchAnimationActive, setIsLaunchAnimationActive] = useState(true);

  const playLaunchAnimation = () => {
    setIsLaunchAnimationActive(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const completeLaunchAnimation = () => {
    setIsLaunchAnimationActive(false);
  };

  return (
    <TemplateContext.Provider
      value={{
        template,
        setTemplate,
        toggleTemplate,
        isLaunchAnimationActive,
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
