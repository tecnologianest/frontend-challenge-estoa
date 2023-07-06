'use client';

import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../Loading';

type HomeworldProps = {
  url: string;
};

export default function Homeworld({ url }: HomeworldProps) {
  const { data, isLoading } = useQuery(`getHomeworld`, async () => {
    return axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.data);
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box bg="transparent" maxH="30px">
      <Text>Homeworld: {data.name}</Text>
    </Box>
  );
}
