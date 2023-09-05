import CardPerson from '../components/card-person';
import Card from '../components/card';
import { RouteMapping } from '../../urls';
import { ButtonBack } from '@/app/components/buttonBack';
import { ModalCard } from '../components/modal';
import { actions } from '@/app/store/infos/info-slice';
import { store } from '@/app/store';
import { tipo } from '../../[...type]/models/tipo';
import Alert from '../components/alert';

export default async function Details ({ params }: { params: { Details: string[] } }) {

    async function fetchData(url: string) {
        return fetch(url).then((response) => response.json())
    }
  
    async function fetchAndFormatDetails(type: string, id: string) {
        const apiUrl = `${RouteMapping[type] || ""}${id}`;
        const details = await fetchData(apiUrl);
   
        switch  (type)  {
        case tipo.PERSONAGEM:
             const  [ films, species, starships, vehicles, homeworld] : any  =[
                await Promise.all(details.films.map((url: string) => fetchData(url))),
                await Promise.all(details.species.map((url: string) => fetchData(url))),
                await Promise.all(details.starships.map((url: string) => fetchData(url))),
                await Promise.all(details.vehicles.map((url: string) => fetchData(url))),
                await fetch(details?.homeworld).then((response) => response.json())
    
            ];
    
            details.newSpecies = species;
            details.newFilms = films;
            details.newStarships = starships;
            details.newVehicles = vehicles;
            details.newHomeWorld = [homeworld];
            details.films = [];
            break;
    
        case tipo.FILMES:

            const [filmStarships, filmVehicles, filmPeople] = [
                await Promise.all(details.starships.map((url: string) => fetchData(url))),
                await Promise.all(details.vehicles.map((url: string) => fetchData(url))),
                await Promise.all(details.characters.map((url: string) => fetchData(url))),
            ];
            details.films = [
            {
                title: details.title,
                opening_crawl: details.opening_crawl,
                director: details.director,
                producer: details.producer,
                url: details.url,
            },
            ];
            details.newStarships = filmStarships;
            details.newVehicles = filmVehicles;
            details.newPeoples = filmPeople;
            break;
    
        case tipo.PLANETA:
            const [planetaPeople, planetaFilmes] = [
                await Promise.all(details.residents.map((url: string) => fetchData(url))),
                await Promise.all(details.films.map((url: string) => fetchData(url))),

            ];
    
            details.newPeoples = planetaPeople;
            details.films = planetaFilmes;
            details.newHomeWorld = [{
            name: details.name,
            terrain: details.terrain,
            population: details.population,
            climate: details.climate,
            url: details.url,
            }];
            break;
    
        case tipo.NAVES:
            const [navesFilmes, navesPilotos] = [
                await Promise.all(details.films.map((url: string) => fetchData(url))),
                await Promise.all(details.pilots?.map((url: string) => fetchData(url))),

            ]; 

            details.films = navesFilmes;
            details.newPeoples = navesPilotos;
            details.newStarships = [
            {
                name: details.name,
                model: details.model,
                starship_class: details.starship_class,
            },
            ];
            break;
    
        case tipo.VEICULOS:
        if(details.detail) return details
        const [veiculosFilmes, veiculosPilotos] = [
                await Promise.all(details.films.map((url: string) => fetchData(url))),
                await Promise.all(details.pilots?.map((url: string) => fetchData(url))),

            ];

            details.films = veiculosFilmes;
            details.newPeoples = veiculosPilotos;
            details.newVehicles = [
            {
                name: details.name,
                model: details.model,
                starship_class: details.vehicle_class,
            },
            ];
            break;
    
        default:
            console.error("Tipo de parâmetro inválido:", type);
            break;
        }
    
        return details;
    }

    const dados = await fetchAndFormatDetails(params.Details[0], params.Details[1]);
    store.dispatch(actions.addInfosPerson(dados))
        
    return (

        <main className="p-6">
            <div className='pb-5'>
                <ButtonBack/>
            </div>

            {
                dados?.detail ? (<Alert message='Não encontramos nada sobre o veiculo, tente outro' /> ): null
            }

        <div className={`${ params.Details[0] == tipo.PERSONAGEM ? "justify-between" : "justify-center"} sm:flex sm:flex-row-reverse h-full gap-10`}>
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