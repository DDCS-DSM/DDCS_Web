import styled from "styled-components";

export const PhraseWrapper = styled.div`
  margin-bottom: 2.5vh;

  height: 60vh;
  @media ( max-width: 426px ){
    height: 35vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Phrase = styled.p`
  all: unset;

  font-family: "HAN";
  font-size: 3.5vh;
  @media ( max-width: 426px ){
    font-size: 2.5vh;
    width: 90vw;
    text-align: center;
  }
  color: #333;
`;
