import React from 'react';
import { Card, Text, Container, Title, Timeline } from '@mantine/core';
import { IconBriefcase, IconCode, IconCloud } from '@tabler/icons-react';

const About = () => {
  return (
    <Container size="md" py="xl">
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={1} mb="md">About Me</Title>
        <Text size="lg" mb="md">
          I am a Software Engineer with 12 years of experience, specializing in full-stack development, cloud technologies, and software architecture. Passionate about building scalable systems and crafting elegant user experiences.
        </Text>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={2} mb="sm">Professional Journey</Title>
        <Timeline active={2} bulletSize={30} lineWidth={4}>
          <Timeline.Item title="Senior Software Engineer at TechCorp Inc." bullet={<IconCloud size={16} />}>            
            <Text color="dimmed" size="sm">2020 - Present</Text>
            <Text>Leading a team of developers to build cloud-native applications, optimizing performance, and implementing best practices for DevOps and CI/CD.</Text>
          </Timeline.Item>

          <Timeline.Item title="Software Engineer at WebSolutions Ltd." bullet={<IconCode size={16} />}>            
            <Text color="dimmed" size="sm">2016 - 2020</Text>
            <Text>Worked on various web applications using React, Node.js, and GraphQL. Designed scalable RESTful APIs and contributed to open-source projects.</Text>
          </Timeline.Item>

          <Timeline.Item title="Junior Developer at CodeCraft" bullet={<IconBriefcase size={16} />}>            
            <Text color="dimmed" size="sm">2012 - 2016</Text>
            <Text>Developed internal tools and applications using Python and Django. Collaborated with senior developers to enhance backend systems and improve data processing workflows.</Text>
          </Timeline.Item>
        </Timeline>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={2} mb="sm">Summary</Title>
        <Text>
          Over 12 years of experience across multiple industries including finance, healthcare, and e-commerce. Proficient in a variety of languages and frameworks, including React, Python, Node.js, and AWS. Always eager to explore new technologies and drive innovations.
        </Text>
      </Card>
    </Container>
  );
};

export default About;
