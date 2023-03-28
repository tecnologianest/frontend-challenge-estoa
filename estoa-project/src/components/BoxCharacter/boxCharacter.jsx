import * as S from "./styles";
import { useState } from "react";
const BoxCharacter = ({
  gender,
  name,
  height,
  mass,
  haircolor,
  eyecolor,
  byear,
  skincolor,
  world,
  films,
  species,
}) => {
  const [info, setInfo] = useState(false);

  function handleInfo() {
    setInfo(!info);
  }
  return (
    <S.BoxCharacterContainer>
      <S.Name> {name} </S.Name>
      {info ? (
        <S.Infos onClick={handleInfo}>
          <S.Info>Height: {height} </S.Info>
          <S.Info>Mass: {mass} </S.Info>
          <S.Info>Hair color: {haircolor} </S.Info>
          <S.Info>Eye Color: {eyecolor} </S.Info>
          <S.Info> Birth Year: {byear}</S.Info>
          <S.Info>Gender: {gender} </S.Info>
          <S.Info>Skin Color: {skincolor} </S.Info>
          <S.Info>Species: {species} </S.Info>
          <S.Info>World: {world} </S.Info>
        </S.Infos>
      ) : (
        <S.Infos onClick={handleInfo}>
          <S.Info> Birth Year: {byear} </S.Info>
          <S.Button>More Info</S.Button>
        </S.Infos>
      )}
    </S.BoxCharacterContainer>
  );
};
export default BoxCharacter;
