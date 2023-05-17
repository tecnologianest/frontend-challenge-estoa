import { useContext } from 'react'
import { Loading } from '../components/Loading'
import { CharactersContext } from '../context'

export function Home() {
  const { data, isLoading } = useContext(CharactersContext)

  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      {data?.map((character) => (
        <div key={character.name}>{character.name}</div>
      ))}
    </section>
  )
}
