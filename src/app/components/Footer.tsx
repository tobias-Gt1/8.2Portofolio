export function Footer() {
  return (
    <footer
      className="border-t py-8 px-6 md:px-10"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-['Archivo_Black'] text-sm" style={{ color: "var(--live-accent)" }}>
          T.
        </span>
        <p className="font-['Space_Mono'] text-xs text-[#444] text-center">
          © 2025 — Gebouwd met React, Tailwind & motion
        </p>
        <p className="font-['Space_Mono'] text-xs text-[#333]">GLU · Utrecht</p>
      </div>
    </footer>
  );
}
