import styled from "styled-components";

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
  @media (max-width: 426px) {
    font-size: 4vh;
  }
  font-weight: 600;
`;

export const Wrapper = styled.form`
  height: 72.5vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Input = styled.input`
  all: unset;
  background-color: #f6f6f6;

  padding-left: 1.5vh;
  padding-right: 1.5vh;

  width: 42vh;
  height: 6vh;

  font-family: "HAN";
  font-size: 2vh;

  border-radius: 1.5vh;

  :nth-child(3) {
    width: 37vh;
    padding-right: 6vh;
  }
`;

export const VerifyEmail = styled.div`
  position: absolute;

  margin-left: 36vh;
  margin-bottom: 27.5vh;

  width: 8vh;
  height: 6vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "HAN";
  font-size: 1.5vh;

  cursor: pointer;
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
