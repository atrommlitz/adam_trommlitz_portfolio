import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  // Get the filename to check if it's the index post
  const fileName = path.basename(filePath, path.extname(filePath));

  // Filter out images and links from the content for blog posts
  let filteredContent = content;

  // For the index post, preserve images but still filter links
  if (fileName === "index") {
    // Keep images but remove links
    filteredContent = filteredContent.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  } else {
    // Remove ALL markdown images completely for other posts
    filteredContent = filteredContent.replace(/!\[.*?\]\([^)]*\)/g, "");

    // Remove ALL markdown links, keeping only the text
    filteredContent = filteredContent.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

    // Remove any remaining image references
    filteredContent = filteredContent.replace(/\/images\/[^\s\n]*/g, "");

    // Remove any remaining image file extensions
    filteredContent = filteredContent.replace(
      /\.(jpg|jpeg|png|gif|webp|svg|ico)\b/gi,
      ""
    );
  }

  // Clean up extra whitespace
  filteredContent = filteredContent.replace(/\n\s*\n/g, "\n\n");
  filteredContent = filteredContent.trim();

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content: filteredContent };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(/*turbopackIgnore: true*/ process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
