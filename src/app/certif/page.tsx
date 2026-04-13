import {
  Column,
  Row,
  Heading,
  Text,
  Tag,
  Icon,
  Meta,
  Schema,
  Line,
} from "@once-ui-system/core";
import { baseURL, blog, person, certifications } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

const statusConfig = {
  "en-cours": {
    label: "En cours",
    variant: "warning" as const,
    icon: "rocket",
  },
  obtenu: {
    label: "Obtenu",
    variant: "success" as const,
    icon: "arrowUpRight",
  },
};

export default function Certifications() {
  type Cert = (typeof certifications)[number];
  const obtained = certifications.filter((c: Cert) => c.status === "obtenu");
  const inProgress = certifications.filter((c: Cert) => c.status === "en-cours");

  return (
    <Column maxWidth="m" paddingY="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${blog.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* En-tête */}
      <Column gap="s">
        <Heading variant="display-strong-l">{blog.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {blog.description}
        </Text>
      </Column>

      {/* Stats */}
      <Row gap="16" wrap>
        <Row
          border="neutral-alpha-medium"
          background="neutral-alpha-weak"
          radius="m"
          padding="20"
          gap="16"
          vertical="center"
          flex={1}
          minWidth={12}
        >
          <Row
            width="48"
            height="48"
            radius="m"
            background="brand-alpha-weak"
            horizontal="center"
            vertical="center"
          >
            <Icon name="arrowUpRight" size="l" onBackground="brand-weak" />
          </Row>
          <Column gap="2">
            <Heading variant="display-strong-m">{obtained.length}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Certifications obtenues
            </Text>
          </Column>
        </Row>
        <Row
          border="neutral-alpha-medium"
          background="neutral-alpha-weak"
          radius="m"
          padding="20"
          gap="16"
          vertical="center"
          flex={1}
          minWidth={12}
        >
          <Row
            width="48"
            height="48"
            radius="m"
            background="accent-alpha-weak"
            horizontal="center"
            vertical="center"
          >
            <Icon name="rocket" size="l" onBackground="accent-weak" />
          </Row>
          <Column gap="2">
            <Heading variant="display-strong-m">{inProgress.length}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              En cours de préparation
            </Text>
          </Column>
        </Row>
      </Row>

      {/* Certifications en cours */}
      {inProgress.length > 0 && (
        <Column gap="m">
          <Row gap="12" vertical="center">
            <Icon name="rocket" size="m" onBackground="accent-weak" />
            <Heading variant="display-strong-s">En préparation</Heading>
          </Row>
          <Column gap="12">
            {inProgress.map((cert, index) => (
              <Row
                key={index}
                border="accent-alpha-medium"
                background="accent-alpha-weak"
                radius="l"
                padding="24"
                gap="20"
                vertical="center"
                horizontal="between"
                wrap
              >
                <Row gap="20" vertical="center" flex={1}>
                  <Row
                    width="56"
                    height="56"
                    radius="m"
                    background="accent-alpha-medium"
                    horizontal="center"
                    vertical="center"
                    style={{ flexShrink: 0 }}
                  >
                    <Icon name={cert.icon as any} size="l" onBackground="accent-weak" />
                  </Row>
                  <Column gap="4" flex={1}>
                    <Row gap="8" vertical="center" wrap>
                      <Text variant="heading-strong-l">{cert.title}</Text>
                      <Tag size="s">{statusConfig["en-cours"].label}</Tag>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak">
                      {cert.issuer}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {cert.description}
                    </Text>
                  </Column>
                </Row>
                <Column gap="4" horizontal="end" style={{ flexShrink: 0 }}>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    Prévu
                  </Text>
                  <Text variant="heading-strong-m">{cert.expectedDate}</Text>
                </Column>
              </Row>
            ))}
          </Column>
        </Column>
      )}

      {/* Séparateur si les deux sections existent */}
      {inProgress.length > 0 && obtained.length > 0 && (
        <Line background="neutral-alpha-medium" />
      )}

      {/* Certifications obtenues */}
      {obtained.length > 0 && (
        <Column gap="m">
          <Row gap="12" vertical="center">
            <Icon name="arrowUpRight" size="m" onBackground="brand-weak" />
            <Heading variant="display-strong-s">Certifications obtenues</Heading>
          </Row>
          <Column gap="12">
            {obtained.map((cert, index) => (
              <Row
                key={index}
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="l"
                padding="24"
                gap="20"
                vertical="center"
                horizontal="between"
                wrap
              >
                <Row gap="20" vertical="center" flex={1}>
                  <Row
                    width="56"
                    height="56"
                    radius="m"
                    background="brand-alpha-medium"
                    horizontal="center"
                    vertical="center"
                    style={{ flexShrink: 0 }}
                  >
                    <Icon name={cert.icon as any} size="l" onBackground="brand-weak" />
                  </Row>
                  <Column gap="4" flex={1}>
                    <Row gap="8" vertical="center" wrap>
                      <Text variant="heading-strong-l">{cert.title}</Text>
                      <Tag size="s">{statusConfig["obtenu"].label}</Tag>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak">
                      {cert.issuer}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {cert.description}
                    </Text>
                  </Column>
                </Row>
                {"obtainedDate" in cert && (
                  <Column gap="4" horizontal="end" style={{ flexShrink: 0 }}>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      Obtenu en
                    </Text>
                    <Text variant="heading-strong-m">{(cert as any).obtainedDate}</Text>
                  </Column>
                )}
              </Row>
            ))}
          </Column>
        </Column>
      )}

      {/* Message si aucune certification */}
      {certifications.length === 0 && (
        <Column
          border="neutral-alpha-medium"
          background="neutral-alpha-weak"
          radius="l"
          padding="48"
          gap="m"
          horizontal="center"
          align="center"
        >
          <Icon name="document" size="xl" onBackground="neutral-weak" />
          <Text variant="body-default-l" onBackground="neutral-weak">
            Des certifications arrivent bientôt...
          </Text>
        </Column>
      )}
    </Column>
  );
}
