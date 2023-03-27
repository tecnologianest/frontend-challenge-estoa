import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  width: 90%;
  margin-top: 50px;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 20%;
  border: none;
  background-color: #708090;
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  &:hover {
    background-color: #fff;
    color: #708090;
  }
`;
