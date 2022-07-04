import styled from "styled-components";

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
  margin-bottom: 5vh;

  font-family: "HAN";
  font-size: 5vh;
  @media (max-width: 426px) {
    font-size: 20px;
  }
  font-weight: 600;
`;

export const Wrapper = styled.form`
  height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 426px) {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  all: unset;
  background-color: #f6f6f6;

  padding-left: 1.5vh;
  padding-right: 1.5vh;
  margin-bottom: 2vh;

  width: 45vh;
  height: 6vh;

  font-family: "HAN";
  font-size: 2vh;

  border-radius: 1.5vh;

  @media (max-width: 426px) {
    width: 70vw;
    height: 35px;
    margin-bottom: 10px;
    font-size: 11px;
    border-radius: 5px;
  }

  box-sizing: border-box;
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
    border-radius: 10px;
  }

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;
