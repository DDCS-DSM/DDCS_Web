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
    
    width: 90vw;

    padding: 7.5px 15px;

    border-radius: 10px;

    box-sizing: border-box;

    img{
        width: 20px;
        height: 20px;
    }
`

export const LeftDiv = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 30px;
        height: 30px;
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