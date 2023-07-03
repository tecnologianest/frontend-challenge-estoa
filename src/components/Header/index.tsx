'use client';

import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex bg="#3f3f7c" h="80px" justifyContent="center" alignItems="center">
      <Text as="h1" color="#FFF" fontSize="28px">
        Frontend Challenge Estoa
      </Text>
    </Flex>
  );
}
