import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { MemoryRouter, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../shared';
import { Character } from './Character';

jest.mock('axios');
jest.mock('react-query');
jest.mock('../../services');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const MockComponent = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <MemoryRouter>
        <Character data-testid="loading-component" />
      </MemoryRouter>
    </ThemeProvider>
  );
};

describe('Character component', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockImplementation((queryConfig) => {
      const data = {};
      const queryResult = {
        data,
        ...queryConfig,
      };
      return queryResult;
    });

    (useParams as jest.Mock).mockReturnValue({
      id: '1',
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    const { getByTestId } = render(<MockComponent />);

    expect(getByTestId('loading-component')).toBeInTheDocument();
  });

  it('fetches character data and renders it', async () => {
    const mockCharacterData = {
      name: 'Luke Skywalker',
      birth_year: '19BBY',
      eye_color: 'Blue',
      gender: 'Male',
      hair_color: 'Blond',
      height: '172',
      mass: '77',
      skin_color: 'Fair',
      homeworld: 'Tatooine',
      films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
      species: ['Human'],
    };

    (axios.get as jest.Mock)
      .mockResolvedValueOnce({ data: mockCharacterData })
      .mockResolvedValueOnce(mockCharacterData.films)
      .mockResolvedValueOnce(mockCharacterData.species)
      .mockResolvedValueOnce(mockCharacterData.homeworld);

    (useQuery as jest.Mock).mockImplementation((_queryKey, queryConfig) => {
      const queryResult = {
        data: mockCharacterData,
        ...queryConfig,
      };
      return queryResult;
    });

    const { getByText, queryByTestId } = render(<MockComponent />);

    await waitFor(async () => {
      expect(
        queryByTestId('loading-component')?.querySelector('#is-loading')
      ).toBeInTheDocument();

      await waitFor(async () => {
        expect(
          queryByTestId('loading-component')?.querySelector('#is-loading')
        ).toBeInTheDocument();

        await waitFor(() => {
          expect(
            getByText((content, element) => {
              if (element === null) return false;
              const hasText = (node: Element) => node.textContent === content;
              const elementHasText = hasText(element);
              const childrenDontHaveText = Array.from(element.children).every(
                (child) => !hasText(child)
              );

              return elementHasText && childrenDontHaveText;
              // @ts-ignore
            }, mockCharacterData.name)
          ).toBeInTheDocument();

          expect(
            getByText((content, element) => {
              if (element === null) return false;
              const hasText = (node: Element) => node.textContent === content;
              const elementHasText = hasText(element);
              const childrenDontHaveText = Array.from(element.children).every(
                (child) => !hasText(child)
              );

              return elementHasText && childrenDontHaveText;
              // @ts-ignore
            }, mockCharacterData.homeworld)
          ).toBeInTheDocument();
        });
      });
    });
  });
});
