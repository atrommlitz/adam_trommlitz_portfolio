"use client";

import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import styles from "@/components/blog/Blog.module.scss";
import { formatDate } from "@/utils/formatDate";

interface HomeProjectLinkProps {
  post: any;
}

export default function HomeProjectLink({ post }: HomeProjectLinkProps) {
  if (!post || !post.metadata) {
    return null;
  }

  return (
    <SmartLink
      fillWidth
      unstyled
      style={{ borderRadius: "var(--radius-l)" }}
      key={post.slug}
      href={`/work/${post.slug}`}
    >
      <Flex
        position="relative"
        transition="micro-medium"
        radius="l"
        className={styles.hover}
        fillWidth
      >
        <Column
          position="relative"
          fillWidth
          gap="4"
          padding="24"
          vertical="center"
          style={{ background: "#000000", borderRadius: "var(--radius-l)" }}
        >
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            {post.metadata.title || "Untitled"}
          </Heading>
          {post.metadata.publishedAt && (
            <Text variant="label-default-s" onBackground="neutral-weak">
              {formatDate(post.metadata.publishedAt, false)}
            </Text>
          )}
          {post.metadata.tag && typeof post.metadata.tag === 'string' && (
            <Tag
              className="mt-12"
              label={post.metadata.tag}
              variant="neutral"
            />
          )}
        </Column>
      </Flex>
    </SmartLink>
  );
}
