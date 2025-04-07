import React from 'react';
import { Card, Text, Container, Title, Timeline, Image } from '@mantine/core';
// import './Fitness.css';

const Fitness = () => {
  return (
    <Container size="md" py="xl">
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={1} mb="md">My Fitness Journey</Title>
        <Text size="lg" mb="md">
          Over the past 6 months, I've gone through a transformative journey to lose 31 kg. This experience has taught me discipline, consistency, and the importance of a healthy lifestyle.
        </Text>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={2} mb="sm">Journey Timeline</Title>
        <Timeline active={5} bulletSize={30} lineWidth={4}>
          <Timeline.Item title="Start of Journey - Month 1">
            <Text color="dimmed" size="sm">Weight: 110 kg</Text>
            <Text>Focused on building consistent habits. Started with light cardio and dietary changes.</Text>
          </Timeline.Item>
          <Timeline.Item title="Building Stamina - Month 2">
            <Text color="dimmed" size="sm">Weight: 105 kg</Text>
            <Text>Introduced strength training, reduced processed foods, and increased protein intake.</Text>
          </Timeline.Item>
          <Timeline.Item title="Improving Diet - Month 3">
            <Text color="dimmed" size="sm">Weight: 98 kg</Text>
            <Text>Focused on portion control, hydration, and cutting down sugars.</Text>
          </Timeline.Item>
          <Timeline.Item title="Intense Training - Month 4">
            <Text color="dimmed" size="sm">Weight: 92 kg</Text>
            <Text>Increased intensity of workouts, introduced HIIT and weight training.</Text>
          </Timeline.Item>
          <Timeline.Item title="Sustaining Progress - Month 5">
            <Text color="dimmed" size="sm">Weight: 86 kg</Text>
            <Text>Maintained discipline with diet, improved recovery practices.</Text>
          </Timeline.Item>
          <Timeline.Item title="Achieving Goal - Month 6">
            <Text color="dimmed" size="sm">Weight: 79 kg</Text>
            <Text>Successfully achieved my goal of losing 31 kg through dedication and consistency.</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
    </Container>
  );
};

export default Fitness;
