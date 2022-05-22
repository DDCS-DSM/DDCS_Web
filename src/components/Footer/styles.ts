import styled from "styled-components";

export const Footer = styled.div`
  background-color: #f6f6f6;

  margin-top: 15vh;

  width: 100%;
  height: 25vh;

  display: flex;
  align-items: flex-start;
  @media ( max-width: 375px ){
    margin-top: 5vh;
    height: 18vh;
  }
`;

export const Table = styled.div`
  margin-top: 3.5vh;
  margin-left: 1.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SchemaWrapper = styled.div`
  display: flex;
`;

export const Schema = styled.div`
  padding-bottom: 1vh;

  margin-left: 1.25vw;
  margin-right: 1.25vw;
  margin-bottom: 1vh;
  width: 10vw;

  font-family: "HAN";
  font-size: 2.2vh;
  font-weight: bold;
  text-align: center;

  @media ( max-width: 375px ){
    width: 17vw;
    font-size: 1.6vh;
  }

  border-bottom: 0.2vh solid #000;
`;

export const InstanceWrapper = styled.div`
  display: flex;
  flex-direction: row;

  span {
    justify-content: normal;
    width: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const Instance = styled.div`
  font-family: "HAN";
  font-size: 2vh;
  text-align: center;
  width: 10vw;
  
  margin-left: 1.25vw;
  margin-right: 1.25vw;

  @media ( max-width: 375px ){
    font-size: 1.5vh;
    margin-left: 1.25vw;
    margin-right: 1.25vw;
    width: 17vw;
    text-align: center;
  }
`;
