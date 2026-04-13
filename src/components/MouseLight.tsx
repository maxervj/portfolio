"use client";

import { useEffect, useRef } from "react";

export function MouseLight() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const target  = useRef({ x: -600, y: -600 });
  const current = useRef({ x: -600, y: -600 });
  const lag     = useRef({ x: -600, y: -600 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.12);
      current.current.y = lerp(current.current.y, target.current.y, 0.12);
      lag.current.x     = lerp(lag.current.x, target.current.x, 0.06);
      lag.current.y     = lerp(lag.current.y, target.current.y, 0.06);

      const dx    = target.current.x - current.current.x;
      const dy    = target.current.y - current.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const boost = Math.min(speed * 0.004, 0.5);

      if (outerRef.current) {
        const scale = 1 + boost * 0.6;
        outerRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) scale(${scale})`;
        outerRef.current.style.opacity   = String(0.55 + boost);
      }

      if (trailRef.current) {
        const mx = (lag.current.x + target.current.x) / 2;
        const my = (lag.current.y + target.current.y) / 2;
        trailRef.current.style.transform = `translate(${mx}px, ${my}px)`;
        trailRef.current.style.opacity   = String(Math.min(boost * 1.8, 0.35));
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${lag.current.x}px, ${lag.current.y}px)`;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {/* Halo extérieur large — suit avec inertie */}
      <div
        ref={outerRef}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          marginLeft: "-300px",
          marginTop: "-300px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(109,40,217,0.06) 45%, transparent 70%)",
          filter: "blur(8px)",
          willChange: "transform, opacity",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Traîne centrale — apparaît lors des mouvements rapides */}
      <div
        ref={trailRef}
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          marginLeft: "-130px",
          marginTop: "-130px",
          background:
            "radial-gradient(circle, rgba(192,132,252,0.22) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)",
          filter: "blur(12px)",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      />

      {/* Point intérieur net — décalage pour l'effet de profondeur */}
      <div
        ref={innerRef}
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginLeft: "-40px",
          marginTop: "-40px",
          background:
            "radial-gradient(circle, rgba(216,180,254,0.45) 0%, rgba(167,139,250,0.2) 50%, transparent 80%)",
          filter: "blur(4px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
