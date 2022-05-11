import styled from "styled-components";

export const Package = styled.div`
  background-color: #f6f6f6;

  margin: 0 auto;
  margin-top: 3.25vh;

  width: 75vw;
  height: 8vh;

  display: flex;
  justify-content: right;
  align-items: center;

  border-radius: 1.5vh;
  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;

export const Instance = styled.div`
  transform: translateY(-0.2vh);
  width: 22.5vw;

  font-family: "HAN";
  font-size: 2.25vh;
  font-weight: 600;
  text-align: center;

  :last-child {
    transform: translateY(-0.1vh);

    font-size: 2vh;
    color: #a1a1a1;
  }
`;

export const Icon = styled.img`
  width: 4.5vh;
  height: 4.5vh;
`;
