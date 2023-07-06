'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Flex, Text, Image } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '@/components/Loading';
import Films from '@/components/Films';
import Homeworld from '@/components/Homeworld';

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

  const peopleId = extractNumberFromParams(search);
  const specie = extractLettersFromParams(search);

  const { data, isLoading } = useQuery(`getPeople${peopleId}`, async () => {
    const response = await axios.get(
      `https://swapi.dev/api/people/${peopleId}/`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  });

  const personImageRequest = useQuery(
    `getImage${data && data.name ? data.name : 'person'}`,
    async () => {
      const response = await axios.get(
        `https://cdn.jsdelivr.net/gh/akabab/starwars-api@0.2.1/api/id/${peopleId}.json`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    }
  );

  console.log(personImageRequest.data);

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
      h="100vh"
      bg="#303046"
      direction="column"
      alignItems="center"
      justifyContent="space-around"
      gap={6}
    >
      <Text as="h1" fontSize="18px" color="#FFF" mt="20px">
        Character Details
      </Text>

      {!personImageRequest.isLoading && personImageRequest.data ? (
        <Image
          maxH="150px"
          maxW="150px"
          src={personImageRequest.data.image}
          alt="character image"
          rounded={10}
        />
      ) : (
        <Loading />
      )}

      <Flex
        direction="column"
        color="#FFF"
        bg="#5b5baa"
        borderRadius="1rem"
        w="full"
        maxW="340px"
        maxH="600px"
        gap={{ base: 2, md: 4 }}
        justifyContent="center"
        p="10px"
        mb="20px"
      >
        <Text>Name: {data.name}</Text>
        <Text>Birth Year: {data.birth_year}</Text>
        <Text>Eye color: {data.eye_color}</Text>
        <Text>Gender: {data.gender}</Text>
        <Text>Hair Color: {data.hair_color}</Text>
        <Text>Height: {data.height}</Text>
        <Text>Mass: {data.mass}</Text>
        <Text>Skin Color: {data.skin_color}</Text>

        <Homeworld url={data.homeworld} />

        <Flex gap={3}>
          <Text>Films: </Text>
          <Films urls={data.films} />
        </Flex>

        <Text>Species: {specie}</Text>
      </Flex>
    </Flex>
  );
}
