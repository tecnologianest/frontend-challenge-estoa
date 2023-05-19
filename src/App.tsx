import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './components';
import { headerMock } from './components/molecules/Header/Header.mock';
import { Home } from './pages';
import Character from './pages/Character';
import { queryClient } from './services';
import { themes } from './shared';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>
        <Header {...headerMock} />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/character/:id'} element={<Character />} />
          </Routes>
        </QueryClientProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
