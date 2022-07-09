import styled from 'styled-components'

export const Body = styled.div`
  width: 75vw;
  margin: 0 auto;
  @media ( max-width: 426px ){
    width: 90vw;
  }
`

export const SchemaWrapper = styled.div`
  border-bottom: 0.25vh solid #000; 
`

export const Company = styled.select`
  height: 5vh;
  border-radius: 1vh;
  border: 1px solid #ccc;
  outline: 0;
  width: 100%;
  margin-top: 2vw;
  padding: 0vw 0.6vw;
  @media ( max-width: 426px ){
    height: 9vw;
    margin-top: 3vw;
    font-size: 12px;
  }
`

export const List = styled.div`
  min-height: 25vw;
  margin: 0 auto;
  width: 75vw;
  @media ( max-width: 426px ){
    width: 90vw;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.div`
  margin: 0 2vh;
  margin-top: 6.5vh;

  background-color: #f8f8f8;

  width: 30vh;
  height: 6.5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.5vh;
  font-family: "HAN";
  font-weight: 600;

  border-radius: 1.5vh;
  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(97%) drop-shadow(0 0 0.2vh #ddd);
  }

  @media ( max-width: 426px ){
    width: 15vh;
    height: 5vh;
    font-size: 2vh;
  }
`