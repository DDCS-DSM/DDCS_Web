import styled from "styled-components";

export const Title = styled.div`
  height: 17.5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "HAN";
  font-size: 4vh;
  font-weight: 600;
`;

export const Table = styled.div`
  margin: 0 auto;

  width: 75vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 0.25vh solid #000;
  border-bottom: 0.25vh solid #000;
`;

export const Item = styled.div`
  width: inherit;
  height: 6.5vh;

  display: flex;

  font-family: "HAN";
  font-size: 2.5vh;

  border-bottom: 0.1vh solid #aaa;

  :last-child {
    border-bottom: none;
  }
`;

export const Schema = styled.div`
  width: 15vw;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 0.1vh solid #aaa;
`;

export const Instance = styled.div`
  padding-left: 2vw;

  width: 58vw;

  display: flex;
  justify-content: left;
  align-items: center;
`;

export const Button = styled.div`
  margin: 0 auto;
  margin-top: 6.5vh;

  background-color: #f6f6f6;

  width: 20vh;
  height: 6.5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.5vh;
  font-family: "HAN";

  border-radius: 1.5vh;
  cursor: pointer;

  transition: filter 0.25s;
  }

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.5vh #ddd);
  }
`;
