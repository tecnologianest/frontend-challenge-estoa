'use client';

import React from 'react';
import { GridItem, Text } from '@chakra-ui/react';
import { CardProps } from '@/@types/cardProps';

export default function Card({ name, species, birthYear }: CardProps) {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
      color="#FFF"
      border="1px solid white"
      textColor="#FFF"
      maxH="100px"
      maxW="200px"
    >
      <Text>Name: {name}</Text>
      <Text>Species: {species}</Text>
      <Text>Birth Year: {birthYear}</Text>
    </GridItem>
  );
}
