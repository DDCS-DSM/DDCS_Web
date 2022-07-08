import styled from "styled-components";

export const List = styled.div`

  border-top: 0.25vh solid #000; 

  min-height: 100vh;
  width: 70vw;
  margin: auto;

`

export const Content = styled.div`
    height: 8.5vh;
    border-bottom: 0.1vh solid #ddd; 

    padding: 0 2vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: "HAN";
    font-size: 2.6vh;
    font-weight: 600;

    cursor: pointer;
`

export const Date = styled.span`
    color: #999;
`