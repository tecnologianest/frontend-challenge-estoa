'use client'
import { store } from '@/app/store';
import { actions } from '@/app/store/infos/info-peoples-slice';
import {ComponentProps} from 'react'


export type ButtonProps = ComponentProps<'button'> & {
    route: string;
    search?: string
}

export function Button({route, search, ...props}: ButtonProps) {

    async function handleClick() {
        let dados;
        if(search) {
            const response = await fetch(`${route}${search}`);
            dados = await response.json();
        } else {
            const response = await fetch(route);
            dados = await response.json();
        }
        for (const person of dados?.results) {
            if (person.species?.length > 0) {
                const speciesUrl: string = person.species[0];
                const speciesResponse = await fetch(speciesUrl).then(response => response.json());;
                const speciesData = speciesResponse;
                person.newSpecies = speciesData;
            }
        }
        store.dispatch(actions.addInfosPerson(dados))
        
    };

    return (
        <button onClick={handleClick} {...props} />
    )

}
