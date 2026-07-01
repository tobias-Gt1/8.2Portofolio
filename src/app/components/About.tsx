import { useRef } from "react";
import { motion, useInView } from "motion/react";

const profilePhoto = new URL("../../assets/foto-portofolio.png", import.meta.url).href;

const FACTS = [
  { label: "School", value: "Grafisch Lyceum Utrecht" },
  { label: "Richting", value: "WebDeveloper & mediaontwikkeling" },
  { label: "Status", value: "Beschikbaar voor stage/ MBO opleiding aan het volgen" },
  { label: "Locatie", value: "Utrecht, NL" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Section accent stripe */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 h-[3px] w-full origin-left"
        style={{ background: "var(--live-accent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="font-['Space_Mono'] text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--live-accent)" }}
          >
            01
          </span>
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "var(--live-accent)" }} />
          <span className="font-['Space_Mono'] text-xs uppercase tracking-[0.4em] text-[#555]">
            Over mij
          </span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: big number + heading */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Archivo_Black'] leading-none mb-4 select-none"
              style={{
                fontSize: "clamp(6rem, 16vw, 12rem)",
                color: "var(--live-accent)",
                opacity: 0.15,
                lineHeight: 1,
              }}
            >
              01
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Archivo_Black'] text-[#f5f5f5] -mt-8 relative z-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Hallo,<br />
              ik ben <span style={{ color: "var(--live-accent)" }}>Tobias</span>
            </motion.h2>

            {/* Fact grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-px bg-white/5"
            >
              {FACTS.map(({ label, value }) => (
                <div key={label} className="bg-[#0c0c0c] p-4">
                  <p className="font-['Space_Mono'] text-xs text-[#555] uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-[#f5f5f5] text-sm font-medium">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 md:pt-16"
          >
            <div className="space-y-5 text-[#777] text-lg leading-relaxed font-light">
              <p>
                Ik ben een <span className="text-[#f5f5f5] font-medium">fullstack webdeveloper in opleiding</span> waarbij
                ik voornamelijk animatie, interactie voornamelijk super vet vindt. Ik bouw van database
                tot pixel — van backend logica tot wat jij op je scherm ziet.
              </p>
              <p>
                Bij het Grafisch Lyceum Utrecht leer ik het vak, maar mijn grootste leraar is
                gewoon <span className="text-[#f5f5f5] font-medium">dingen bouwen</span>. Projecten
                starten, kapotmaken, fouten maken, opnieuw bouwen — zo leer ik het snelste.
              </p>
              <p>
                Ik hou van websites die iets <em>doen</em>. Die bewegen, reageren, en een gevoel geven.
                Niet alleen een pagina met tekst, maar een{" "}
                <span className="text-[#f5f5f5] font-medium">ervaring</span>.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Creatief", "Detail-gericht", "Lerend", "Teamspeler", "Open voor stage"].map((t) => (
                <span
                  key={t}
                  className="font-['Space_Mono'] text-xs px-3 py-1.5 border uppercase tracking-wider transition-all duration-200"
                  style={{
                    borderColor: "var(--live-accent)",
                    color: "var(--live-accent)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Profile Photo */}
            <div
              className="mt-10 relative group max-w-xs aspect-square overflow-hidden border transition-all duration-500 bg-[#111]"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {/* Subtle accent glow behind photo on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] blur-xl transition-opacity duration-500 pointer-events-none"
                style={{ background: "var(--live-accent)" }}
              />
              <img
                src={profilePhoto}
                alt="Tobias"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              {/* Thin overlay border */}
              <div
                className="absolute inset-0 border pointer-events-none transition-colors duration-500 group-hover:border-white/20"
                style={{ borderColor: "rgba(255,255,255,0.04)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
