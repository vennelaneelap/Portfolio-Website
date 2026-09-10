"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/utils/mouse";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  /** Device-pixel-ratio ceiling — caps fill cost on high-DPI / low-end screens. */
  maxDpr?: number;
}

/**
 * Suspended particulate in a water column: fine plankton drifting and the
 * occasional larger bubble rising toward the surface. Everything moves
 * upward with a slow sideways sway, and the pointer pushes the water around
 * it (the `magnetism` term).
 */
type Mote = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  /** Horizontal drift, mostly ~0 — the visible sway comes from `swayAmp`. */
  dx: number;
  /** Rise speed. Always negative: things float up. */
  dy: number;
  magnetism: number;
  /** Sway phase + amplitude, so no two motes wobble in step. */
  phase: number;
  swaySpeed: number;
  swayAmp: number;
  /** Larger motes read as bubbles and get a rim highlight. */
  isBubble: boolean;
};

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  maxDpr = 2,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const motes = useRef<Mote[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const rafId = useRef<number>(0);
  const tick = useRef(0);
  /** `--sea-motes` as an "r, g, b" string; re-read whenever the theme flips. */
  const moteRGB = useRef("186, 230, 253");
  // Cap the device-pixel-ratio: a 3x screen otherwise triples the fill cost.
  const dpr =
    typeof window !== "undefined"
      ? Math.min(window.devicePixelRatio, maxDpr)
      : 1;

  const readMoteColor = () => {
    if (typeof window === "undefined") return;
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue("--sea-motes")
      .trim();
    // stored as space-separated rgb channels: "186 230 253"
    if (v) moteRGB.current = v.replace(/\s+/g, ", ");
  };

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    readMoteColor();
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    // next-themes toggles `.dark` on <html>; re-read the mote colour so the
    // particulate matches the water instead of staying on the old palette.
    const themeObserver = new MutationObserver(readMoteColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    // Pause the render loop while the tab is hidden — no point burning frames
    // (and battery) drawing to a canvas nobody can see.
    const onVisibility = () => {
      cancelAnimationFrame(rafId.current);
      if (!document.hidden) animate();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", initCanvas);
      document.removeEventListener("visibilitychange", onVisibility);
      themeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      motes.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  /** `atBottom` seeds a respawning mote just below the waterline. */
  const moteParams = (atBottom = false): Mote => {
    // Roughly one in five is a proper bubble; the rest is fine plankton.
    const isBubble = Math.random() < 0.22;
    const size = isBubble
      ? Math.random() * 2.1 + 1.3
      : Math.random() * 1.1 + 0.35;
    return {
      x: Math.floor(Math.random() * canvasSize.current.w),
      y: atBottom
        ? canvasSize.current.h + Math.random() * 40 + size
        : Math.floor(Math.random() * canvasSize.current.h),
      translateX: 0,
      translateY: 0,
      size,
      alpha: 0,
      // Bubbles catch more light than plankton.
      targetAlpha: parseFloat(
        (isBubble
          ? Math.random() * 0.3 + 0.25
          : Math.random() * 0.35 + 0.1
        ).toFixed(2)
      ),
      dx: (Math.random() - 0.5) * 0.06,
      // Bigger bubbles are more buoyant, so they climb faster.
      dy: -(isBubble ? Math.random() * 0.3 + 0.16 : Math.random() * 0.14 + 0.04),
      magnetism: 0.1 + Math.random() * 4,
      phase: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.012 + 0.004,
      swayAmp: (isBubble ? 0.5 : 0.22) + Math.random() * 0.5,
      isBubble,
    };
  };

  const drawMote = (mote: Mote, update = false) => {
    const ctx = context.current;
    if (!ctx) return;
    const { x, y, translateX, translateY, size, alpha, isBubble } = mote;
    const rgb = moteRGB.current;

    ctx.translate(translateX, translateY);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${rgb}, ${isBubble ? alpha * 0.42 : alpha})`;
    ctx.fill();

    // Bubbles get a thin rim and a small specular dot so they read as
    // air in water rather than as flat dots.
    if (isBubble && size > 1.5) {
      ctx.strokeStyle = `rgba(${rgb}, ${alpha * 0.85})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x - size * 0.32, y - size * 0.34, size * 0.2, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.95})`;
      ctx.fill();
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!update) motes.current.push(mote);
  };

  const clearContext = () => {
    context.current?.clearRect(
      0,
      0,
      canvasSize.current.w,
      canvasSize.current.h
    );
  };

  const drawParticles = () => {
    clearContext();
    for (let i = 0; i < quantity; i++) drawMote(moteParams());
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    clearContext();
    tick.current += 1;

    motes.current.forEach((mote, i) => {
      // Fade out near every edge so nothing pops in or out abruptly.
      const edge = [
        mote.x + mote.translateX - mote.size,
        canvasSize.current.w - mote.x - mote.translateX - mote.size,
        mote.y + mote.translateY - mote.size,
        canvasSize.current.h - mote.y - mote.translateY - mote.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      if (remapClosestEdge > 1) {
        mote.alpha = Math.min(mote.alpha + 0.02, mote.targetAlpha);
      } else {
        mote.alpha = mote.targetAlpha * remapClosestEdge;
      }

      // Rise, with a lazy sideways sway on top of the base drift.
      mote.y += mote.dy;
      mote.x +=
        mote.dx +
        Math.sin(tick.current * mote.swaySpeed + mote.phase) *
          mote.swayAmp *
          0.35;

      mote.translateX +=
        (mouse.current.x / (staticity / mote.magnetism) - mote.translateX) /
        ease;
      mote.translateY +=
        (mouse.current.y / (staticity / mote.magnetism) - mote.translateY) /
        ease;

      // Reaching the surface (or drifting out the side) sends it back down as
      // a fresh mote — reused in place, so the array never reshuffles.
      const gone =
        mote.y < -mote.size - 10 ||
        mote.x < -mote.size - 40 ||
        mote.x > canvasSize.current.w + mote.size + 40;

      if (gone) {
        motes.current[i] = moteParams(true);
        drawMote(motes.current[i], true);
      } else {
        drawMote(mote, true);
      }
    });

    rafId.current = window.requestAnimationFrame(animate);
  };

  return (
    <div
      className={cn(className, "sea-depth overflow-hidden")}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      {/* Light breaking on the swell overhead, then the caustic net it casts. */}
      <span className="sea-surface" />
      <span className="sea-caustics" />
      <canvas ref={canvasRef} className="relative" />
    </div>
  );
}
