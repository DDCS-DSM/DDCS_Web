import styled from "styled-components";

export const Image = styled.img`
  position: absolute;
  left: 0;
  transform: translateY(-35vh);

  width: 40vh;
  height: 32.5vh;

  z-index: -999;
  object-fit: cover;

  filter: opacity(50%);
`;
