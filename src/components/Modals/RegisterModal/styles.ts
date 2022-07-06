import styled from "styled-components";

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

  @media (max-width: 426px) {
    width: 72vw;
    font-size: 12px;
    height: 40px;
  }
`;

interface downPorps {
  down?: number;
  check?: boolean;
}

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 426px) {
    width: 80vw;
  }
`;

export const Check = styled.div<downPorps>`

  color: ${props => props.check ? "blue" : "black"};

  margin-bottom: ${(props) => props.down ? 70 - props.down : 70}vh;
  margin-left: 35vh;
  
  position: absolute;

  width: 8vh;
  height: 6vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "HAN";
  font-size: 1.5vh;

  cursor: pointer;

  @media (max-width: 426px) {
    font-size: 10px;
    margin-left: 56vw;
  }
`