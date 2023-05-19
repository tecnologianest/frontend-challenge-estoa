import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../shared';
import { NotFound } from './NotFound';

const ComponentWithProvider = () => {
  return (
    <MemoryRouter initialEntries={['/qpc?id=123']}>
      <ThemeProvider theme={themes.light}>
        <NotFound />
      </ThemeProvider>
    </MemoryRouter>
  );
};

describe('NotFound', () => {
  test('renders the correct elements and text content', () => {
    render(<ComponentWithProvider />);

    const headingElement = screen.getByRole('heading', { level: 1 });
    const paragraphElement = screen.getByText('Page not found, please go Home');
    const linkElement = screen.getByRole('link', { name: 'Go Home' });

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  it('navigates to the home page when the "Go Home" button is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <ThemeProvider theme={themes.light}>
        <Router navigator={history} location="/bananas">
          <NotFound />
        </Router>
      </ThemeProvider>
    );

    const goHomeButton = getByRole('button', { name: 'Go Home' });

    expect(goHomeButton).toBeInTheDocument();

    fireEvent.click(goHomeButton);

    expect(history.location.pathname).toBe('/');
  });
});
