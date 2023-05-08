import React from "react";
import "./App.css";

const Personagem = () => {
  const [name, setName] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [birtYear, setBirthYear] = React.useState("");

  React.useEffect(() => {
    let random = Math.round(Math.random() * 20);

    async function fetchPersonagens() {
      let personagem = fetch(`https://swapi.dev/api/people/${random}`);

      personagem
        .then((response) => response.json())
        .then((body) => {
          setName(body.name);
          setBirthYear(body.birth_year);
          console.log(body);
        });
    }

    async function fetchSpecie() {
      let specie = fetch(`https://swapi.dev/api/species/${random}`);

      specie
        .then((response) => response.json())
        .then((data) => {
          setSpecies(data.name);
        });
    }

    fetchPersonagens();
    fetchSpecie();
  }, []);

  return (
    <div>
      <div className="card">
        <h2 className="name">Personagem: {name}</h2>
        <p className="specie">Espécie: {species}</p>
        <p className="birth">Ano de Nascimento: {birtYear}</p>
      </div>
    </div>
  );
};

export default Personagem;
