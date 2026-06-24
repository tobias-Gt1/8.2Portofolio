import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import happyHerbivoreImg from "../../assets/Happyherbivorepic.png";

export const PROJECTS = [
  {
    num: "01",
    title: "CMS Webshop",
    desc: "Custom-gebouwd Content Management Systeem met e-commerce. Van productbeheer tot bestellingen.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    color: "#00e5ff",
    github: "https://github.com/tobias-Gt1/5.2CMS",
    live: null,
    image: null,
    slug: "cms-webshop",
    details: {
      fullDescription: "",
      gallery: [],
      videoUrl: null,
    },
  },
  {
    num: "02",
    title: "AnnexBios",
    desc: "Dynamische bioscoopwebsite met filmprogrammering en ticketreservering. Bezoekers boeken eenvoudig hun plek.",
    tags: ["PHP", "JavaScript", "CSS", "MySQL"],
    color: "#ff2d78",
    github: "https://github.com/tobias-Gt1/AnnexBiosMontfoort",
    live: null,
    image: null,
    slug: "annexbios",
    details: {
      fullDescription: "",
      gallery: [],
      videoUrl: null,
    },
  },
  {
    num: "03",
    title: "Utrechts Archief",
    desc: "Digitaal platform voor historische collecties van het Utrechts Archief.",
    tags: ["PHP", "CSS", "JavaScript"],
    color: "#c8ff00",
    github: "https://github.com/tobias-Gt1/6.1UAopdracht",
    live: null,
    image: null,
    slug: "utrechts-archief",
    details: {
      fullDescription: "",
      gallery: [],
      videoUrl: null,
    },
  },
  {
    num: "04",
    title: "Kiosk Happy Herbivore",
    desc: "Touchscreen bestelterminal voor plantaardige snacks. snel, en volledig zelfbedieningsbaar.",
    tags: ["PHP", "JavaScript", "CSS"],
    color: "#ff5c00",
    github: "https://github.com/tobias-Gt1/7.1KioskOpdracht",
    live: "https://u240173.gluwebsite.nl/kiosksite/index.html",
    image: happyHerbivoreImg,
    slug: "kiosk-happy-herbivore",
    details: {
      fullDescription: "",
      gallery: [],
      videoUrl: null,
    },
  },
  {
    num: "05",
    title: "U Festival App",
    desc: "Mobiel-first festivalapp voor U Festival Utrecht. Line-up, persoonlijke agenda, en plattegrond in één.",
    tags: ["PHP", "JavaScript", "CSS", "Node.js"],
    color: "#b14eff",
    github: "https://github.com",
    live: null,
    image: null,
    slug: "u-festival-app",
    details: {
      fullDescription: "",
      gallery: [],
      videoUrl: null,
    },
  },
];

type Project = typeof PROJECTS[0];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.09 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
        className="group relative border-b cursor-pointer py-7 flex items-center justify-between gap-4 transition-all duration-300"
        style={{
          borderColor: hovered ? project.color : "rgba(255,255,255,0.07)",
        }}
      >
        {/* Hover background fill */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ background: `${project.color}06` }}
        />

        <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0 relative z-10">
          <span
            className="font-['Space_Mono'] text-sm hidden sm:block flex-shrink-0 transition-colors duration-300"
            style={{ color: hovered ? project.color : "#333" }}
          >
            {project.num}
          </span>

          <h3
            className="font-['Archivo_Black'] transition-colors duration-300 leading-tight"
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)",
              color: hovered ? project.color : "#f5f5f5",
            }}
          >
            {project.title}
          </h3>

          {/* Tags — visible on hover */}
          <div className="hidden md:flex gap-2 overflow-hidden">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
                transition={{ duration: 0.2 }}
                className="font-['Space_Mono'] text-xs px-2 py-1 flex-shrink-0"
                style={{
                  color: project.color,
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 relative z-10 flex-shrink-0">
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#444] hover:text-[#f5f5f5] transition-colors p-1"
          >
            <Github size={16} />
          </a>
          <ArrowUpRight
            size={20}
            className="transition-all duration-300"
            style={{ color: hovered ? project.color : "#333" }}
          />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border max-w-md w-full relative p-8"
              style={{ borderColor: project.color }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: project.color }} />

              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-[#555] hover:text-[#f5f5f5] transition-colors"
              >
                <X size={18} />
              </button>

              <span className="font-['Space_Mono'] text-xs" style={{ color: project.color }}>
                {project.num}
              </span>
              <h3 className="font-['Archivo_Black'] text-[#f5f5f5] mt-1 mb-4" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>
                {project.title}
              </h3>

              {/* Project image */}
              <div
                className="w-full aspect-video mb-6 flex items-center justify-center relative overflow-hidden"
                style={{ background: `${project.color}10`, border: `1px solid ${project.color}20` }}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <span className="text-5xl">🖥️</span>
                    <span className="absolute bottom-2 right-3 font-['Space_Mono'] text-xs" style={{ color: `${project.color}50` }}>
                      Afbeelding later
                    </span>
                  </>
                )}
              </div>

              <p className="text-[#777] leading-relaxed mb-6 text-sm">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-7">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-['Space_Mono'] text-xs px-3 py-1.5"
                    style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-5 py-2.5 border border-white/10 text-[#f5f5f5] hover:border-white/25 transition-colors font-['Space_Mono']"
                >
                  <Github size={14} /> GitHub
                </a>
                 {project.live ? (
                   <a
                     href={project.live}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm px-5 py-2.5 font-['Archivo_Black'] uppercase tracking-wider transition-all duration-200 hover:scale-105"
                     style={{ background: project.color, color: "#0c0c0c" }}
                   >
                     <ExternalLink size={14} /> Live
                   </a>
                 ) : (
                   <Link
                     to={`/projecten/${project.slug}`}
                     className="flex items-center gap-2 text-sm px-5 py-2.5 font-['Archivo_Black'] uppercase tracking-wider transition-all duration-200 hover:scale-105"
                     style={{ background: project.color, color: "#0c0c0c" }}
                   >
                     <ExternalLink size={14} /> Meer Info
                   </Link>
                 )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 md:px-10 relative">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 h-[3px] w-full origin-left"
        style={{ background: "var(--live-accent)" }}
      />

      <div className="max-w-7xl mx-auto">
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
            03
          </span>
          <div className="h-px w-20" style={{ background: "var(--live-accent)" }} />
          <span className="font-['Space_Mono'] text-xs uppercase tracking-[0.4em] text-[#555]">
            Projecten
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Archivo_Black'] text-[#f5f5f5]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Geselecteerd <span style={{ color: "var(--live-accent)" }}>werk</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-['Space_Mono'] text-xs text-[#555] uppercase tracking-widest"
          >
            Klik voor details
          </motion.p>
        </div>

        {/* Top border */}
        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }} />

        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
