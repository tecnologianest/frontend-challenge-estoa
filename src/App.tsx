import { QueryClientProvider } from 'react-query'
import { CharactersProvider } from './context'
import { queryClient } from './lib'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CharactersProvider>Hello World</CharactersProvider>
    </QueryClientProvider>
  )
}

export default App
