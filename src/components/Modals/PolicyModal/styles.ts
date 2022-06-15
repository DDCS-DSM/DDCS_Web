import styled from "styled-components";
import { checkmark } from "../../../assets/images";

export const Filter = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export const Background = styled.div`
  background-color: #fff;

  width: 60vh;
  @media (max-width: 426px) {
    width: 90vw;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.5vh;
  z-index: 2;
`;

export const Close = styled.div`
  position: absolute;

  margin-right: 54vh;
  margin-top: 1vh;
  @media (max-width: 426px) {
    margin-right: 80vw;
  }

  font-family: "HAN";
  font-size: 2.25vh;
  font-weight: 100;

  cursor: pointer;
`;

export const Title = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;

  font-family: "HAN";
  font-size: 5vh;
  font-weight: 600;
  @media (max-width: 426px) {
    font-size: 25px;
  }
`;

export const Text = styled.div`
  margin-bottom: 0.4vh;

  font-family: "HAN";
  font-size: 2vh;
  @media (max-width: 426px) {
    font-size: 1.8vh;
  }
`;

export const SchemaWrapper = styled.div`
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 1.25vh;

  width: 54vh;
  @media (max-width: 426px) {
    width: 85vw;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Schema = styled.div`
  width: 18vh;

  color: #a1a1a1;
  font-size: 1.5vh;
  text-align: center;
  @media (max-width: 426px) {
    width: 33vw;
  }
`;

export const InstanceWrapper = styled.div`
  margin: 0 auto;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  margin-bottom: 1.25vh;

  width: 54vh;
  @media (max-width: 426px) {
    width: 90%;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 0.1vh solid #000;
  border-bottom: 0.1vh solid #000;
`;

export const Instance = styled.div`
  width: 18vh;

  font-size: 1.5vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.5vh;
`;
export const Checkbox = styled.input`
  all: unset;

  margin-left: 0.5vh;

  width: 1.75vh;
  height: 1.75vh;

  border: 0.1vh solid #000;
  border-radius: 0.25vh;

  :checked {
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-size: 1.25vh 1.25vh;
    background-position: center;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.4vh;

  font-family: "HAN";
  font-size: 1.75vh;

  @media (max-width: 426px) {
    font-size: 1.3vh;
  }
`;

export const SubText = styled.div`
  color: #a1a1a1;
  font-size: 1.5vh;
  text-align: center;
  @media (max-width: 426px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  all: unset;
  background-color: #f6f6f6;

  margin-top: 5vh;
  margin-bottom: 5vh;

  width: 45vh;
  height: 6vh;

  font-family: "HAN";
  font-size: 2.5vh;
  text-align: center;

  border-radius: 1.5vh;

  @media (max-width: 426px) {
    width: 70vw;
    height: 35px;
    font-size: 12px;
    border-radius: 10px;
  }

  cursor: pointer;
  transition: filter 0.25s;

  :disabled {
    cursor: default;
    filter: brightness(90%);
  }

  :hover:enabled {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;
