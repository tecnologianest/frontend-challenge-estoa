import React, { memo, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Loading, SearchBar } from '../../components';
import { useSearch } from '../../hooks';
import { fetchCharacters } from '../../services';
import { CharacterProps } from '../../types';
import * as S from './Home.styles';

const LazyCard = memo(Card);

export function Home(props: React.HtmlHTMLAttributes<HTMLElement>) {
  const { data, isLoading } = useQuery({
    queryFn: fetchCharacters,
  });

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (value: string) => {
    setSearchQuery(value);
  };

  const filteredList = useSearch<CharacterProps>(data ?? [], searchQuery);

  const renderComponent = (
    { name, species, birth_year }: CharacterProps,
    index: number
  ) => {
    return (
      <LazyCard
        id={String(index + 1)}
        data-testid="character-card"
        key={name.replaceAll(' ', '_')}
        character={{ name, species, birth_year }}
        button={
          <Button onClick={() => navigate(`/character/${index + 1}`)}>
            SEE MORE
          </Button>
        }
      />
    );
  };

  return (
    <S.Home {...props}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
            placeholder="Search by name"
          />
          <S.Content>
            {filteredList.map((item, index) => (
              <li key={index}>{renderComponent(item, index)}</li>
            ))}
          </S.Content>
        </>
      )}
    </S.Home>
  );
}
