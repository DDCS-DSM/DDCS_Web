import styled from "styled-components";
import { Link } from "react-router-dom";

export const PreHeader = styled.div`
  background-color: #ff5050;

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

  width: 13.25vh;
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
  width: 6vh;
  height: 6vh;
`;

export const Text = styled.div`
  font-family: "COR";
  color: #fff;
  font-size: 4vh;
  line-height: 0.1vh;
`;
