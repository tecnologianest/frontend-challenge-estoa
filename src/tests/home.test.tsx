/* eslint-disable no-undef */
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from '@/app/page';
import { mockFilmDataResponse, mockResponse } from './mocks';

const mock = new MockAdapter(axios);

describe('Home', () => {
  let queryClient: any;

  beforeEach(() => {
    mock.reset();
    queryClient = new QueryClient();
  });

  it('should render Loading component on home page render', () => {
    const queryClient = new QueryClient();

    act(() => {
      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      );
    });

    const Header = screen.getByTestId('test-loading');
    expect(Header).toBeInTheDocument();
  });

  it('renders select component on home render', async () => {
    mock.onGet('https://swapi.dev/api/people/?page=1').reply(200, mockResponse);

    mock.onGet('https://swapi.dev/api/films').reply(200, mockFilmDataResponse);

    act(() => {
      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      );
    });

    await waitFor(() => screen.getByTestId('test-home-loaded'));

    const select = screen.getByTestId('test-select-loaded');

    expect(select).toBeInTheDocument();
  });

  it('renders Card component render', async () => {
    jest.spyOn(mock, 'onGet');

    mock.onGet('https://swapi.dev/api/people/?page=1').reply(200, mockResponse);
    mock.onGet('https://swapi.dev/api/films').reply(200, mockFilmDataResponse);

    const renderResult = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    console.log(renderResult.container.innerHTML);

    await waitFor(() => {
      screen.queryByText(/Loading/i);
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    });

    await waitFor(async () => {
      const cardComponents = await screen.findByTestId(/card-loaded/i);
      expect(cardComponents).toBeInTheDocument();
      expect(screen.queryByText(/Luke/i)).toBeInTheDocument();
    });
  });
});
