import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #fcfcfc;
    color: black;

    text-decoration: none;
    box-shadow: 0.2vw 0.2vw 0.3vw 0.2vw rgba(0, 0, 0, 0.2);
    cursor: pointer;
    
    width: 85vw;

    padding: 1.5vw 3vw;

    border-radius: 2vw;

    img{
        width: 5vw;
        height: 5vw;
    }
`

export const LeftDiv = styled.div`
    display: flex;
    align-items: center;

    img{
        margin-right: 3vw;
    }
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-size: 2.5vh;
`

export const SubTitle = styled.div`
    font-size: 1.2vh;
`