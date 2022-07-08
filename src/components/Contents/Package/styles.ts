import styled from "styled-components";

export const List = styled.div`
  min-height: 70vh;
  margin: 0 auto;
  width: 75vw;
  @media ( max-width: 426px ){
    width: 90vw;
  }
  h2{
    text-align: center;
    margin-top: 10vw;
    font-size: 1.5vw;
    color: #ccc;
    @media ( max-width: 426px ){
      font-size: 5vw;
    }
  }
`

export const Package = styled.div`
  background-color: #f9f9f9;

  margin-top: 3.25vh;

  height: 8vh;

  display: flex;
  align-items: center;

  @media ( max-width: 426px ){
    justify-content: normal;
  }

  border-radius: 1.5vh;
  cursor: pointer;
  transition: filter 0.25s;
`;

export const InstanceDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Instance = styled.div`
  transform: translateY(-0.2vh);
  width: 27.2vh;

  font-family: "HAN";
  font-size: 2.25vh;
  font-weight: 600;
  text-align: center;

  :last-child {
    transform: translateY(-0.1vh);

    font-size: 2vh;
    color: #a1a1a1;
  }

  @media ( max-width: 426px ) {
    font-size: 1.8vh;
  }
`;

export const InstanceInput = styled.input`
  box-sizing: border-box;
  padding: 0 0.5vw;
  width: 18.5vw;
  margin: 0 2vw;
  height: 5vh;
  background: none;
  border: 0;
  border-bottom: 0.25vh solid black;
  font-family: "HAN";
  font-size: 2vh;
  font-weight: 600;
  text-align: center;
  @media ( max-width: 426px ){
    margin: 0;
    font-size: 1.8vh;
  }
`

export const Icon = styled.img`
  position: absolute;
  width: 4.4vh;
  height: 4.4vh;
  margin: 0 2.8vh;
  @media ( max-width: 426px ){
    width: 3.5vh;
    height: 3.5vh;
    margin: 0 2vh;
  }
`;