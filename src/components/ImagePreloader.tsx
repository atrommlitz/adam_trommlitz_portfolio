"use client";

import { useEffect } from "react";

interface ImagePreloaderProps {
  images: string[];
}

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images }) => {
  useEffect(() => {
    // Preload images on component mount
    images.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.fetchPriority = "high";
      document.head.appendChild(link);
    });
  }, [images]);

  return null;
};
