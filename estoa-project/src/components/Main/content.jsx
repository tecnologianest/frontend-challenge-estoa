import { useEffect, useState } from "react";
import BoxCharacter from "../BoxCharacter/boxcharacter";
import * as S from "./content";
const Content = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [link, setLink] = useState("https://swapi.dev/api/people");

  const [films, setFilms] = useState([]);
  const [homeWorld, setHomeWorld] = useState({});

  const Buttons = () => {
    const handleNext = () => {
      if (page === 9) return;
      setPage(page + 1);
      setLink(`https://swapi.dev/api/people/?page=${page + 1}`);
    };

    const handlePrev = () => {
      if (page === 1) return;

      setPage(page - 1);
      setLink(`https://swapi.dev/api/people/?page=${page - 1}`);
    };

    return (
      <S.ButtonsContainer>
        <S.Button onClick={handlePrev}>Prev</S.Button>
        <S.Button onClick={handleNext}>Next</S.Button>
      </S.ButtonsContainer>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(link);
      const data = await response.json();
      setData(data);
    };
    fetchData();
    console.log(data + "data");
  }, [link]);
  useEffect(() => {
    const fetchHomeWorld = async () => {
      const response = await fetch(data.homeworld);
      const data = await response.json();
      setHomeWorld(data);
    };
    fetchHomeWorld();
    console.log(homeWorld + "homeworld");
  }, [data.homeworld]);
  useEffect(() => {
    const fetchFilms = async () => {
      const response = await fetch(data.films);
      const data = await response.json();
      setFilms(data);
    };
    fetchFilms();
    console.log(films + "films");
  }, [data.films]);
  function filterByMovie({ movie }) {
    if (!movie) {
      setData({ ...data, results: data.results });
      return;
    }
    const filtered = data.results.filter((character) => {
      return character.films.includes(`https://swapi.dev/api/films/${movie}/`);
    });
    setData({ ...data, results: filtered });
  }

  return (
    <S.MainContainer>
      {filterByMovie && (
        <S.Filter>
          <S.FilterButton onClick={() => filterByMovie({ movie: 1 })}>
            Episode I
          </S.FilterButton>
          <S.FilterButton onClick={() => filterByMovie({ movie: 2 })}>
            Episode II
          </S.FilterButton>
          <S.FilterButton onClick={() => filterByMovie({ movie: 3 })}>
            Episode III
          </S.FilterButton>
          <S.FilterButton onClick={() => filterByMovie({ movie: 4 })}>
            Episode IV
          </S.FilterButton>

          <S.FilterButton onClick={() => filterByMovie({ movie: 5 })}>
            Episode V
          </S.FilterButton>
          <S.FilterButton onClick={() => filterByMovie({ movie: 6 })}>
            Episode VI
          </S.FilterButton>

          <S.FilterButton onClick={() => filterByMovie({ movie: 7 })}>
            Episode VII
          </S.FilterButton>
        </S.Filter>
      )}
      {filterByMovie ? (
        <S.Grid>
          {filterByMovie &&
            data.results &&
            data.results.map((item) => (
              <BoxCharacter
                key={item.name}
                name={item.name}
                gender={item.gender}
                height={item.height}
                mass={item.mass}
                haircolor={item.hair_color}
                eyecolor={item.eye_color}
                byear={item.birth_year}
              />
            ))}
        </S.Grid>
      ) : (
        <S.Grid>
          {data.results &&
            data.results.map((item) => (
              <BoxCharacter
                key={item.name}
                name={item.name}
                gender={item.gender}
                height={item.height}
                mass={item.mass}
                haircolor={item.hair_color}
                eyecolor={item.eye_color}
                byear={item.birth_year}
              />
            ))}
        </S.Grid>
      )}
      <Buttons />
    </S.MainContainer>
  );
};

export default Content;
