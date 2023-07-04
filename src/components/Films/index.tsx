'use client';

import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useQuery } from 'react-query';

type FilmsProps = {
  urls: string[];
};

export default function Films({ urls }: FilmsProps) {
  const { data, isLoading } = useQuery(`getFilms`, async () => {
    const requests = urls.map((url) =>
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );

    const responses = await Promise.all(requests);
    const films = responses.map((response) => response.data.title);
    return films;
  });

  if (isLoading) {
    return <Text></Text>;
  }

  return (
    <Flex
      bg="transparent"
      maxH="90px"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {data && data.length > 0
        ? data.map((film: string, index: number) => (
            <Text fontSize="12px" key={index}>
              {film}
            </Text>
          ))
        : ''}
    </Flex>
  );
}
