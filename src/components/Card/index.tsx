'use client';

import React from 'react';
import { GridItem, Text } from '@chakra-ui/react';

interface CardProps {
  name: string;
  species: string;
  birthYear: string;
}

export default function Card({ name, species, birthYear }: CardProps) {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
      color="#FFF"
      border="1px solid white"
      textColor="#FFF"
      maxH="250px"
      maxW="250px"
    >
      <Text>Name: {name}</Text>
      <Text>Species: {species}</Text>
      <Text>Birth Year: {birthYear}</Text>
    </GridItem>
  );
}
