import styled from "styled-components";

export const PhraseWrapper = styled.div`
  margin-bottom: 10vh;

  height: 45vh;
  @media ( max-width: 426px ){
    height: 30vh;
    margin-bottom: 4vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Phrase = styled.p`
  all: unset;

  font-family: "HAN";
  font-size: 3vh;
  @media ( max-width: 426px ){
    font-size: 2vh;
    width: 90vw;
    text-align: center;
  }
  color: #333;
`;
