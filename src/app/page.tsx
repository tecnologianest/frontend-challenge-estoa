'use client';
import React, { useState } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';

import { Box, Button, Flex } from '@chakra-ui/react';
import Card from '@/components/Card';
import { AllPeopleResponseType } from '@/@types/peopleTypes';
import { PeopleResponseType } from '@/@types/peopleResponseType';
import Loading from '@/components/Loading';

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

  function handleNextButton() {
    if (data.next) {
      setUrl(data.next);
    }
    return;
  }

  function handlePrevioustButton() {
    if (data.previous) {
      setUrl(data.previous);
    }
    return;
  }

  if (isLoading) {
    return <Loading />;
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
                  peopleUrl={data.url}
                />
              );
            })
          : ''}
      </Box>

      <Flex justifyContent="center" gap={6}>
        <Button
          w="100px"
          onClick={() => handlePrevioustButton()}
          _hover={{
            opacity: data.previous ? '0.8' : '1',
            cursor: data.previous ? 'pointer' : 'default',
          }}
          disabled={!data.previous}
          _focus={{
            boxShadow: 'none',
          }}
          _active={{
            bg: !data.previous && '#EDF2F7',

            borderColor: !data.previous && '#EDF2F7',
          }}
        >
          Previous
        </Button>

        <Button
          w="100px"
          onClick={() => handleNextButton()}
          _hover={{ opacity: '0.8' }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}
