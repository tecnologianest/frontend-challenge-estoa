'use client';
import React from 'react';

import { Box } from '@chakra-ui/react';
import Card from '@/components/Card';

export default function page() {
  return (
    <Box
      as="main"
      h="100vh"
      bg="#303046"
      padding="50px"
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={5}
      justifyContent="center"
    >
      <Card name="Luke Skywalker" species="Droid" birthYear="19BBY" />
    </Box>
  );
}
