import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../../shared';
import { Card } from './Card';

describe('Card Component', () => {
  const character = {
    id: '1',
    name: 'Luke',
    species: ['human'],
    birth_year: '1995',
  };

  test('renders without errors', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Card id={character.id} character={character} />
      </ThemeProvider>
    );
  });

  test('displays the character name', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes.light}>
        <Card id={character.id} character={character} />
      </ThemeProvider>
    );

    const nameElement = getByText(character.name);
    expect(nameElement).toBeInTheDocument();
  });

  test('displays the character details', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes.light}>
        <Card id={character.id} character={character} />
      </ThemeProvider>
    );

    const nameElement = getByText(character.name);
    const speciesElement = getByText(character.species[0]);
    const birthYearElement = getByText(character.birth_year);

    expect(nameElement).toBeInTheDocument();
    expect(speciesElement).toBeInTheDocument();
    expect(birthYearElement).toBeInTheDocument();
  });
});
