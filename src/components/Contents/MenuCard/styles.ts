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
    
    width: 85%;

    padding: 15px 30px;

    border-radius: 2vw;

    img{
        width: 30px;
        height: 30px;
    }
`

export const LeftDiv = styled.div`
    display: flex;
    align-items: center;

    img{
        margin-right: 15px;
    }
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-size: 15px;
`

export const SubTitle = styled.div`
    font-size: 12px;
`