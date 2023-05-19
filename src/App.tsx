import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import Character from './pages/Character';
import { queryClient } from './services';

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={'/character/:id'} element={<Character />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
