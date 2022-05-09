import styled from "styled-components";

export const Footer = styled.div`
  background-color: #f6f6f6;

  margin-top: 6.5vh;

  width: 100%;
  height: 20vh;

  display: flex;
  align-items: flex-start;
`;

export const Table = styled.div`
  margin-top: 1vh;
  margin-left: 1vh;

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
  font-size: 1.5vh;
  text-align: center;

  border-bottom: 0.1vh solid #000;
`;

export const InstanceWrapper = styled.div`
  display: flex;
  flex-direction: row;

  span {
    width: 12.5vw;

    display: flex;
    flex-direction: column;
  }
`;

export const Instance = styled.div`
  font-family: "HAN";
  font-size: 1.5vh;
  text-align: center;
`;
