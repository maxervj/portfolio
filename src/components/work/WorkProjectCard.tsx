"use client";

import { useState } from "react";
import { Column, Row, Heading, Text, Tag, Icon, Media } from "@once-ui-system/core";
import React from "react";

interface WorkProjectCardProps {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  link?: string;
  images?: { src: string; alt: string; width: number; height: number }[];
  index: number;
}

export function WorkProjectCard({
  company,
  timeframe,
  role,
  achievements,
  link,
  images = [],
  index,
}: WorkProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Column
      border={open ? "brand-alpha-medium" : "neutral-alpha-medium"}
      radius="xl"
      overflow="hidden"
      style={{
        cursor: "pointer",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        boxShadow: open
          ? "0 8px 32px rgba(0,0,0,0.18)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        animationDelay: `${index * 80}ms`,
      }}
      onClick={() => setOpen((v) => !v)}
    >
      {/* En-tête toujours visible */}
      <Row
        background={open ? "brand-alpha-weak" : "neutral-alpha-weak"}
        padding="24"
        gap="16"
        vertical="center"
        horizontal="between"
        wrap
        style={{ transition: "background 0.25s ease" }}
      >
        <Row gap="16" vertical="center">
          <Row
            width="52"
            height="52"
            radius="m"
            background={open ? "brand-alpha-medium" : "neutral-alpha-medium"}
            horizontal="center"
            vertical="center"
            style={{ flexShrink: 0, transition: "background 0.25s ease" }}
          >
            <Icon
              name="globe"
              size="l"
              onBackground={open ? "brand-weak" : "neutral-weak"}
            />
          </Row>
          <Column gap="4">
            <Heading variant="heading-strong-xl">{company}</Heading>
            <Text variant="body-default-s" onBackground={open ? "brand-weak" : "neutral-weak"}>
              {role}
            </Text>
          </Column>
        </Row>
        <Row gap="12" vertical="center">
          <Tag size="m">{timeframe}</Tag>
          <Row
            width="32"
            height="32"
            radius="full"
            background="neutral-alpha-weak"
            horizontal="center"
            vertical="center"
            style={{
              transition: "transform 0.25s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              flexShrink: 0,
            }}
          >
            <Icon name="arrowUpRight" size="s" onBackground="neutral-weak" />
          </Row>
        </Row>
      </Row>

      {/* Contenu expandable */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <Column padding="24" gap="l">
            {/* Réalisations */}
            <Column gap="m">
              <Row gap="8" vertical="center">
                <Icon name="arrowUpRight" size="s" onBackground="neutral-weak" />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  RÉALISATIONS
                </Text>
              </Row>
              <Column gap="12">
                {achievements.map((achievement, i) => (
                  <Row
                    key={i}
                    gap="12"
                    vertical="start"
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? "translateY(0)" : "translateY(8px)",
                      transition: `opacity 0.3s ease ${i * 60 + 100}ms, transform 0.3s ease ${i * 60 + 100}ms`,
                    }}
                  >
                    <Row
                      width="6"
                      height="6"
                      radius="full"
                      background="brand-strong"
                      style={{ marginTop: "9px", flexShrink: 0 }}
                    />
                    <Text variant="body-default-m">{achievement}</Text>
                  </Row>
                ))}
              </Column>
            </Column>

            {/* Images */}
            {images.length > 0 && (
              <Column gap="m">
                <Row gap="8" vertical="center">
                  <Icon name="gallery" size="s" onBackground="neutral-weak" />
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    APERÇU
                  </Text>
                </Row>
                <Row gap="12" wrap>
                  {images.map((image, i) => (
                    <Row
                      key={i}
                      border="neutral-medium"
                      radius="m"
                      overflow="hidden"
                      style={{
                        width: "180px",
                        height: "101px",
                        flexShrink: 0,
                        opacity: open ? 1 : 0,
                        transform: open ? "scale(1)" : "scale(0.95)",
                        transition: `opacity 0.3s ease ${i * 80 + 200}ms, transform 0.3s ease ${i * 80 + 200}ms`,
                      }}
                    >
                      <Media
                        radius="m"
                        sizes="180px"
                        alt={image.alt}
                        src={image.src}
                        enlarge
                      />
                    </Row>
                  ))}
                </Row>
              </Column>
            )}
            {/* Lien vers le site */}
            {link && (
              <Row
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.3s ease 300ms, transform 0.3s ease 300ms",
                }}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.3)",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    transition: "background 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,92,246,0.22)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(139,92,246,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,92,246,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(139,92,246,0.3)";
                  }}
                >
                  <Icon name={link?.includes("github.com") ? "github" : "globe"} size="s" onBackground="brand-weak" />
                  {link?.includes("github.com") ? "Voir sur GitHub" : "Visiter le site"}
                  <Icon name="arrowUpRight" size="s" onBackground="brand-weak" />
                </a>
              </Row>
            )}
          </Column>
        </div>
      </div>
    </Column>
  );
}
