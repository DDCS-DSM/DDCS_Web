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

interface CheckProps {
  down?: number
}

export const Check = styled.div<CheckProps>`

  position: absolute;
  margin-top: ${props => props.down ? `${props.down}vh` : 0};
  margin-left: 35vh;
  @media (max-width: 426px) {
    margin-right: 2vw;
  }

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

export const Button = styled.button`
  all: unset;
  background-color: #f6f6f6;

  margin-bottom: 6vh;

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
