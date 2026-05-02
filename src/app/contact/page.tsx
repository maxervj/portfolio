import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  Row,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, person, social } from "@/resources";

const contact = {
  path: "/contact",
  title: `Contact – ${person.name ? person.name : ""}`,
  description: `Contactez ${person.name} via ses réseaux sociaux ou par email.`,
  label: "Contact",
};

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

const platformColors: Record<string, string> = {
  GitHub: "neutral",
  LinkedIn: "brand",
  Email: "accent",
  Instagram: "accent",
};

export default function Contact() {
  return (
    <Column maxWidth="s" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* En-tête */}
      <Column gap="m" horizontal="center" align="center">
        <Avatar src={person.avatar} size="xl" />
        <Column gap="4" horizontal="center" align="center">
          <Heading variant="display-strong-l">{person.name}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {person.role}
          </Text>
        </Column>
        <Row gap="8" wrap horizontal="center">
          <Row gap="4" vertical="center">
            <Icon name="globe" size="s" onBackground="neutral-weak" />
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.location}
            </Text>
          </Row>
          {person.languages && person.languages.length > 0 && (
            <Row gap="8" wrap horizontal="center">
              {person.languages.map((lang, i) => (
                <Tag key={i} size="s">
                  {lang}
                </Tag>
              ))}
            </Row>
          )}
        </Row>
      </Column>

      {/* Liens de contact */}
      <Column gap="m">
        <Heading variant="display-strong-s">Mes contacts</Heading>
        <Column gap="12">
          {social.filter((item) => item.essential).map(
            (item) =>
              item.link && (
                <Row
                  key={item.name}
                  border="neutral-alpha-medium"
                  background="neutral-alpha-weak"
                  radius="m"
                  padding="20"
                  gap="16"
                  vertical="center"
                  horizontal="between"
                  style={{ transition: "background 0.2s" }}
                >
                  <Row gap="16" vertical="center">
                    <Row
                      width="48"
                      height="48"
                      radius="m"
                      background="brand-alpha-weak"
                      horizontal="center"
                      vertical="center"
                    >
                      <Icon
                        name={item.icon as string}
                        size="l"
                        onBackground="brand-weak"
                      />
                    </Row>
                    <Column gap="2">
                      <Text variant="heading-strong-m">{item.name}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {item.link.startsWith("mailto:")
                          ? item.link.replace("mailto:", "")
                          : item.link.replace("https://", "").split("/").slice(0, 2).join("/")}
                      </Text>
                    </Column>
                  </Row>
                  <Button
                    href={item.link}
                    variant="secondary"
                    size="s"
                    suffixIcon="arrowUpRight"
                    data-border="rounded"
                  >
                    {item.link.startsWith("mailto:") ? "Envoyer" : "Visiter"}
                  </Button>
                </Row>
              ),
          )}
        </Column>
      </Column>

    </Column>
  );
}
