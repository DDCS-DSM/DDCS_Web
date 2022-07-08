import styled from "styled-components";

export const Body = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
`

export const Major = styled.div`
    margin-top: 10vh;
`

export const MajorDiv = styled.div`
    display: flex;
    flex-flow: wrap;
`

export const MajorTitle = styled.h1`
    font-family: "HAN";
    margin-bottom: 1vh;
`

export const Developer = styled.div`
    width: 30vw;
    box-sizing: border-box;
    img{
        width: 16vh;
        height: 16vh;
        border-radius: 50%;
        border: 0.3vh solid #aaa;
        object-fit: contain;
    }
    display: flex;
    margin-top: 5vh;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
`

export const Email = styled.span`
    margin-bottom: 0.5vh;
`

export const Name = styled.span`
    font-size: 3vh;
    font-weight: 600;
    font-family: "HAN";
    margin-bottom: 1vh;
`

export const GitHub = styled.a`
    cursor: pointer;
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: inherit; /* 링크의 색상 제거 */
`