import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../../shared';
import { PageTemplate } from './PageTemplate';

describe('PageTemplate Component', () => {
  test('renders without errors', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <PageTemplate />
      </ThemeProvider>
    );
  });

  test('renders children', () => {
    const childText = 'Hello, world!';
    const { getByText } = render(
      <ThemeProvider theme={themes.light}>
        <PageTemplate>{childText}</PageTemplate>
      </ThemeProvider>
    );
    const childElement = getByText(childText);
    expect(childElement).toBeInTheDocument();
  });

  test('applies className and container class', () => {
    const className = 'custom-class';
    const { container } = render(
      <ThemeProvider theme={themes.light}>
        <PageTemplate className={className} />
      </ThemeProvider>
    );
    const wrapperElement = container.firstChild;
    expect(wrapperElement).toHaveClass(className);
    expect(wrapperElement).toHaveClass('container');
  });
});
