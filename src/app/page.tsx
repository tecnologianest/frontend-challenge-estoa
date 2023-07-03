'use client';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Box } from '@chakra-ui/react';
import Card from '@/components/Card';
import axios from 'axios';
import { AllPeopleResponseType } from '@/@types/peopleTypes';

export default function Home() {
  const [url, setUrl] = useState<string>('https://swapi.dev/api/people/');

  const { data, isLoading } = useQuery('getPeopleData', async () => {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);

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
      {data
        ? data.results.map((data: AllPeopleResponseType) => {
            <Card
              name={data.name}
              species="Droid"
              birthYear={data.birth_year}
            />;
          })
        : ''}
    </Box>
  );
}
