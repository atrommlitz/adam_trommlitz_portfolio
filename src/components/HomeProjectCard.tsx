"use client";

import { Carousel, Column } from "@once-ui-system/core";

interface HomeProjectCardProps {
  images: string[];
  title: string;
}

export const HomeProjectCard: React.FC<HomeProjectCardProps> = ({
  images = [],
  title,
}) => {
  return (
    <Column fillWidth gap="m">
      <div className="relative">
        <div
          className="rounded-lg overflow-hidden border border-opacity-10 bg-gradient-to-br from-white/5 to-black/5 dark:from-white/10 dark:to-black/10"
          style={{
            filter: "contrast(0.9) brightness(1.05)",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
          />
        </div>
        {/* Subtle blur overlay for edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.03) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 60%, rgba(255, 255, 255, 0.02) 100%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </Column>
  );
};
