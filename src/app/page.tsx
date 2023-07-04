'use client';
import React, { useState, useMemo } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';

import { Box, Button, Flex } from '@chakra-ui/react';
import Card from '@/components/Card';
import { AllPeopleResponseType } from '@/@types/peopleTypes';
import { PeopleResponseType } from '@/@types/peopleResponseType';
import Loading from '@/components/Loading';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const url = `https://swapi.dev/api/people/?page=${page}`;

  const { data = {} as PeopleResponseType, isLoading } = useQuery(
    ['getPeopleData', page],
    async () => {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    },
    {
      enabled: Boolean(page),
      keepPreviousData: true,
    }
  );

  function handleNextButton() {
    if (data.next) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  function handlePreviousButton() {
    if (data.previous) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  const memoizedData = useMemo(() => {
    return data?.results || [];
  }, [data]);

  if (isLoading) {
    return (
      <Flex
        as="main"
        h="calc(100vh - 80px)"
        bg="#303046"
        justifyContent="center"
        alignItems="center"
      >
        <Loading />
      </Flex>
    );
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
        padding={{ base: '20px', '2xl': '50px' }}
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={{ base: 5, sm: 6 }}
        justifyContent="center"
      >
        {memoizedData.length > 0
          ? memoizedData.map((data: AllPeopleResponseType, index: number) => {
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
          onClick={handlePreviousButton}
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
          onClick={handleNextButton}
          _hover={{ opacity: '0.8' }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}
