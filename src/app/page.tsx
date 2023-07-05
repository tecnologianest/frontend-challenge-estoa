'use client';
import React, { useState, useMemo, ChangeEvent } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';

import { Box, Button, Flex, Select, Spinner } from '@chakra-ui/react';
import Card from '@/components/Card';
import { AllPeopleResponseType } from '@/@types/peopleTypes';
import { PeopleResponseType } from '@/@types/peopleResponseType';
import Loading from '@/components/Loading';
import { FilmsResponseType } from '@/@types/filmsResponseProps';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [defaultOptionSelected, setDefaultOptionSelected] = useState('reset');
  const [filteredData, setFilteredData] = useState<AllPeopleResponseType[]>();

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

  console.log(data);

  const filmData = useQuery(['getFilms'], async () => {
    const response = await axios.get('https://swapi.dev/api/films', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data as FilmsResponseType;
  });

  function handleNextButton() {
    setFilteredData([]);
    setDefaultOptionSelected('reset');
    if (data.next) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  function handlePreviousButton() {
    setFilteredData([]);
    setDefaultOptionSelected('reset');
    if (data.previous) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  function handleRemoveFilter() {
    setFilteredData([]);
  }

  const memoizedData = useMemo(() => {
    return data?.results || [];
  }, [data]);

  function handleMovieSelection(event: ChangeEvent<HTMLSelectElement>) {
    const filteredCharacters = memoizedData?.filter(
      (movie: AllPeopleResponseType) => {
        setDefaultOptionSelected(event?.target?.value);
        return movie?.films?.includes(event?.target?.value);
      }
    );

    setFilteredData(filteredCharacters);
  }

  if (isLoading) {
    return (
      <Flex
        as="main"
        h="calc(100vh - 80px)"
        bg="#303046"
        justifyContent="center"
        alignItems="center"
        data-testid="test-loading"
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
      data-testid="test-home-loaded"
    >
      {filmData.isLoading ? (
        <Spinner ml="80px" color="#FFF" />
      ) : (
        <Select
          bg="#FFF"
          maxW="300px"
          ml="20px"
          onChange={(e) => {
            handleMovieSelection(e);
          }}
          value={defaultOptionSelected}
          data-testid="test-select-loaded"
        >
          <option value="reset" onChange={() => handleRemoveFilter()}>
            Select a movie
          </option>
          {filmData && filmData.data
            ? filmData.data?.results?.map((data) => {
                return (
                  <option key={data.title} value={data.url}>
                    {data.title}
                  </option>
                );
              })
            : null}
        </Select>
      )}

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
        {filteredData?.length
          ? filteredData?.map((data: AllPeopleResponseType, index: number) => {
              return (
                <Card
                  key={index}
                  name={data.name}
                  species={data.species}
                  birthYear={data.birth_year}
                  peopleUrl={data.url}
                  data-testid="filtered-card-loaded"
                />
              );
            })
          : memoizedData.map((data: AllPeopleResponseType, index: number) => {
              return (
                <Card
                  key={index}
                  name={data.name}
                  species={data.species}
                  birthYear={data.birth_year}
                  peopleUrl={data.url}
                  data-testid="card-loaded"
                />
              );
            })}
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
