import { useEffect, useRef } from "react";

export function InteractiveSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    // Vergroot de canvasafmetingen voor een grotere weergave
    const width = (canvas.width = 420);
    const height = (canvas.height = 420);

    // Genereer vaste 3D-punten op een bol (sphere)
    const numPoints = 85;
    const points: { x: number; y: number; z: number }[] = [];
    const radius = 135; // Grotere straal voor de bol

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;

      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    // Rustige, constante basisrotatie
    let baseRotX = 0;
    let baseRotY = 0;
    const speedX = 0.0015;
    const speedY = 0.002;

    // Muis tilt-interactie (in plaats van versnellen van rotatie)
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;

      // Bereken een subtiele kantelhoek (tilt) op basis van de muispositie (max ~0.5 radialen)
      targetTiltY = (x / (width / 2)) * 0.45;
      targetTiltX = -(y / (height / 2)) * 0.45;
    };

    const handleMouseLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // 3D-projectie naar 2D-scherm
    const project = (x: number, y: number, z: number) => {
      const perspective = 300;
      const scale = perspective / (perspective + z);
      const projX = x * scale + width / 2;
      const projY = y * scale + height / 2;
      return { x: projX, y: projY, scale };
    };

    const rotateX = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x, y: y * cos - z * sin, z: y * sin + z * cos };
    };

    const rotateY = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos + z * sin, y, z: -x * sin + z * cos };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Werk de constante basisrotatie bij
      baseRotX += speedX;
      baseRotY += speedY;

      // Vloeiende demping voor de muis-tilt
      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;

      // Haal de live accentkleur op uit de CSS-variabelen
      const liveAccent =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--live-accent")
          .trim() || "#00e5ff";

      // Bereken rotaties (basisrotatie + muis-tilt) en projecteer ze
      const transformedPoints = points.map((p) => {
        // Eerst constante rotatie, daarna muis kanteling (tilt)
        let rotated = rotateX(p.x, p.y, p.z, baseRotX + currentTiltX);
        rotated = rotateY(rotated.x, rotated.y, rotated.z, baseRotY + currentTiltY);
        const proj = project(rotated.x, rotated.y, rotated.z);
        return { ...proj, z: rotated.z };
      });

      // Sorteer op diepte (Z-waarde) zodat achterste elementen eerst getekend worden
      transformedPoints.sort((a, b) => b.z - a.z);

      // Teken de verbindingslijntjes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < transformedPoints.length; i++) {
        for (let j = i + 1; j < transformedPoints.length; j++) {
          const pi = transformedPoints[i];
          const pj = transformedPoints[j];

          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Lijndrempel verhoogd naar 50px vanwege de grotere bol
          if (dist < 50) {
            const alpha = (1 - dist / 50) * 0.12 * pi.scale;
            ctx.strokeStyle = `rgba(119, 119, 119, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }
      }

      // Teken de deeltjes (dots)
      transformedPoints.forEach((p) => {
        const size = Math.max(1, p.scale * 2.2);
        const isClose = p.z < -radius * 0.25;

        // Kleur de dichtstbijzijnde deeltjes in de accentkleur, de rest in subtiel wit/grijs met diepte-alpha
        ctx.fillStyle = isClose
          ? liveAccent
          : `rgba(245, 245, 245, ${Math.max(0.12, (p.z + radius) / (2 * radius))})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Grotere en zachtere gloed achter de bol */}
      <div
        className="absolute w-56 h-56 rounded-full opacity-[0.12] blur-3xl pointer-events-none transition-all duration-500"
        style={{ background: "var(--live-accent)" }}
      />
      <canvas
        ref={canvasRef}
        className="relative z-10 cursor-grab active:cursor-grabbing w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
      />
    </div>
  );
}
