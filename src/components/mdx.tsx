import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";

import {
  Heading,
  HeadingLink,
  Text,
  InlineCode,
  CodeBlock,
  TextProps,
  MediaProps,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
} from "@once-ui-system/core";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }: MediaProps & { src: string }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string | undefined | null): string {
  if (!str || typeof str !== "string") {
    return "";
  }
  return str
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({
    children,
    ...props
  }: Omit<React.ComponentProps<typeof HeadingLink>, "as" | "id">) => {
    // Extract text content from children (handles both string and ReactNode cases)
    const getTextContent = (node: ReactNode): string => {
      if (typeof node === "string") {
        return node;
      }
      if (typeof node === "number") {
        return node.toString();
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
      }
      if (node && typeof node === "object" && "props" in node) {
        return getTextContent(node.props.children);
      }
      if (node === null || node === undefined) {
        return "";
      }
      return "";
    };

    const textContent = getTextContent(children);
    const slug = slugify(textContent || "");

    return (
      <HeadingLink
        marginTop="24"
        marginBottom="12"
        as={as}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  // For pre tags that contain code blocks
  if (
    props.children &&
    props.children.props &&
    props.children.props.className
  ) {
    const { className, children } = props.children.props;

    // Extract language from className (format: language-xxx)
    const language = className.replace("language-", "");
    const label = language.charAt(0).toUpperCase() + language.slice(1);

    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codes={[
          {
            code: children,
            language,
            label,
          },
        ]}
        copyButton={true}
      />
    );
  }

  // Fallback for other pre tags or empty code blocks
  return <pre {...props} />;
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

// Blog-specific MDX component that shows ONLY text and headings
export function BlogMDX(props: CustomMDXProps) {
  // Extract only text content from the MDX source
  const textContent = React.useMemo(() => {
    if (!props.source) return "";

    // Convert to string if it's an object
    let sourceString =
      typeof props.source === "string"
        ? props.source
        : JSON.stringify(props.source);

    // Check if this is the index post by looking for specific content
    const isIndexPost =
      sourceString.includes("Junior Year - 1st Semester") &&
      sourceString.includes("Junior Year - 2nd Semester");

    if (isIndexPost) {
      // For the index post, preserve images but remove links
      sourceString = sourceString.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

      // Clean up extra whitespace
      sourceString = sourceString.replace(/\n\s*\n/g, "\n\n");
      sourceString = sourceString.trim();

      return sourceString;
    }

    // Remove ALL markdown images completely - more aggressive pattern
    sourceString = sourceString.replace(/!\[.*?\]\([^)]*\)/g, "");

    // Remove ALL markdown images with spaces in alt text
    sourceString = sourceString.replace(/!\[[^\]]*\]\([^)]*\)/g, "");

    // Remove ALL HTML img tags
    sourceString = sourceString.replace(/<img[^>]*>/gi, "");

    // Remove ALL picture tags and their content
    sourceString = sourceString.replace(
      /<picture[^>]*>[\s\S]*?<\/picture>/gi,
      ""
    );

    // Remove ALL source tags
    sourceString = sourceString.replace(/<source[^>]*>/gi, "");

    // Remove ALL figure tags and their content
    sourceString = sourceString.replace(
      /<figure[^>]*>[\s\S]*?<\/figure>/gi,
      ""
    );

    // Remove ALL figcaption tags
    sourceString = sourceString.replace(
      /<figcaption[^>]*>[\s\S]*?<\/figcaption>/gi,
      ""
    );

    // Remove ALL markdown links, keeping only the text
    sourceString = sourceString.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

    // Remove ALL HTML tags except basic formatting
    sourceString = sourceString.replace(/<[^>]*>/gi, "");

    // Remove any remaining image references
    sourceString = sourceString.replace(/\/images\/[^\s\n]*/g, "");

    // Remove any remaining image file extensions
    sourceString = sourceString.replace(
      /\.(jpg|jpeg|png|gif|webp|svg|ico)\b/gi,
      ""
    );

    // Clean up extra whitespace
    sourceString = sourceString.replace(/\n\s*\n/g, "\n\n");
    sourceString = sourceString.trim();

    return sourceString;
  }, [props.source]);

  // Split content into lines and render as simple text
  const lines = textContent.split("\n");

  return (
    <div className="blog-content">
      {lines.map((line, index) => {
        if (!line.trim()) return <br key={index} />;

        // Check if it's a heading
        if (line.startsWith("#")) {
          const match = line.match(/^#+/);
          if (!match) return <p key={index}>{line}</p>;
          const level = match[0].length;
          const text = line.replace(/^#+\s*/, "");
          const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;

          return (
            <Tag
              key={index}
              style={{
                fontSize:
                  level === 1 ? "2rem" : level === 2 ? "1.5rem" : "1.25rem",
                fontWeight: "bold",
                marginTop: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              {text}
            </Tag>
          );
        }

        // Regular paragraph
        return (
          <p
            key={index}
            style={{
              marginBottom: "1rem",
              lineHeight: "1.6",
            }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}
