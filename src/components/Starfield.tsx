"use client";

import { useEffect, useRef } from "react";

type Hue = "blue" | "cool" | "warm" | "mixed" | "amber" | "pink";

interface StarfieldProps {
  density?: number;
  speed?: number;
  twinkle?: boolean;
  pulse?: boolean;
  hue?: Hue;
  showShootingStars?: boolean | number; // pass a number (0..1) for spawn rate per frame
  fixed?: boolean; // position:fixed full-viewport (for global background)
  zIndex?: number;
  className?: string;
}

/**
 * Starfield — animated canvas background.
 * Project Hail Mary themed: dark blue, twinkling + pulsing stars, optional shooting stars.
 *
 * Drop behind your content with `fixed` prop, or place inside a `position:relative` container.
 */
export const Starfield = ({
  density = 2.4,
  speed = 0.3,
  twinkle = true,
  pulse = true,
  hue = "blue",
  showShootingStars = 0.018,
  fixed = false,
  zIndex = 0,
  className,
}: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: any[] = [];
    let shooting: any[] = [];
    let raf = 0;

    const colorOf = (depth: number) => {
      if (hue === "blue") {
        const r = Math.random();
        if (r < 0.15) return `rgba(125, 200, 255, ${0.6 + depth * 0.4})`;
        if (r < 0.3) return `rgba(180, 220, 255, ${0.6 + depth * 0.4})`;
        return `rgba(230, 240, 255, ${0.4 + depth * 0.6})`;
      }
      // default cool/white
      return `rgba(244, 237, 224, ${0.4 + depth * 0.6})`;
    };

    const seed = (w: number, h: number) => {
      const count = Math.round(((w * h) / 9000) * density);
      stars = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: depth * 1.4 + 0.2,
          depth,
          color: colorOf(depth),
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.5 + Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.02 * speed,
          vy: 0.02 + Math.random() * 0.05 * speed,
        };
      });
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      seed(r.width, r.height);
    };

    const spawnShooting = (w: number, h: number) => {
      if (!showShootingStars) return;
      const rate = typeof showShootingStars === "number" ? showShootingStars : 0.018;
      if (Math.random() < rate) {
        const fromTop = Math.random() < 0.5;
        shooting.push({
          x: Math.random() * w,
          y: fromTop ? -20 : Math.random() * h * 0.5,
          vx: -2 - Math.random() * 3,
          vy: 1.5 + Math.random() * 2,
          life: 0,
          maxLife: 60 + Math.random() * 40,
        });
      }
    };

    const draw = (t: number) => {
      const r = canvas.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.x += s.vx * speed;
        s.y += s.vy * speed;
        if (s.y > h + 5) {
          s.y = -5;
          s.x = Math.random() * w;
        }
        if (s.x > w + 5) s.x = -5;
        if (s.x < -5) s.x = w + 5;

        let alpha = 1;
        if (twinkle) {
          alpha =
            0.4 + 0.6 * (Math.sin(t * 0.001 * s.twinkleSpeed + s.phase) * 0.5 + 0.5);
        }
        let sizeMul = 1;
        if (pulse) {
          sizeMul =
            0.7 + 0.6 * (Math.sin(t * 0.0015 * s.twinkleSpeed + s.phase) * 0.5 + 0.5);
        }

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * sizeMul, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();

        if (s.depth > 0.7) {
          ctx.globalAlpha = alpha * 0.25;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * sizeMul * 3, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      spawnShooting(w, h);
      shooting = shooting.filter((sh) => {
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life++;
        const a = 1 - sh.life / sh.maxLife;
        if (a <= 0) return false;
        const head = hue === "blue" ? "180, 220, 255" : "255, 230, 200";
        const grad = ctx.createLinearGradient(
          sh.x,
          sh.y,
          sh.x - sh.vx * 18,
          sh.y - sh.vy * 18
        );
        grad.addColorStop(0, `rgba(${head}, ${a})`);
        grad.addColorStop(0.5, `rgba(${head}, ${a * 0.5})`);
        grad.addColorStop(1, `rgba(${head}, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 18, sh.y - sh.vy * 18);
        ctx.stroke();
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${head}, ${a})`;
        ctx.fill();
        ctx.globalAlpha = 1;
        return true;
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density, speed, twinkle, pulse, hue, showShootingStars]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: fixed ? "fixed" : "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex,
      }}
    />
  );
};
