import styled from 'styled-components'

export const Body = styled.div`
  width: 75vw;
  margin: 0 auto;
`

export const Company = styled.select`
  display: flex;
  margin: 0 auto;
  width: 75vw;
  margin: 2vw 0;
  height: 2.5vw;
  border-radius: 0.3vw;
  outline: 0;
  :hover{
    cursor: pointer;
  }
`

export const SchemaWrapper = styled.div`
  border-bottom: 0.25vh solid #000;
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
`