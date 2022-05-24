import styled from "styled-components";
import { checkmark } from "../../../assets/images";

export const Filter = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export const Background = styled.div`
  background-color: #fff;

  width: 60vh;
  @media (max-width: 426px) {
    width: 80%;
  }

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.5vh;
  z-index: 2;
`;

export const Close = styled.div`
  position: absolute;

  width: 100%;

  margin-left: 4vh;
  margin-top: 2vh;

  @media (max-width: 426px) {
    margin-left: 20px;
    margin-top: 10px;
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
  @media (max-width: 426px) {
    font-size: 20px;
  }
  font-weight: 600;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5vh;

  @media (max-width: 426px) {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  all: unset;
  background-color: #f6f6f6;

  padding-left: 1.5vh;
  padding-right: 1.5vh;
  margin-bottom: 5vh;

  width: 45vh;
  height: 6vh;

  font-family: "HAN";
  font-size: 2vh;

  border-radius: 1.5vh;

  @media (max-width: 426px) {
    width: 70vw;
    height: 35px;
    margin-bottom: 15px;
    font-size: 11px;
    border-radius: 5px;
  }

  box-sizing: border-box;
`;

export const CheckboxDiv = styled.div`
  width: 100%;
  @media (max-width: 426px) {
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

export const Button = styled.button`
  all: unset;
  background-color: #f6f6f6;

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
    margin-bottom: 20px;
  }

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 5vh;

  height: 7vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 426px) {
    height: 26px;
  }
`;

export const Text = styled.div`
  margin-bottom: 0.4vh;

  display: flex;

  font-family: "HAN";
  font-size: 2vh;
  @media (max-width: 426px) {
    font-size: 11px;
  }
`;

export const Link = styled.div`
  margin-bottom: 0.4vh;
  :first-child {
    margin-left: 0.8vh;
  }

  width: max-content;

  font-family: "HAN";
  font-size: 2vh;
  @media (max-width: 426px) {
    font-size: 12px;
  }
  color: blue;

  border-bottom: 0.1vh solid blue;
  cursor: pointer;
`;
