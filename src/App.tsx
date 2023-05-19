import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './components';
import { Character, Home, NotFound } from './pages';
import { queryClient } from './services';
import { themes } from './shared';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
