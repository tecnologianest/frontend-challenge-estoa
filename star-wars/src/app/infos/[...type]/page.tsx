import { ButtonBack } from "@/app/components/buttonBack";
import { InputSearch } from "./components/Input";
import Card from "./components/card";
import { tipo } from "./models/tipo";

export default async function Page({ params }: { params: { type: string[] } })  {

  async function fetchDataByType(type: string) {
    const urlMapping = {
      [tipo.PERSONAGEM]: "https://swapi.dev/api/people/?page=1",
      [tipo.FILMES]: "https://swapi.dev/api/films/",
      [tipo.PLANETA]: "https://swapi.dev/api/planets/",
      [tipo.NAVES]: "https://swapi.dev/api/starships/",
      [tipo.VEICULOS]: "https://swapi.dev/api/vehicles/",
    };
  
    const apiUrl = urlMapping[type];
  
    if (!apiUrl) {
      throw new Error("Tipo inválido");
    }
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (type === tipo.PERSONAGEM) {
        for (const person of data.results) {
          if (person.species.length > 0) {
            const speciesUrl: string = person.species[0];
            const speciesResponse = await fetch(speciesUrl);
            const speciesData = await speciesResponse.json();
            person.newSpecies = speciesData;
          }
        }
      }
  
      return data;
    } catch (error) {
      throw new Error(`Erro ao buscar dados`);
    }
  }
  
  const dados = await fetchDataByType(params.type[0]);

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