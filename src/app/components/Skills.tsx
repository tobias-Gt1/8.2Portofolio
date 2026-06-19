import { useRef } from "react";
import { motion, useInView } from "motion/react";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    color: "#c8ff00",
    fg: "#0c0c0c",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design", "Animaties"],
  },
  {
    category: "Backend",
    color: "#00e5ff",
    fg: "#0c0c0c",
    skills: ["PHP", "Node.js", "MySQL", "REST API", "MVC", "Server-side rendering"],
  },
  {
    category: "CMS & Tools",
    color: "#ff5c00",
    fg: "#0c0c0c",
    skills: ["WordPress", "Git", "GitHub", "Figma", "VS Code", "npm", "Vite"],
  },
  {
    category: "Aan het leren",
    color: "#b14eff",
    fg: "#f5f5f5",
    skills: ["TypeScript", "Next.js", "Docker", "GraphQL"],
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 md:px-10 relative overflow-hidden bg-[#080808]">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 h-[3px] w-full origin-left"
        style={{ background: "var(--live-accent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span
                className="font-['Space_Mono'] text-xs uppercase tracking-[0.4em]"
                style={{ color: "var(--live-accent)" }}
              >
                02
              </span>
              <div className="h-px w-20" style={{ background: "var(--live-accent)" }} />
              <span className="font-['Space_Mono'] text-xs uppercase tracking-[0.4em] text-[#555]">
                Skills
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Archivo_Black'] text-[#f5f5f5]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Wat ik <span style={{ color: "var(--live-accent)" }}>kan</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#555] max-w-xs text-sm font-['Space_Mono'] leading-relaxed"
          >
            Een overzicht van mijn techstack en gereedschappen. Altijd aan het leren.
          </motion.p>
        </div>

        {/* Skill groups */}
        <div className="space-y-12">
          {SKILL_GROUPS.map(({ category, color, fg, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + gi * 0.12 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2" style={{ background: color }} />
                <span
                  className="font-['Archivo_Black'] text-sm uppercase tracking-widest"
                  style={{ color }}
                >
                  {category}
                </span>
                <div className="h-px flex-1" style={{ background: `${color}20` }} />
              </div>

              <div className="flex flex-wrap gap-2 ml-6">
                {skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + gi * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-sm font-['Space_Mono'] px-4 py-2 cursor-default transition-shadow duration-200"
                    style={{
                      background: `${color}15`,
                      color,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big decorative text behind */}
        <div
          className="absolute right-0 bottom-8 font-['Archivo_Black'] leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(6rem, 18vw, 16rem)",
            color: "var(--live-accent)",
            opacity: 0.04,
          }}
        >
          CODE
        </div>
      </div>
    </section>
  );
}
