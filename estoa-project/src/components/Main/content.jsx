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
      setPage(page + 1);
      setLink(`https://swapi.dev/api/people/?page=${page + 1}`);
    };

    const handlePrev = () => {
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

  return (
    <S.MainContainer>
      <S.Grid>
        {data.results.map((item) => (
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
      <Buttons />
    </S.MainContainer>
  );
};

export default Content;
