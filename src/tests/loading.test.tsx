/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Home', () => {
  it('should render Loading component on home page render', () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    const Header = screen.getByTestId('test-loading');
    expect(Header).toBeInTheDocument();
  });
});
