import styled from "styled-components";

export const List = styled.div`
  height: 60vw;
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
  justify-content: right;
  align-items: center;

  @media ( max-width: 426px ){
    justify-content: normal;
  }

  border-radius: 1.5vh;
  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(97%) drop-shadow(0 0 0.25vh #ddd);
  }
`;

export const PackageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Instance = styled.div`
  transform: translateY(-0.2vh);
  width: 22.5vw;

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
  width: 4.5vh;
  height: 4.5vh;
  margin: 0 3vh;
  @media ( max-width: 426px ){
    width: 3.5vh;
    height: 3.5vh;
    margin: 0 2vh;
  }
`;

export const Delete = styled.img`
  width: 3.5vh;
  height: 3.5vh;
  margin: 0 0.8vh;
  @media ( max-width: 426px ){
    width: 2.5vh;
    height: 2.5vh;
    margin: 0 4vh;
  }
`
