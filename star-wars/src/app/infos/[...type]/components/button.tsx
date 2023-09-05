'use client'
import { store } from '@/app/store';
import { actions } from '@/app/store/infos/info-peoples-slice';
import {ComponentProps} from 'react'


export type ButtonProps = ComponentProps<'button'> & {
    route: string;
    search?: string
}

export function Button({route, search, ...props}: ButtonProps) {

    async function fetchData(route: string, search?: string) {
        try {
          const apiUrl = search ? `${route}${search}` : route;
          const response = await fetch(apiUrl);
          const data = await response.json();
      
          if (data?.results) {
            for (const person of data.results) {
              if (person.species?.length > 0) {
                const speciesUrl: string = person.species[0];
                const speciesResponse = await fetch(speciesUrl);
                const speciesData = await speciesResponse.json();
                person.newSpecies = speciesData;
              }
            }
          }
      
          return data;
        } catch (e) {
          throw new Error(`Erro ao buscar dados`);
        }
      }
      
      async function handleClick() {
        try {
          const dados = await fetchData(route, search);
          store.dispatch(actions.addInfosPerson(dados));
        } catch (error: any) {
          console.error(error.message);
        }
      }

    return (
        <button onClick={handleClick} {...props} />
    )

}
