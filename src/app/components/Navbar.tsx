import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Over mij", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projecten", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Thin accent bar at top */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] transition-colors duration-700"
        style={{ background: "var(--live-accent)" }}
      />

      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0c0c0c]/95 backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <button
            onClick={() => go("#hero")}
            className="font-['Archivo_Black'] text-xl tracking-tight transition-colors duration-500"
            style={{ color: "var(--live-accent)" }}
          >
            T.
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-sm text-[#666] hover:text-[#f5f5f5] transition-colors duration-200 font-['Space_Mono'] tracking-wider uppercase"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#f5f5f5] p-1"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-[#0c0c0c] border-t border-white/5"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {links.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => go(l.href)}
                    className="text-left font-['Archivo_Black'] text-2xl text-[#f5f5f5] hover:text-[var(--live-accent)] transition-colors"
                    style={{ color: undefined }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
