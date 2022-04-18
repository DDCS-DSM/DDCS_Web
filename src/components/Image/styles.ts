import styled from "styled-components";

interface ImageProps {
  index: string;
}

export const Image = styled.img<ImageProps>`
  position: relative;

  ${(props) =>
    props.index === "Banner" &&
    "width: 100vw; height: 30vh; filter: brightness(90%) blur(0.1vh);"}
  ${(props) =>
    props.index === "Bike" &&
    "position: absolute; width: 40vh; height: 32.5vh; bottom: -12.5vh; left: 0;"}

  object-fit: cover;

  z-index: -999;
`;
