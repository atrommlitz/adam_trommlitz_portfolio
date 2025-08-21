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
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
    </Column>
  );
};
