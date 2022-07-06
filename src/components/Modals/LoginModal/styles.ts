import styled from "styled-components";
import { checkmark } from "../../../assets/images";

export const CheckboxDiv = styled.div`
  width: 100%;
  margin-top: 2vh;
  margin-bottom: 0.5vh;
  @media (max-width: 426px) {
    margin-top: 5px;
    width: 70vw;
  }
`;

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  height: 3.5vh;
`;
export const Checkbox = styled.input`
  all: unset;

  margin-right: 0.5vh;

  width: 1.75vh;
  height: 1.75vh;

  border: 0.1vh solid #000;
  border-radius: 0.25vh;

  @media (max-width: 426px) {
    width: 9px;
    height: 9px;
    border-radius: 2px;
  }

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
  font-size: 2vh;

  @media (max-width: 426px) {
    font-size: 10px;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 5vh;

  height: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1vh;
  @media (max-width: 426px) {
    height: 26px;
  }
`;

export const Text = styled.div`
  margin-bottom: 0.4vh;

  display: flex;

  font-family: "HAN";
  font-size: 1.8vh;
  @media (max-width: 426px) {
    font-size: 11px;
  }
`;

export const Link = styled.div`
  :first-child {
    margin-left: 0.8vh;
  }

  width: max-content;

  font-family: "HAN";
  font-size: 1.8vh;
  @media (max-width: 426px) {
    font-size: 11px;
  }
  color: blue;

  border-bottom: 0.1vh solid blue;
  cursor: pointer;
`;

export const Button = styled.button`
  all: unset;
  background-color: #f6f6f6;

  margin-bottom: 3vh;

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