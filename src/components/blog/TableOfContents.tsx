"use client";

import { Column, Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    Array<{ text: string; level: number; index: number }>
  >([]);

  useEffect(() => {
    // Get all headings from the current page
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headingData = Array.from(headingElements).map((element, index) => {
      const level = parseInt(element.tagName.charAt(1));
      const text = element.textContent || "";
      return { text, level, index };
    });

    setHeadings(headingData);
  }, []);

  const scrollToHeading = (index: number) => {
    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (elements[index]) {
      elements[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  if (headings.length === 0) {
    return null; // Don't show table of contents if no headings found
  }

  return (
    <Column gap="16">
      {headings.map((heading, index) => (
        <Text
          key={index}
          variant="body-default-s"
          style={{
            cursor: "pointer",
            paddingLeft: `${(heading.level - 1) * 16}px`, // Indent based on heading level
          }}
          onClick={() => scrollToHeading(heading.index)}
        >
          {heading.text}
        </Text>
      ))}
    </Column>
  );
}
