import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: relative;

  width: 100vw;
  height: 30vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes fade {
    from {
      opacity: 0;
      padding-top: 1.5vh;
    }
    to {
      opacity: 1;
    }
  }
  //animation: fade 1s ease-in-out;
  @media ( max-width: 426px ){
    height: 25vh;
  }
`;

export const Title = styled.div`
  position: relative;

  font-family: "B612";
  font-size: 6vh;
  font-weight: 600;
  color: #fff;

  filter: drop-shadow(0 0.5vh 0.25vh rgba(0, 0, 0, 0.25));

  @media ( max-width: 426px ){
    font-size: 5vh;
  }
`;

export const SubTitle = styled.div`
  position: relative;

  font-family: "HAN";
  font-size: 4vh;
  color: #eee;

  filter: drop-shadow(0 0.5vh 0.25vh rgba(0, 0, 0, 0.25));

  @media ( max-width: 426px ){
    font-size: 3.2vh;
  }
`;
