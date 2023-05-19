import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../../shared';
import { Logo } from './Logo';

describe('Logo Component', () => {
  test('renders without errors', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <MemoryRouter>
          <Logo />
        </MemoryRouter>
      </ThemeProvider>
    );
    // No errors indicate that the component renders successfully
  });

  test('renders the link element', () => {
    const { getByRole } = render(
      <ThemeProvider theme={themes.light}>
        <MemoryRouter>
          <Logo />
        </MemoryRouter>
      </ThemeProvider>
    );
    const linkElement = getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
    // You can add more assertions to check the content and other attributes of the link
  });
});
