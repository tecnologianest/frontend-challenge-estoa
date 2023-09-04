import { ButtonBack } from "@/app/components/buttonBack";
import { InputSearch } from "./components/Input";
import Card from "./components/card";
import { tipo } from "./models/tipo";

export default async function Page({ params }: { params: { type: string[] } })  {

  let dados;
  let response;

  switch (params.type[0]) {
    case tipo.PERSONAGEM:

      response = await fetch(`https://swapi.dev/api/people/?page=1`);
      dados = await response.json();
    
      for (const person of dados.results) {
          if (person.species.length > 0) {
              const speciesUrl: string = person.species[0];
              const speciesResponse = await fetch(speciesUrl).then(response => response.json());;
              const speciesData = speciesResponse;
              person.newSpecies = speciesData;
          }
      }
      
      break;

    case tipo.FILMES:
      response = await fetch(`https://swapi.dev/api/films/`);
      dados = await response.json();
    break;

    case tipo.PLANETA: 
      response = await fetch(`https://swapi.dev/api/planets/`);
      dados = await response.json();
    break

    case tipo.NAVES: 
      response = await fetch(`https://swapi.dev/api/starships/`);
      dados = await response.json();
    break

    case tipo.VEICULOS: 
      response = await fetch(`https://swapi.dev/api/vehicles/`);
      dados = await response.json();
    break
  }

    return (
    <>
        <ButtonBack className="mt-3 mr-3"/>

        <main className="p-6 lg:py-4 lg:px-12">

          <InputSearch tipoParams={params.type[0]}/>

          <Card tipoDado={params.type[0]} date={dados}/>

        </main>
    
    </>

    );
}