import styled from "styled-components";

export const PreHeader = styled.div`

  width: 100%;
  height: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 98%;
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContents = styled.div`
  margin-left: 2vh;

  width: 11.75vh;
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
  width: 4.5vh;
  height: 4.5vh;
`;

export const Text = styled.div`
  :nth-child(2) {
    margin-top: 0.4vh;

    font-family: "B612";
    color: #717171;
    font-size: 3vh;
    font-weight: 600;
  }
  :nth-child(1) {
    margin-bottom: 0.25vh;
    margin-right: 1.75vh;

    font-family: "HAN";
    color: #717171;
    font-size: 2vh;
  }
`;
