import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 2vh;

  width: 20vh;
  height: max-content;

  z-index: 1;
`;

export const Background = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);

  margin-top: 10vh;
  transform: translateY(50%);

  width: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border: 1px solid black;
`;

export const Content = styled.div`
  background-color: #fff;

  width: 100%;
  height: 5vh;
  padding-left: 2vh;

  display: flex;
  align-items: center;

  font-family: "HAN";
  font-size: 2.25vh;
  font-weight: 600;
  color: #000;
  text-decoration: none;

  box-sizing: border-box;
  border-bottom: 0.1vh solid #ddd;
  z-index: 2;
  transition: filter 0.1s;
  cursor: pointer;

  img{
    margin-top: 0.3vh;
    weight: 2.3vh;
    height: 2.3vh;
    margin-right: 1vh;
  }

  :last-child {
    border-bottom: 0;
  }

  :hover {
    filter: brightness(90%);
  }
`;
