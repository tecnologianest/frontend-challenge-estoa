import { memo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { Button, Card, Loading } from '../components';
import { PageTemplate } from '../components/templates';
import { fetchCharacters } from '../services';

const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: ${theme.spacing.sm};
  `}
`;

const LazyCard = memo(Card);

export function Home() {
  const { data, isLoading } = useQuery({
    queryFn: fetchCharacters,
  });

  const navigate = useNavigate();

  return (
    <PageTemplate>
      {isLoading ? (
        <Loading />
      ) : (
        <Content>
          {data?.map(({ name, species, birth_year }, index) => (
            <LazyCard
              id={index + 1}
              key={name.replaceAll(' ', '_')}
              character={{ name, species, birth_year }}
              button={
                <Button onClick={() => navigate(`/character/${index + 1}`)}>
                  SEE MORE
                </Button>
              }
            />
          ))}
        </Content>
      )}
    </PageTemplate>
  );
}
