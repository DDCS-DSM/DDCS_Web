import styled from "styled-components";

export const Banner = styled.img`
  position: relative;

  width: 100vw;
  height: 30vh;

  object-fit: cover;

  z-index: -1;
  filter: brightness(90%) blur(0.1vh);
`;

export const Wrapper = styled.div`
  margin-top: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  filter: brightness(80%) opacity(20%);
`;

export const Icon = styled.img`
  width: 36vh;
  height: 36vh;
`;

export const Text = styled.div`
  font-family: "HAN";
  font-size: 6vh;
  color: #eee;
`;

export const TitleWrapper = styled.div`
  position: absolute;

  width: 100vw;
  height: 30vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
