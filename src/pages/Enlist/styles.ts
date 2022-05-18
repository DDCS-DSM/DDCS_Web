import styled from 'styled-components'

export const Body = styled.div`
  width: 75vw;
  margin: 0 auto;
  @media ( max-width: 375px ){
    width: 90vw;
  }
`

export const SchemaWrapper = styled.div`
  border-bottom: 0.25vh solid #000; 
`

export const Company = styled.select`
  height: 2.5vw;
  border-radius: 1vh;
  border: 1px solid #ccc;
  outline: 0;
  width: 100%;
  margin-top: 2vw;
  padding: 0vw 0.6vw;
  @media ( max-width: 375px ){
    height: 8vw;
    margin-top: 3vw;
    font-size: 1.4vh;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.div`
  margin: 0 1vh;
  margin-top: 6.5vh;

  background-color: #f6f6f6;

  width: 20vh;
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
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }

  @media ( max-width: 375px ){
    width: 15vh;
    height: 5vh;
    font-size: 2vh;
  }
`