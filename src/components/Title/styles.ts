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
      margin-top: 2.5vh;
    }
    to {
      opacity: 1;
    }
  }
  animation: fade 1s ease-in-out;
`;

export const Title = styled.div`
  position: relative;

  font-family: "B612";
  font-size: 6vh;
  font-weight: 600;
  color: #fff;

  filter: drop-shadow(0 0.5vh 0.25vh rgba(0, 0, 0, 0.25));
`;

export const SubTitle = styled.div`
  position: relative;

  font-family: "HAN";
  font-size: 4vh;
  color: #eee;

  filter: drop-shadow(0 0.5vh 0.25vh rgba(0, 0, 0, 0.25));
`;
