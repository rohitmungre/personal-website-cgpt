import React from 'react';
import { Card, Text, Container, Title, SimpleGrid, Image, Button } from '@mantine/core';
// import './Labs.css';

const projects = [
  {
    date: 'March 2025',
    title: 'AI Chatbot Experiment',
    description: 'A conversational AI model trained on custom data to answer specific queries.',
    logo: 'https://via.placeholder.com/80',
    demoLink: '/projects/chatbot'
  },
  {
    date: 'February 2025',
    title: 'React 3D Visualization',
    description: 'A 3D rendering tool built with Three.js and React to visualize scientific data.',
    logo: 'https://via.placeholder.com/80',
    demoLink: '/projects/3d-visualization'
  },
  {
    date: 'January 2025',
    title: 'Interactive Data Dashboard',
    description: 'A responsive dashboard built with Mantine and Recharts to visualize business metrics.',
    logo: 'https://via.placeholder.com/80',
    demoLink: '/projects/dashboard'
  }
];

const Labs = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl">Labs - Experimental Projects</Title>
      <SimpleGrid cols={3} spacing="lg">
        {projects.map((project, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder className="project-card">
            <Image src={project.logo} alt={project.title} width={80} height={80} mb="md" />
            <Text size="sm" color="dimmed">{project.date}</Text>
            <Title order={3} mt="xs" mb="xs">{project.title}</Title>
            <Text mb="md">{project.description}</Text>
            <Button component="a" href={project.demoLink} variant="outline">View Demo</Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Labs;
