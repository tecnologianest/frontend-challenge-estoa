import { ReactNode, createContext } from 'react'
import { useQuery } from 'react-query'
import axios, { AxiosResponse } from 'axios'

export type CharacterPropsResults = Array<
  Record<
    | 'birth_year'
    | 'created'
    | 'edited'
    | 'eye_color'
    | 'gender'
    | 'hair_color'
    | 'height'
    | 'homeworld'
    | 'mass'
    | 'name'
    | 'skin_color'
    | 'url',
    string
  > &
    Record<'films' | 'species' | 'starships' | 'vehicles', Array<string>>
>

export interface CharacterProps {
  count: number
  next: string | null
  previous: string | null
  results: CharacterPropsResults
}

export const CharactersContext = createContext<{
  data?: CharacterPropsResults
  isLoading: boolean
}>({ isLoading: false })

async function getCharacters() {
  let people: CharacterPropsResults = []

  // set next page to fetch
  let nextPage: string | null = 'https://swapi.dev/api/people/'

  // while nextPage is true, it does another fetch to return all results
  while (nextPage) {
    const response: AxiosResponse<CharacterProps> =
      await axios.get<CharacterProps>(nextPage)

    const { next, results } = response.data

    nextPage = next

    people = [...people, ...results]
  }

  return people
}

export function CharactersProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters
  })

  console.log(data)
  return (
    <CharactersContext.Provider value={{ data, isLoading }}>
      {children}
    </CharactersContext.Provider>
  )
}
