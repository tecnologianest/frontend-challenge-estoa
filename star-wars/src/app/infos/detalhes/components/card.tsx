import { store } from "@/app/store"
import Image from 'next/image'
import { ButtonCard } from "./button-card"
import { tipo} from '../../[...type]/models/tipo'


export default function Card() {

    const dados = store.getState().persistedReducer

    const cardDate = [
        {
            title: 'Planeta',
            dados: dados.newHomeWorld ,
            subTitle: 'Composição',
            img: '/assets/Planeta.svg',
            alt: 'Imagem de uma planeta',
            type: tipo.PLANETA
        },
        {
            title: 'Naves',
            dados: dados.newStarships,
            img: '/assets/battleship.svg',
            alt: 'Imagem de uma nave',
            type: tipo.NAVES

        },
        {
            title: 'Veículos',
            dados: dados.newVehicles,
            img: '/assets/aircraft.svg',
            alt: 'Imagem de um veículo',
            type: tipo.NAVES
        },
        {
            title: 'Personagem',
            dados: dados.newPeoples,
            img: '/assets/droid.svg',
            alt: 'Imagem de um android',
            type: tipo.PERSONAGEM
        },
        {
            title: 'Filme',
            dados: dados.films,
            img: '/assets/lightsaber.svg',
            alt: 'Imagem do Logo do star wars',
            type: tipo.FILMES
        },
    ]

    return (
        <>
            {cardDate.map((dados: any, index: number) => (
                dados.dados?.length > 0 || dados.dados?.url ? (
                    <ButtonCard type={dados.type} date={dados.dados} key={index}  className="cursor-pointer ml-5 mb-5 items-center flex flex-col justify-between p-4 w-80 h-80 bg-[rgba(0,0,0,.6)] rounded" >
                    
                    <div className='flex justify-center items-center'>
                        <p className='text-base text-[#D8CEDE] font-bold'>{dados.title}</p>
                    </div>

                    <div className="flex relative justify-center">
                        <Image
                        src={dados.img}
                        alt={dados.alt}
                        width={200}
                        height={200}
                        className="m-auto"
                        />
                    </div>
                    
                    </ButtonCard>
                ) : null
            ))}
        </>
    )
}