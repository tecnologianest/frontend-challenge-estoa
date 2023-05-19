import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { GridTemplate } from './components';
import { Home } from './pages';
import Character from './pages/Character';
import { queryClient } from './services';
import { themes } from './shared';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>
        <GridTemplate>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={'/character/:id'} element={<Character />} />
            </Routes>
          </QueryClientProvider>
        </GridTemplate>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
