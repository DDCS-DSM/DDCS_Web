import styled from "styled-components";
import { download } from "../../../assets/images";

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
    width: 80%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.5vh;
  z-index: 2;
`;

export const Close = styled.div`

  width:  100%;

  margin-left: 4vh;
  margin-top: 2vh;

  font-family: "HAN";
  font-size: 2.25vh;
  font-weight: 100;

  @media (max-width: 426px) {
    margin-left: 20px;
    margin-top: 5px;
    font-size: 20px;
  }

  cursor: pointer;
`;

export const Title = styled.div`
  margin-top: 5vh;
  margin-bottom: 3vh;

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

  width: 45vh;

  @media (max-width: 426px) {
    margin-bottom: 2vh;
  }
`;

export const UploadFileWrapper = styled.div`
  display: flex;
  @media (max-width: 426px) {
    width: 70vw;
    border-radius: 10px;
  }
`;

export const UploadFileInput = styled.input`
  position: absolute;

  display: none;
  @media (max-width: 426px) {
    width: 70vw;
    font-size: 12px;
  }
`;

export const UploadFileLabel = styled.label`
  all: unset;

  background-color: #f6f6f6;
  background-image: url(${download});
  background-repeat: no-repeat;
  background-size: 7.5vh 7.5vh;
  background-position: 18.75vh 3.5vh;

  padding-top: 11.5vh;
  margin-bottom: 3vh;

  width: 45vh;
  height: 18vh;
  @media (max-width: 426px) {
    background-size: 30px;
    background-position: 50% 20px;
    width: 100%;
    height: 100px;
  }

  color: #d0d0d0;
  font-family: "HAN";
  font-size: 2vh;
  text-align: center;

  border-radius: 1.5vh;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Input = styled.input`
  all: unset;
  background-color: #f6f6f6;

  padding: 0 1.5vh;
  margin-bottom: 3vh;

  width: 45vh;
  height: 6vh;

  font-family: "HAN";
  font-size: 2vh;

  border-radius: 1.5vh;
  box-sizing: border-box;

  @media (max-width: 426px) {
    margin-bottom: 2.5vh;
    width: 70vw;
    height: 35px;
    font-size: 10px;
    border-radius: 10px;
    padding: 2.5px 10px;
  }
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

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }

  @media (max-width: 426px) {
    width: 70vw;
    height: 35px;
    font-size: 12px;
    margin-bottom: 20px;
    border-radius: 10px;
  }

`;

export const TextWrapper = styled.div`
  margin-bottom: 5vh;

  height: 7vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  margin-bottom: 0.4vh;

  display: flex;

  font-family: "HAN";
  font-size: 2vh;
  @media (max-width: 426px) {
    font-size: 1.3vh;
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
    font-size: 1.3vh;
  }
  color: blue;

  border-bottom: 0.1vh solid blue;
  cursor: pointer;
`;