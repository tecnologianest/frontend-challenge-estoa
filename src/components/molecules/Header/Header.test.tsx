import '@testing-library/jest-dom/extend-expect'; // Import the extended matchers
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../../shared';
import { Header } from './Header';

describe('Header Component', () => {
  test('renders without errors', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );
  });

  test('displays the logo', () => {
    const { container } = render(
      <ThemeProvider theme={themes.light}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    const logoElement = container.querySelector('#header-logo');
    expect(logoElement).toBeInTheDocument();
  });
});
