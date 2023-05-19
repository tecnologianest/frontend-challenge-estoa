import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../shared';
import { Home } from './Home';

// Mock the fetchCharacters function
jest.mock('../../services', () => ({
  fetchCharacters: jest.fn(),
}));

// Create a mock data for testing
const mockCharacters = [
  {
    name: 'Luke Skywalker',
    species: 'Human',
    birth_year: '19BBY',
  },
  {
    name: 'Leia Organa',
    species: 'Human',
    birth_year: '19BBY',
  },
];

const ComponentWithProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider theme={themes.light}>
          <Home />
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

// Set up the query client for React Query
const queryClient = new QueryClient();

// Mock the useQuery hook
jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(),
}));

// Mock the react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading indicator when data is loading', () => {
    // Mock the useQuery hook to return loading state
    (useQuery as jest.Mock).mockReturnValue({ isLoading: true });

    render(<ComponentWithProviders />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('renders search bar and character cards when data is loaded', async () => {
    // Mock the useQuery hook to return loaded data
    (useQuery as jest.Mock).mockReturnValue({ data: mockCharacters });

    render(<ComponentWithProviders />);

    // Check if the search bar is rendered
    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();

    // Check if character cards are rendered
    const characterCards = screen.getAllByTestId('character-card');
    expect(characterCards.length).toBe(mockCharacters.length);
  });

  it('updates the search query and filters character cards based on input', async () => {
    // Mock the useQuery hook to return loaded data
    (useQuery as jest.Mock).mockReturnValue({ data: mockCharacters });

    render(<ComponentWithProviders />);

    // Enter search query
    const searchInput = screen.getByPlaceholderText('Search by name');
    fireEvent.change(searchInput, { target: { value: 'Luke' } });

    // Wait for the filter to take effect
    await waitFor(() => {
      const characterCards = screen.getAllByTestId('character-card');
      expect(characterCards.length).toBe(1);
      expect(characterCards[0]).toHaveTextContent('Luke Skywalker');
    });
  });

  it('navigates to character details page when "SEE MORE" button is clicked', async () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<ComponentWithProviders />);

    // Click the "SEE MORE" button on the first character card
    const seeMoreButton = screen.getAllByText('SEE MORE')[0];
    fireEvent.click(seeMoreButton);

    // Check if the navigate function is called with the correct path
    expect(navigateMock).toHaveBeenCalledWith('/character/1');
  });
});
