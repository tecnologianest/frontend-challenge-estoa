'use client';

import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type FilmsProps = {
  urls: string[];
};

export default function Films({ urls }: FilmsProps) {
  return (
    <Flex
      bg="#3f3f7c"
      h="80px"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {urls.length > 0
        ? urls.map((film: string, index: number) => (
            <Text key={index}>{film}</Text>
          ))
        : ''}
    </Flex>
  );
}
