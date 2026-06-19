import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const ROLES = ["Fullstack Dev", "UI Builder", "Student @ GLU", "React Lover", "PHP Wielder"];

const LETTER_COLORS = ["#00e5ff", "#ff2d78", "#c8ff00", "#ff5c00", "#b14eff", "#00e5ff"];

function RotatingRole() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="overflow-hidden h-9 md:h-11">
      <motion.div
        key={idx}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-['Space_Mono'] text-lg md:text-xl text-[#777] tracking-widest uppercase"
      >
        {ROLES[idx]}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const particles: { x: number; y: number; r: number; vx: number; vy: number; c: string }[] = [];
    const COLORS = ["#00e5ff", "#ff2d78", "#c8ff00", "#ff5c00", "#b14eff"];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx -= (dx / dist) * 0.06;
          p.vy -= (dy / dist) * 0.06;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.55;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw thin connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].c;
            ctx.globalAlpha = (1 - d / 100) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Giant background letter */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-['Archivo_Black'] select-none pointer-events-none leading-none opacity-[0.04]"
        style={{ fontSize: "clamp(16rem, 40vw, 38rem)", color: "#fff" }}
      >
        T
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-['Space_Mono'] text-sm text-[#555] uppercase tracking-[0.3em] mb-6"
        >
          Portfolio — 2025
        </motion.div>

        {/* Colored letters */}
        <h1
          className="font-['Archivo_Black'] leading-none mb-4 select-none"
          style={{ fontSize: "clamp(4.5rem, 18vw, 17rem)" }}
        >
          {"TOBIAS".split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: LETTER_COLORS[i] }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.65, origin: "left" }}
          className="h-[3px] w-full max-w-[32rem] mb-5 origin-left"
          style={{ background: "linear-gradient(90deg, #00e5ff, #ff2d78, #c8ff00, #ff5c00, #b14eff)" }}
        />

        <RotatingRole />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[#666] text-base md:text-lg max-w-md mt-6 leading-relaxed font-light"
        >
          Ik bouw dingen voor het web. Student aan het{" "}
          <span className="text-[#f5f5f5] font-medium">Grafisch Lyceum Utrecht</span>,{" "}
          geobsedeerd door animatie, interactie en code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="font-['Archivo_Black'] text-sm px-7 py-3.5 uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: "var(--live-accent)", color: "var(--live-accent-fg)" }}
          >
            Bekijk werk →
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-['Archivo_Black'] text-sm px-7 py-3.5 border uppercase tracking-wider text-[#f5f5f5] hover:border-white/40 transition-all duration-200"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-10 font-['Space_Mono'] text-xs text-[#444] uppercase tracking-widest flex items-center gap-3"
      >
        <motion.div
          className="w-8 h-px"
          style={{ background: "var(--live-accent)" }}
          animate={{ width: [32, 60, 32] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        Scroll
      </motion.div>
    </section>
  );
}
