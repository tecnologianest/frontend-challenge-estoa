'use client';

import React from 'react';
import { useQuery } from 'react-query';

import { GridItem, Text } from '@chakra-ui/react';
import { CardProps } from '@/@types/cardProps';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Card({
  name,
  species,
  birthYear,
  peopleUrl,
}: CardProps) {
  const router = useRouter();

  function extractNumbersFromString(str: string): string {
    const regex = /\d+/g;
    const numbers = str.match(regex);
    return numbers ? numbers.join('') : '';
  }

  const { data } = useQuery(species[0], async () => {
    return await axios
      .get(species[0], {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data;
      });
  });

  const speciesName = data?.name ? data.name : '';

  const detailsParam = extractNumbersFromString(peopleUrl);

  const handleRedirect = () =>
    router.push(`/details/${detailsParam}${speciesName}`);

  return (
    <GridItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={{ base: 1, sm: 2 }}
      color="#FFF"
      border="1px solid white"
      textColor="#FFF"
      maxH="120px"
      maxW="240px"
      _hover={{ cursor: 'pointer' }}
      onClick={() => handleRedirect()}
    >
      <Text fontSize={{ base: '12px', sm: '14px', md: '18px' }}>
        Name: {name}
      </Text>
      <Text fontSize={{ base: '12px', sm: '14px', md: '18px' }}>
        Species: {data?.name ? data.name : 'N/A'}
      </Text>
      <Text fontSize={{ base: '12px', sm: '14px', md: '18px' }}>
        Birth Year: {birthYear}
      </Text>
    </GridItem>
  );
}
