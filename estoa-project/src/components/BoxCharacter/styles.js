import styled from "styled-components";

export const BoxCharacterContainer = styled.div`
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #708090;
  border-radius: 10px;
  color: #fff;
`;
export const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-top: 15px;
`;

export const Name = styled.h2`
  font-size: 20px;
  margin-top: 50px;
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Info = styled.div`
  color: #fff;
  font-size: 15px;
  margin-top: 10px;
`;
export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #708090;

  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  &:hover {
    background-color: #708090;
    color: #fff;
  }
`;
