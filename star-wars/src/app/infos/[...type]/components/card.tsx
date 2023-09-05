'use client'
import Image from 'next/image';
import { ButtonCard } from './buttonCard';
import { store } from '@/app/store';

import {useEffect, useState} from 'react'
import { Button } from './button';
import { tipo } from '../models/tipo';

type Dados = {
    date: any
    tipoDado: string
}

interface Infos {
    title: string;
    info: string;
    description: string;
    url: string;
}

export default function Card({date, tipoDado}: Dados)  {

    const [dados, setDados] = useState<any>(date);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const updatedState: any = store.getState().infoPeopleReducer;
            setDados(updatedState);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    function formatDado(type: string, informacoa: any): Infos[] {
        return informacoa.results?.map((dados: any) => {
          const commonFields = {
            title: dados.name || dados.title,
            url: dados.url,
          };
      
          switch (type) {
            case tipo.FILMES:
              return {
                ...commonFields,
                info: 'Diretor',
                description: dados.director,
              };
      
            case tipo.PERSONAGEM:
              return {
                ...commonFields,
                info: dados?.newSpecies?.name ? 'Espécie' : '-----',
                description: dados.birth_year,
              };
      
            case tipo.PLANETA:
              return {
                ...commonFields,
                info: 'População',
                description: dados.population,
              };
      
            case tipo.NAVES:
            case tipo.VEICULOS:
              return {
                ...commonFields,
                info: 'Passageiros',
                description: dados.passengers,
              };
      
            default:
              return {};
          }
        });
    }

    const info: Infos[] = formatDado(tipoDado, dados)

    return(
        <>
        <div className='flex flex-wrap justify-center gap-5'>
            {info?.map((personagem: Infos, i: number) => (
            <div className="flex justify-center py-5" key={i}>
                <ButtonCard
                    tipo={tipoDado}
                    url={personagem.url}
                    className="cursor-pointer flex flex-col justify-between p-4 w-60 h-80 bg-[rgba(0,0,0,.6)] rounded"
                >
                <p className='font-bold text-xl'>{personagem.title}</p>

                <div className="flex relative w-full justify-center">
                    <div className="w-1 h-3/4 absolute rounded left-9 shadow-md top-0 bg-purple-700"></div>
                    <div className="w-1 h-1/2 absolute rounded left-7 bottom-5 bg-red-700"></div>
                    <Image
                        src="/assets/horz-line-chart.svg"
                        alt="Imagem para o card de linhas horizontais"
                        width={160}
                        height={200}
                    />
                </div>

                <div className="flex justify-between w-full items-center">
                    <p>{personagem?.info}</p>
                    <p>{personagem.description}</p>
                </div>
                </ButtonCard>
            </div>
            ))}
        </div>

        <div className='w-full flex justify-center gap-5'>
            {dados.previous && (
            <Button route={dados.previous}>
                Voltar
            </Button>
            )}

            {dados.next && (
            <Button route={dados.next}>
                Proximo
            </Button>
            )}
        </div>
        </>
    )

}