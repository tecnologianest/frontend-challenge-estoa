import { useEffect, useState } from "react";
import BoxCharacter from "../BoxCharacter/boxcharacter";
import * as S from "./styles";
import { MoviesEp } from "../../common/mocks/moviesEp";

const Content = () => {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page === 9) return;
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleSelectClick = (movie) => {
    const resultFilter = data.filter((item) => {
      const exists = item.films.includes(
        `https://swapi.dev/api/films/${movie}/`
      );

      return exists;
    });

    setDataFilter(resultFilter);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
      const { results } = await response.json();
      setData([...data, ...results]);
    };

    fetchData();
  }, [page]);

  return (
    <S.MainContainer>
      {/*Button to filter by Episode*/}
      <S.Filter>
        {MoviesEp.map((item, index) => {
          return (
            <S.FilterButton
              onClick={() => handleSelectClick(item.id)}
              key={index}
            >
              {item.title}
            </S.FilterButton>
          );
        })}
      </S.Filter>

      <S.Grid>
        {(dataFilter.length ? dataFilter : data).map((item, index) => (
          <BoxCharacter
            key={index}
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

      <S.ButtonsContainer>
        <S.Button onClick={handlePrev}>Prev</S.Button>
        <S.Button onClick={handleNext}>Next</S.Button>
      </S.ButtonsContainer>
    </S.MainContainer>
  );
};

export default Content;
