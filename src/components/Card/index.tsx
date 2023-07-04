'use client';

import React from 'react';
// import { useQuery } from 'react-query';

import { GridItem, Text } from '@chakra-ui/react';
import { CardProps } from '@/@types/cardProps';
// import axios from 'axios';

export default function Card({ name, species, birthYear }: CardProps) {
  // const { data } = useQuery('getSpeciesData', async () => {
  //   if (species.length > 0) {
  //     const response = await axios.get(species[0], {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     console.log(response.data);
  //     return response.data.name;
  //   }
  //   return '';
  // });

  console.log('species');

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
