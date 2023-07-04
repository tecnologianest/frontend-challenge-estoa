'use client';

import React from 'react';

import { Flex, Spinner, Text } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      h="calc(100vh - 80px)"
      gap={3}
    >
      <Spinner size="xl" />
      <Text>Loading...</Text>
    </Flex>
  );
}
