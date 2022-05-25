import styled from "styled-components";

export const PreWrapper = styled.div`
  background-color: #f6f6f6;

  margin: 0 auto;

  width: 100vw;
  height: 37.5vh;
  @media ( max-width: 426px ){
    height: 150px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 50vw;
  height: 32.5vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDiv = styled.div`
  height: 135px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
