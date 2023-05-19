import axios from 'axios';
import { fetchCharacters, getFilms, getHomeWorld, getSpecies } from '.';

jest.mock('axios');

describe('fetchCharacters', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('fetches characters and their species', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const mockResponse = {
      data: {
        results: [
          {
            name: 'Luke Skywalker',
            species: ['https://swapi.dev/api/species/1'],
          },
        ],
        next: null,
      },
    };
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const mockSpeciesResponse = {
      data: { name: 'Human' },
    };
    mockedAxios.get.mockResolvedValueOnce(mockSpeciesResponse);

    const characters = await fetchCharacters();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://swapi.dev/api/people'
    );
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://swapi.dev/api/species/1'
    );
    expect(characters).toEqual([
      { name: 'Luke Skywalker', species: ['Human'] },
    ]);
  });
});

describe('getFilms', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('fetches film titles based on the list of film URLs', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    const mockResponse1 = {
      data: { title: 'A New Hope' },
    };
    mockedAxios.get.mockResolvedValueOnce(mockResponse1);

    const mockResponse2 = {
      data: { title: 'The Empire Strikes Back' },
    };
    mockedAxios.get.mockResolvedValueOnce(mockResponse2);

    const filmsList = [
      'https://swapi.dev/api/films/1',
      'https://swapi.dev/api/films/2',
    ];
    const films = await getFilms(filmsList);

    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    expect(mockedAxios.get).toHaveBeenNthCalledWith(
      1,
      'https://swapi.dev/api/films/1'
    );
    expect(mockedAxios.get).toHaveBeenNthCalledWith(
      2,
      'https://swapi.dev/api/films/2'
    );
    expect(films).toEqual(['A New Hope', 'The Empire Strikes Back']);
  });
});

describe('getSpecies', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('fetches species names based on the list of species URLs', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const mockResponse = {
      data: { name: 'Human' },
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const speciesList = ['https://swapi.dev/api/species/1'];
    const species = await getSpecies(speciesList);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://swapi.dev/api/species/1'
    );
    expect(species).toEqual(['Human']);
  });

  it('returns ["unknown"] if the speciesList is empty', async () => {
    const species = await getSpecies([]);
    expect(species).toEqual(['unknown']);
  });
});

describe('getHomeWorld', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('fetches the name of the homeworld based on the URL', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const mockResponse = {
      data: { name: 'Tatooine' },
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const homeworldName = await getHomeWorld(
      'https://swapi.dev/api/planets/1/'
    );

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://swapi.dev/api/planets/1/'
    );
    expect(homeworldName).toEqual('Tatooine');
  });
});
