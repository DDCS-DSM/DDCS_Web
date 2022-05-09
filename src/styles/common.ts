import styled from 'styled-components'

export const Title = styled.div`
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "HAN";
  font-size: 4vh;
  font-weight: 600;
`;

export const SchemaWrapper = styled.div`
  margin: 0 auto;

  width: 75vw;
  height: 6.5vh;

  display: flex;
  justify-content: right;
  align-items: center;

  border-bottom: 0.25vh solid #000;
`;

export const Schema = styled.div`
  width: 22.5vw;

  font-family: "HAN";
  font-size: 2.25vh;
  text-align: center;
`;

export const Button = styled.div`
  margin: 0 auto;
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
`;