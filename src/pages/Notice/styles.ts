import styled from "styled-components";

export const List = styled.div`

  border-top: 0.25vh solid #000; 

  min-height: 100vh;
  width: 70vw;
  margin: auto;

`

export const NoticeTitle = styled.div`

  display: flex;
  align-items: center;

  background-color: #f9f9f9;

  border-bottom: 0.1vh solid #555; 

  padding: 1vh 3vh;
  
  font-family: "HAN";
  font-size: 3.2vh;

  @media ( max-width: 426px ){
    font-size: 2.8vh;
  }
` 

export const NoticeInfo = styled.div`
  font-size: 2.8vh;
  padding: 0.3vh 3vh;
  border-bottom: 0.1vh solid #ddd; 
`

export const Content = styled.div`
    padding: 0 2vw;
`

export const Notice = styled.div`
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

export const Body = styled.div`

    border-top: 0.25vh solid #555; 
    border-bottom: 0.25vh solid #555; 

    min-height: 80vh;
    width: 70vw;
    margin: auto;
    margin-top: 10vh;
    @media ( max-width: 426px ){
        width: 90vw;
        margin-top: 5vh;
    }
`

export const Date = styled.span`
    font-size: 2vh;
    color: #666;
`

export const TitleInputDiv = styled.div``

export const ContentTextArea = styled.textarea`
    resize: none;
`