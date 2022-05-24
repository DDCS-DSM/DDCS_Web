import styled from "styled-components";

export const PreWrapper = styled.div`
  background-color: #f6f6f6;

  margin: 0 auto;

  width: 100vw;
  height: 37.5vh;
  @media ( max-width: 426px ){
    height: 120px;
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
  height: 125px;
  padding: 3.5vh 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
