import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Loading } from '.';
import { themes } from '../../../shared';

describe('Loading Component', () => {
  test('renders without errors', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Loading />
      </ThemeProvider>
    );
  });

  test('passes HTML attributes to the wrapper div', () => {
    const testId = 'loading-wrapper';
    const { getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <Loading data-testid={testId} />
      </ThemeProvider>
    );
    const wrapper = getByTestId(testId);
    expect(wrapper).toBeInTheDocument();
  });
});
