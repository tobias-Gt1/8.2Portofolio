import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Github, Send, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 md:px-10 relative bg-[#080808]">
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
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="font-['Space_Mono'] text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--live-accent)" }}
          >
            04
          </span>
          <div className="h-px w-20" style={{ background: "var(--live-accent)" }} />
          <span className="font-['Space_Mono'] text-xs uppercase tracking-[0.4em] text-[#555]">
            Contact
          </span>
        </motion.div>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2
              className="font-['Archivo_Black'] text-[#f5f5f5] leading-none mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Let's<br />
              <span style={{ color: "var(--live-accent)" }}>Talk.</span>
            </h2>

            <p className="text-[#666] text-lg leading-relaxed mb-10 font-light max-w-sm">
              Project in gedachten? Op zoek naar een stagair? Of gewoon even vraag?
              Stuur een berichtje.
            </p>

            <div className="space-y-4 mb-10">
              <div>
                <p className="font-['Space_Mono'] text-xs text-[#444] uppercase tracking-widest mb-1">Email</p>
                <p className="text-[#f5f5f5]">tobiasschuttevaer@icloud.com</p>
              </div>
              <div>
                <p className="font-['Space_Mono'] text-xs text-[#444] uppercase tracking-widest mb-1">Locatie</p>
                <p className="text-[#f5f5f5]">Utrecht, Nederland</p>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/tobias-Gt1" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tobias-schuttevaer-40187a331/" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-['Space_Mono'] text-xs px-4 py-2.5 border border-white/10 text-[#777] hover:text-[#f5f5f5] hover:border-white/25 transition-all duration-200 uppercase tracking-wider"
                >
                  <Icon size={14} /> {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="border h-full flex flex-col items-center justify-center py-20 text-center"
                style={{ borderColor: "var(--live-accent)" }}
              >
                <div
                  className="font-['Archivo_Black'] text-6xl mb-4"
                  style={{ color: "var(--live-accent)" }}
                >
                  ✓
                </div>
                <h3 className="font-['Archivo_Black'] text-[#f5f5f5] text-2xl mb-2">Verstuurd!</h3>
                <p className="text-[#666] text-sm">Ik neem zo snel mogelijk contact op.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {[
                  { key: "name", label: "Naam", type: "text", placeholder: "Jouw naam" },
                  { key: "email", label: "Email", type: "email", placeholder: "jouw@email.nl" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key} className="border-t border-white/7">
                    <label className="font-['Space_Mono'] text-xs text-[#444] uppercase tracking-widest block pt-4 mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full bg-transparent text-[#f5f5f5] placeholder-[#333] text-lg pb-4 outline-none focus:placeholder-[#555] transition-colors"
                    />
                  </div>
                ))}

                <div className="border-t border-white/7">
                  <label className="font-['Space_Mono'] text-xs text-[#444] uppercase tracking-widest block pt-4 mb-2">
                    Bericht
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Vraag maar raak"
                    className="w-full bg-transparent text-[#f5f5f5] placeholder-[#333] text-lg pb-4 outline-none resize-none focus:placeholder-[#555] transition-colors"
                  />
                </div>

                <div className="border-t border-white/7 pt-6">
                  <button
                    type="submit"
                    className="flex items-center gap-3 font-['Archivo_Black'] text-sm uppercase tracking-wider px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ background: "var(--live-accent)", color: "var(--live-accent-fg)" }}
                  >
                    <Send size={15} />
                    Verstuur bericht
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Giant background text */}
      <div
        className="absolute left-0 bottom-0 font-['Archivo_Black'] leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(5rem, 18vw, 16rem)",
          color: "var(--live-accent)",
          opacity: 0.03,
          lineHeight: 0.85,
        }}
      >
        CONTACT
      </div>
    </section>
  );
}
