"use client";

import { useEffect, useState } from "react";
import {
  Column,
  Background,
  Flex,
  opacity,
  SpacingToken,
} from "@once-ui-system/core";
import { Header, Footer, RouteGuard } from "@/components";

interface BodyWrapperProps {
  children: React.ReactNode;
  effects: any;
}

export default function BodyWrapper({ children, effects }: BodyWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by only rendering after mount
  if (!mounted) {
    return (
      <Column
        as="body"
        background="page"
        fillWidth
        style={{ minHeight: "100vh" }}
        margin="0"
        padding="0"
        horizontal="center"
      >
        <Background
          position="fixed"
          mask={{
            x: effects.mask.x,
            y: effects.mask.y,
            radius: effects.mask.radius,
            cursor: effects.mask.cursor,
          }}
          gradient={{
            display: effects.gradient.display,
            opacity: effects.gradient.opacity as opacity,
            x: effects.gradient.x,
            y: effects.gradient.y,
            width: effects.gradient.width,
            height: effects.gradient.height,
            tilt: effects.gradient.tilt,
            colorStart: effects.gradient.colorStart,
            colorEnd: effects.gradient.colorEnd,
          }}
          dots={{
            display: effects.dots.display,
            opacity: effects.dots.opacity as opacity,
            size: effects.dots.size as SpacingToken,
            color: effects.dots.color,
          }}
          grid={{
            display: effects.grid.display,
            opacity: effects.grid.opacity as opacity,
            color: effects.grid.color,
            width: effects.grid.width,
            height: effects.grid.height,
          }}
          lines={{
            display: effects.lines.display,
            opacity: effects.lines.opacity as opacity,
            size: effects.lines.size as SpacingToken,
            thickness: effects.lines.thickness,
            angle: effects.lines.angle,
            color: effects.lines.color,
          }}
        />
        <Flex fillWidth minHeight="16" hide="s" />
        <Header />
        <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
          <Flex horizontal="center" fillWidth minHeight="0">
            <RouteGuard>{children}</RouteGuard>
          </Flex>
        </Flex>
        <Footer />
      </Column>
    );
  }

  return (
    <Column
      as="body"
      background="page"
      fillWidth
      style={{ minHeight: "100vh" }}
      margin="0"
      padding="0"
      horizontal="center"
    >
      <Background
        position="fixed"
        mask={{
          x: effects.mask.x,
          y: effects.mask.y,
          radius: effects.mask.radius,
          cursor: effects.mask.cursor,
        }}
        gradient={{
          display: effects.gradient.display,
          opacity: effects.gradient.opacity as opacity,
          x: effects.gradient.x,
          y: effects.gradient.y,
          width: effects.gradient.width,
          height: effects.gradient.height,
          tilt: effects.gradient.tilt,
          colorStart: effects.gradient.colorStart,
          colorEnd: effects.gradient.colorEnd,
        }}
        dots={{
          display: effects.dots.display,
          opacity: effects.dots.opacity as opacity,
          size: effects.dots.size as SpacingToken,
          color: effects.dots.color,
        }}
        grid={{
          display: effects.grid.display,
          opacity: effects.grid.opacity as opacity,
          color: effects.grid.color,
          width: effects.grid.width,
          height: effects.grid.height,
        }}
        lines={{
          display: effects.lines.display,
          opacity: effects.lines.opacity as opacity,
          size: effects.lines.size as SpacingToken,
          thickness: effects.lines.thickness,
          angle: effects.lines.angle,
          color: effects.lines.color,
        }}
      />
      <Flex fillWidth minHeight="16" hide="s" />
      <Header />
      <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
        <Flex horizontal="center" fillWidth minHeight="0">
          <RouteGuard>{children}</RouteGuard>
        </Flex>
      </Flex>
      <Footer />
    </Column>
  );
}
