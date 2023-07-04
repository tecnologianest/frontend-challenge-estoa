'use client';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Box, Button, Flex } from '@chakra-ui/react';
import Card from '@/components/Card';
import axios from 'axios';
import { AllPeopleResponseType } from '@/@types/peopleTypes';
import { PeopleResponseType } from '@/@types/peopleResponseType';

export default function Home() {
  const [url, setUrl] = useState<string>('https://swapi.dev/api/people/');

  const { data = {} as PeopleResponseType, isLoading } = useQuery(
    'getPeopleData',
    async () => {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    }
  );

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Flex
      as="main"
      h="calc(100vh - 80px)"
      bg="#303046"
      direction="column"
      justifyContent="space-around"
    >
      <Box
        padding="50px"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={5}
        justifyContent="center"
      >
        {data && data.results && data.results.length > 0
          ? data.results.map((data: AllPeopleResponseType, index: number) => {
              return (
                <Card
                  key={index}
                  name={data.name}
                  species={data.species}
                  birthYear={data.birth_year}
                />
              );
            })
          : ''}
      </Box>
      <Button onClick={() => setUrl('https://swapi.dev/api/people/?page=3')}>
        Next Page
      </Button>
    </Flex>
  );
}
