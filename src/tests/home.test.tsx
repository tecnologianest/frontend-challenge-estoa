/* eslint-disable no-undef */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from '@/app/page';

const mock = new MockAdapter(axios);

describe('Home', () => {
  let queryClient: any;

  beforeAll(() => {
    queryClient = new QueryClient();
  });

  beforeEach(() => {
    mock.reset();
  });

  it('renders home component with mock data', async () => {
    const mockResponse = {
      data: {
        results: [
          {
            name: 'Luke Skywalker',
            species: '',
            birth_year: '19BBY',
            url: 'https://swapi.dev/api/people/1',
          },
        ],
      },
    };

    mock.onGet('https://swapi.dev/api/people/?page=1').reply(200, mockResponse);

    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    await waitFor(() => screen.getByTestId('test-home-loaded')).then(() =>
      console.log('renderizou')
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
