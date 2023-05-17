import { QueryClientProvider } from 'react-query'
import { CharactersProvider } from './context'
import { queryClient } from './lib'
import { Home } from './pages'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersProvider>
        <Home />
      </CharactersProvider>
    </QueryClientProvider>
  )
}

export default App
