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
            height: 200,
            type: tipo.PLANETA
        },
        {
            title: 'Naves',
            dados: dados.newStarships,
            img: '/assets/Nave.svg',
            alt: 'Imagem de uma nave',
            height: 100,
            type: tipo.NAVES

        },
        {
            title: 'Veículos',
            dados: dados.newVehicles,
            img: '/assets/Planeta.svg',
            alt: 'Imagem de um planeta',
            height: 200,
            type: tipo.NAVES
        },
        {
            title: 'Personagem',
            dados: dados.newPeoples,
            img: '/assets/droid.svg',
            alt: 'Imagem de um android',
            height: 180,
            type: tipo.PERSONAGEM
        },
        {
            title: 'Filme',
            dados: dados.films,
            img: '/assets/LogoStarWars.svg',
            alt: 'Imagem do Logo do star wars',
            height: 180,
            type: tipo.FILMES
        },
    ]

    return (
        <>
        {cardDate.map((dados: any, index) => (

            dados.dados?.length > 0 || dados.dados?.url ?

            <ButtonCard type={dados.type} date={dados.dados} key={index} className="cursor-pointer ml-5 mb-5 items-center flex flex-col justify-between p-4 w-80 h-80 bg-[rgba(0,0,0,.6)] rounded">
                {
                    dados.dados?.name ? 
                     <div className='flex w-full justify-between items-center'>
                        <span className='text-[#9C83A7] text-sm'>{dados.title} </span>
                        <p className='text-sm text-[#D8CEDE] font-bold'>{dados.dados?.name}</p> 
                    </div>
                    :
                    <div className='flex justify-center items-center'>
                        <p className='text-base text-[#D8CEDE] font-bold'>{dados.title}</p> 
                    </div>
                }


            <div className="flex relative justify-center">
                <Image
                    src={dados.img}
                    alt={dados.alt}
                    width={dados.height}
                    height={dados.height}
                    className="m-auto"
                />
            </div>

            {
                dados.subTitle ?
                <div className='flex justify-between w-full items-center'>
                    <span className='text-[#9C83A7] text-sm'> {dados.subTitle}: </span>
                    <p className='text-sm text-[#D8CEDE] font-bold'>{dados.dados.terrain}</p>
                </div>

                : ''
            }

            </ButtonCard>   

            : <div></div>
        ))}

    </>

    )


}