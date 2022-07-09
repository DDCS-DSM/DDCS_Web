import styled from "styled-components";

export const Image = styled.img`
  position: absolute;

  width: 100vw;
  height: 30vh;

  object-fit: cover;
  filter: brightness(90%) blur(0.1vh);

  @media ( max-width: 426px ){
    height: 25vh;
  }
`;
