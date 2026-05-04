"use client";

import Masonry from "react-masonry-css";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";

function GalleryImage({ image, index }: { image: typeof gallery.images[0]; index: number }) {
  return (
    <div key={index} className={styles.gridItem}>
      <img
        src={image.src}
        alt={image.alt}
        className={styles.image}
        loading={index < 10 ? "eager" : "lazy"}
      />
      {image.description && (
        <div className={styles.caption}>
          {image.description}
        </div>
      )}
    </div>
  );
}

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => (
        <GalleryImage key={index} image={image} index={index} />
      ))}
    </Masonry>
  );
}
