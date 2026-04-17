import { Avatar, Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";

const nav = [
  { label: "À propos", href: "/about", icon: "person" },
  { label: "Projets", href: "/work", icon: "grid" },
  { label: "Certifications", href: "/certif", icon: "book" },
  { label: "Contact", href: "/contact", icon: "email" },
];

export default function Landing() {
  return (
    <Column
      fillWidth
      fillHeight
      horizontal="center"
      vertical="center"
      gap="xl"
      paddingY="80"
    >
      {/* Identité */}
      <Column horizontal="center" gap="m">
        <Avatar src={person.avatar} size="xl" />
        <Column horizontal="center" gap="4">
          <Heading variant="display-strong-xl" align="center">
            {person.firstName} {person.lastName}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {person.role}
          </Text>
        </Column>
      </Column>

      {/* Navigation */}
      <Row gap="12" wrap horizontal="center">
        {nav.map((item) => (
          <Button
            key={item.href}
            href={item.href}
            variant="secondary"
            size="l"
            prefixIcon={item.icon}
            data-border="rounded"
          >
            {item.label}
          </Button>
        ))}
      </Row>
    </Column>
  );
}
