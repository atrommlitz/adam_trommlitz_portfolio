"use client";

import { Starfield } from "./Starfield";

/**
 * Drop into your root layout (BodyWrapper or layout.tsx) above {children}.
 * Renders a fixed full-viewport starfield behind everything.
 *
 * Usage in src/components/BodyWrapper.tsx (or layout.tsx):
 *   <BackgroundStarfield />
 *   {children}
 */
export const BackgroundStarfield = () => (
  <div
    aria-hidden
    style={{
      position: "fixed",
      inset: 0,
      zIndex: -1,
      pointerEvents: "none",
      background:
        "#000000",
    }}
  >
    <Starfield
      density={2.4}
      speed={0.3}
      hue="blue"
      pulse
      showShootingStars={0.018}
      fixed={false}
    />
  </div>
);
