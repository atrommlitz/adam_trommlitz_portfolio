import React from "react";

import {
  Heading,
  Flex,
  Text,
  RevealFx,
  Column,
  Schema,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";

import { ImagePreloader } from "@/components/ImagePreloader";
import { HomeProjects } from "@/components/work/HomeProjects";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
      <ImagePreloader
        images={[person.avatar, "/images/projects/project-01/Mountains.jpg"]}
      />

      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Constellation overlay */}
        <svg
          aria-hidden
          viewBox="0 0 800 360"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55, pointerEvents: "none" }}
        >
          <g stroke="#7dd3fc" strokeWidth="0.5" fill="none" opacity="0.6">
            <line x1="120" y1="80" x2="200" y2="140" />
            <line x1="200" y1="140" x2="290" y2="100" />
            <line x1="290" y1="100" x2="350" y2="180" />
            <line x1="350" y1="180" x2="460" y2="160" />
            <line x1="460" y1="160" x2="550" y2="220" />
            <line x1="550" y1="220" x2="650" y2="180" />
            <line x1="650" y1="180" x2="710" y2="260" />
          </g>
          <g fill="#bfdbfe">
            {[[120,80],[200,140],[290,100],[350,180],[460,160],[550,220],[650,180],[710,260]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="3">
                <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2+i*0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        </svg>

        <RevealFx translateY="8" delay={0.1}>
          <h1 style={{ margin: "16px 0 0 0", fontSize: "clamp(64px, 11vw, 144px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", fontWeight: 400, fontFamily: "var(--font-heading)", textAlign: "center", width: "100vw" }}>
            ADAM
          </h1>
        </RevealFx>

        <RevealFx translateY="8" delay={0.2}>
          <h1 style={{ margin: 0, fontSize: "clamp(56px, 10vw, 128px)", lineHeight: 0.9, letterSpacing: "-0.03em", fontStyle: "normal", fontWeight: 400, color: "#f4ede0", fontFamily: "var(--font-heading)", textAlign: "center", width: "100vw" }}>
            TROMMLITZ
          </h1>
        </RevealFx>

        <RevealFx translateY="8" delay={0.4}>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", alignItems: "center", justifyContent: "center", flexWrap: "wrap", width: "100vw" }}>
            <span style={{ width: 24, height: 1, background: "#7dd3fc", display: "inline-block" }} />
            <span style={{ letterSpacing: "0.2em", color: "#bfdbfe", fontFamily: "var(--font-label)", fontSize: "var(--font-size-label-default-s)" }}>PRODUCT MANAGER</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#7dd3fc", boxShadow: "0 0 8px #7dd3fc", display: "inline-block" }} />
            <span style={{ letterSpacing: "0.2em", color: "#bfdbfe", fontFamily: "var(--font-label)", fontSize: "var(--font-size-label-default-s)" }}>BUILDER</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#7dd3fc", boxShadow: "0 0 8px #7dd3fc", display: "inline-block" }} />
            <span style={{ letterSpacing: "0.2em", color: "#bfdbfe", fontFamily: "var(--font-label)", fontSize: "var(--font-size-label-default-s)" }}>EXPLORER</span>
            <span style={{ width: 24, height: 1, background: "#7dd3fc", display: "inline-block" }} />
          </div>
        </RevealFx>
      </div>

      {/* Latest projects */}
      {routes["/work"] && (
        <RevealFx translateY="16" delay={0.6}>
          <Column maxWidth="m" fillWidth gap="xl">
            <Flex fillWidth gap="24">
              <Flex flex={1} paddingLeft="l" paddingTop="24">
                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                  Latest projects
                </Heading>
              </Flex>
              <Flex flex={3} paddingX="20">
                <HomeProjects range={[1, 2]} columns="2" />
              </Flex>
            </Flex>
          </Column>
        </RevealFx>
      )}
    </div>
  );
}
