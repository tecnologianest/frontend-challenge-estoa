'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Flex, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '@/components/Loading';

export default function Details() {
  const searchParams = useParams();
  const search = searchParams.slug;

  function extractNumberFromParams(str: string): string {
    const regex = /^\d+/;
    const matches = str.match(regex);
    return matches ? matches[0] : '';
  }

  function extractLettersFromParams(str: string): string {
    const regex = /[a-zA-Z]+/;
    const matches = str.match(regex);
    return matches ? matches[0] : '';
  }

  const peopleNumber = extractNumberFromParams(search);
  const specie = extractLettersFromParams(search);

  const { data, isLoading } = useQuery(`getPeople${peopleNumber}`, async () => {
    const response = await axios.get(
      `https://swapi.dev/api/people/${peopleNumber}/`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  });

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex
      as="main"
      h="calc(100vh - 80px)"
      bg="#303046"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        color="#FFF"
        bg="#5b5baa"
        borderRadius="1rem"
        w="300px"
        h="500px"
      >
        <Text>Name: {data.name}</Text>
        <Text>Birth Year: {data.birth_year}</Text>
        <Text>Eye color: {data.eye_color}</Text>
        <Text>Gender: {data.gender}</Text>
        <Text>Hair Color: {data.hair_color}</Text>
        <Text>Height: {data.height}</Text>
        <Text>Mass: {data.mass}</Text>
        <Text>Skin Color: {data.skin_color}</Text>
        <Text>Homeworld: {data.homeworld}</Text>
        <Text>Films:</Text>

        <Text>Species: {specie}</Text>
      </Flex>
    </Flex>
  );
}
