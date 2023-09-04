import CardPerson from '../components/card-person';
import { actions } from '@/app/store/infos/info-slice';
import { store } from '@/app/store';
import { ModalCard } from '../components/modal';
import { tipo } from '../../[...type]/models/tipo';
import Card from '../components/card';
import { ButtonBack } from '@/app/components/buttonBack';

export default async function Details ({ params }: { params: { Details: string[] } }) {

   let dados: any = [];
   let response;

   switch (params.Details[0]) {
       case tipo.PERSONAGEM:
           response = await fetch(`https://swapi.dev/api/people/${params.Details[1]}`);
           dados = await response.json();
       
           const filmesResponses = await Promise.all(dados.films.map((filme: string) => fetch(filme).then(response => response.json())));
           const speciesResponse: any = await Promise.all(dados.species.map((species: string) => fetch(species).then(response => response.json())));
           const starshipsResponse: any = await Promise.all(dados.starships.map((starships: string) => fetch(starships).then(response => response.json())));
           const vehiclesResponse: any = await Promise.all(dados.vehicles.map((vehicles: string) => fetch(vehicles).then(response => response.json())));
           const homeworldResponse = await fetch(dados.homeworld);
           dados.newSpecies = speciesResponse
           dados.newFilms = filmesResponses;
           dados.newStarships = starshipsResponse
           dados.newVehicles = vehiclesResponse
           dados.newHomeWorld = await homeworldResponse.json();
           dados.films = []; 

       break;
       
       case tipo.FILMES: 
           response = await fetch(`https://swapi.dev/api/films/${params.Details[1]}`);
           dados = await response.json();

           const filmStarshipsResponse: any = await Promise.all(dados.starships.map((starships: string) => fetch(starships).then(response => response.json())));
           const filmVehiclesResponse: any = await Promise.all(dados.vehicles.map((vehicles: string) => fetch(vehicles).then(response => response.json())));
           const filmPeopleResponse: any = await Promise.all(dados.characters.map((characters: string) => fetch(characters).then(response => response.json())));
           dados.films = [{
            title: dados.title,
            opening_crawl: dados.opening_crawl,
            director: dados.director,
            producer: dados.producer,
            url: dados.url,
           }];
           dados.newStarships = filmStarshipsResponse
           dados.newVehicles = filmVehiclesResponse
           dados.newPeoples = filmPeopleResponse           

       break;
   
       case tipo.PLANETA:

       response = await fetch(`https://swapi.dev/api/planets/${params.Details[1]}`);
       dados = await response.json();

       const planetaPeopleResponse: any = await Promise.all(dados.residents.map((residents: string) => fetch(residents).then(response => response.json())));
       const planetaFilmesResponses = await Promise.all(dados.films.map((filme: string) => fetch(filme).then(response => response.json())));
       
       dados.newPeoples = planetaPeopleResponse           
       dados.films = planetaFilmesResponses;
       dados.newHomeWorld = {
        name: dados.name,
        terrain: dados.terrain,
        population: dados.population,
        climate: dados.climate,
        url: dados.url
       }



       break;
   
       case tipo.NAVES:
            response = await fetch(`https://swapi.dev/api/starships/${params.Details[1]}`);
            dados = await response.json();

            const navesFilmesResponses = await Promise.all(dados.films.map((filme: string) => fetch(filme).then(response => response.json())));
            const navesPilotosResponses = await Promise.all(dados.pilots?.map((pilots: string) => fetch(pilots).then(response => response.json())));
            dados.films = navesFilmesResponses;
            dados.newPeoples = navesPilotosResponses
            dados.newStarships = [
                {
                    name: dados.name,
                    model: dados.model,
                    starship_class: dados.starship_class 
                }
            ]

        break;

        case tipo.VEICULOS:
            response = await fetch(`https://swapi.dev/api/vehicles/${params.Details[1]}`);
            dados = await response.json();

            const veiculosFilmesResponses = await Promise.all(dados.films?.map((filme: string) => fetch(filme).then(response => response.json())));
            const veiculosPilotosResponses = await Promise.all(dados.pilots?.map((pilots: string) => fetch(pilots).then(response => response.json())));
            dados.films = veiculosFilmesResponses;
            dados.newPeoples = veiculosPilotosResponses
            dados.newVehicles = [
                {
                    name: dados.name,
                    model: dados.model,
                    starship_class: dados.vehicle_class 
                }
            ]

        break;
    }

    store.dispatch(actions.addInfosPerson(dados))
        
    return (

        <main className="p-6">
            <div className='pb-5'>
                <ButtonBack/>
            </div>


        <div className='sm:flex sm:flex-row-reverse h-full justify-center gap-10'>

            {
                params.Details[0] == tipo.PERSONAGEM ?
                <div className='w-full max-w-[350px] h-full sm:flex sm:justify-end'>
                    <CardPerson dados={dados}/>
                </div> : ""
            }

            <div className='flex flex-wrap justify-center lg:justify-normal'>

                <Card />

            </div>
        </div>
        <ModalCard/>
        </main>
    )
}