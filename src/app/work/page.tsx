import {
  Column,
  Row,
  Heading,
  Text,
  Icon,
  Meta,
  Schema,
  Line,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { WorkProjectCard } from "@/components/work/WorkProjectCard";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  const experiences = about.work.experiences;

  return (
    <Column maxWidth="m" paddingY="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* En-tête */}
      <RevealFx translateY="4">
        <Column gap="s">
          <Heading variant="display-strong-l">{work.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {work.description}
          </Text>
        </Column>
      </RevealFx>

      {/* Compteurs */}
      <RevealFx translateY="8" delay={0.1}>
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
              <Icon name="grid" size="l" onBackground="brand-weak" />
            </Row>
            <Column gap="2">
              <Heading variant="display-strong-m">{experiences.length}</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Projets professionnels
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
              <Heading variant="display-strong-m">Solo</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Réalisations en autonomie
              </Text>
            </Column>
          </Row>
        </Row>
      </RevealFx>

      <Line background="neutral-alpha-medium" />

      {/* Indication clic */}
      <RevealFx translateY="4" delay={0.2}>
        <Row gap="8" vertical="center">
          <Icon name="arrowUpRight" size="s" onBackground="neutral-weak" />
          <Text variant="body-default-s" onBackground="neutral-weak">
            Cliquez sur un projet pour voir les détails
          </Text>
        </Row>
      </RevealFx>

      {/* Cartes projets dynamiques */}
      <Column gap="16">
        {experiences.map((exp, index) => (
          <RevealFx key={index} translateY="8" delay={0.15 + index * 0.08}>
            <WorkProjectCard
              company={exp.company}
              timeframe={exp.timeframe}
              role={exp.role}
              achievements={exp.achievements}
              images={exp.images}
              index={index}
            />
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
