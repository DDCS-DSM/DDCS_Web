import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: absolute;

  width: 100vw;
  height: 30vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes fade {
    from {
      opacity: 0;
      margin-top: 2.5vh;
    }
    to {
      opacity: 1;
    }
  }
  animation: fade 1s ease-in-out;
`;

export const Title = styled.div`
  font-family: "B612";
  font-size: 6vh;
  font-weight: 600;
  color: #fff;

  filter: drop-shadow(0 0.5vh 0.25vh rgba(0, 0, 0, 0.25));
`;

export const SubTitle = styled.div`
  font-family: "HAN";
  font-size: 4vh;
  color: #eee;

  filter: drop-shadow(0 0.5vh 0.25vh rgba(0, 0, 0, 0.25));
`;

export const PhraseWrapper = styled.div`
  height: 75vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @keyframes fade {
    0% {
      opacity: 0;
      margin-top: 2.5vh;
    }
    50% {
      opacity: 0;
      margin-top: 2.5vh;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fade 1.5s ease-in-out;
`;

export const SubPhraseWrapper = styled.div`
  height: 55vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainPhrase = styled.p`
  display: flex;
  justify-content: center;

  font-family: "HAN";
  font-size: 4vh;
  font-weight: 600;
`;

export const SubPhrase = styled.p`
  font-family: "HAN";
  font-size: 3.5vh;
  color: #333;
`;
