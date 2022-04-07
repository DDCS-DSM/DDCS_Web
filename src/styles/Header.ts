import styled from "styled-components";
import { Link } from "react-router-dom";

export const PreHeader = styled.div`
  background-color: white;

  width: 100%;
  height: 8vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: inherit;
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContents = styled(Link)`
  margin-left: 2vh;

  width: 13.75vh;
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: drop-shadow(0 0 0.5vh #fff);
  }
`;

export const RightContents = styled.div`
  margin-right: 2vh;

  width: max-content;
  height: inherit;

  display: flex;
  justify-content: right;
  align-items: center;

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: drop-shadow(0 0 0.5vh #fff);
  }
`;

export const Icon = styled.img`
  width: 5vh;
  height: 5vh;
`;

export const Text = styled.div`
  font-family: "INF";
  color: #717171;
  font-size: 4vh;
`;
