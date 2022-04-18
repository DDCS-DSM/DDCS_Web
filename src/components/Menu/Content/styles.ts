import styled from "styled-components";

export const Background = styled.img`
  position: absolute;

  width: 25vh;
  height: 32.5vh;

  object-fit: cover;
  border-radius: 1.5vh;

  filter: brightness(75%) drop-shadow(0 0.5vh 0.25vh #333);
`;

export const Wrapper = styled.div`
  width: 25vh;
  height: 32.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  * {
    transition: filter 0.25s;
  }

  :hover * {
    filter: brightness(100%) drop-shadow(0 0.5vh 0.25vh #333);
  }

  margin-right: 15vh;
  :last-child {
    margin-right: 0;
  }
`;

export const Title = styled.div`
  margin-top: 7.5vh;

  font-family: "HCR";
  color: #fff;
  font-size: 3.5vh;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;

  filter: drop-shadow(0 0.5vh 0.25vh #333);
`;

export const SubTitle = styled.div`
  margin-top: 2vh;

  font-family: "HCR";
  color: #ccc;
  font-size: 1.5vh;
  text-align: center;
  word-break: keep-all;

  filter: drop-shadow(0 0.5vh 0.25vh #333);
`;
