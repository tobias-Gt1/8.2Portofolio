import { useEffect } from "react";

const SECTION_COLORS: Record<string, { accent: string; fg: string }> = {
  hero:     { accent: "#00e5ff", fg: "#0c0c0c" },
  about:    { accent: "#ff2d78", fg: "#f5f5f5" },
  skills:   { accent: "#c8ff00", fg: "#0c0c0c" },
  projects: { accent: "#ff5c00", fg: "#0c0c0c" },
  contact:  { accent: "#b14eff", fg: "#f5f5f5" },
};

export function useScrollAccent() {
  useEffect(() => {
    let current = "hero";

    const sections = Object.keys(SECTION_COLORS)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const apply = (id: string) => {
      if (id === current) return;
      current = id;
      const { accent, fg } = SECTION_COLORS[id];
      document.documentElement.style.setProperty("--live-accent", accent);
      document.documentElement.style.setProperty("--live-accent-fg", fg);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) apply(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}
