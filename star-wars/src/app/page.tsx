import Image from 'next/image'
import Links, { Options } from './components/links'
import { tipo } from './infos/[...type]/models/tipo'

export const option: Options[] = [
  {id: 0, alt: 'sabre de luz do filme star wars', img: '/assets/lightsaber.svg', title: 'Filmes', tipo: tipo.FILMES},
  {id: 1, alt: 'Android do filme do star wars', img: '/assets/droid.svg', title: 'Personagens' , tipo: tipo.PERSONAGEM},
  {id: 3, alt: 'Representando uma galaxia', img: '/assets/galaxy.svg', title: 'Planetas' , tipo: tipo.PLANETA},
  {id: 4, alt: 'Nave do filme dos star wars', img: '/assets/aircraft.svg', title: 'Espaçonaves' , tipo: tipo.NAVES},
  {id: 5, alt: 'Nave do filme dos star wars', img: '/assets/battleship.svg', title: 'Veículos' , tipo: tipo.VEICULOS},
]

export default function Home() {

  return (

    <main className="bg-home h-[100vh] w-[100vw]">

      <header className='pt-8 h-36 w-full flex flex-col items-center justify-center'>
        <hr className='w-16' />
        <div className='p-2'>
          <Image
            src="/assets/LogoStarWars.svg"
            alt="Logo star wars "
            width={120}
            height={60}
            className='m-auto'
          />
          <span className='flex items-center justify-center text-2xl font-extralight uppercase'>Discovery</span>
        </div>
        <hr className='w-16' />

      </header>

      <Links linksProps={option} />


    </main>

  )
}


