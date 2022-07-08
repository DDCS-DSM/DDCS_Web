import styled from 'styled-components'

export const Package = styled.div`
    
    display: flex;
    align-items: center;
    
    margin-top: 4vh;
    height: 5vh;

    span{
        font-size: 3vh;
        font-family: "HAN"
        margin-top: 2vh;
        padding-right: 1vw;
    }

    input{
        height: 5vh;
        box-sizing: border-box;
        border: 0;
        border-bottom: 0.2vh solid black;
        outline: 0;
        width: 100%;
    }

    @media ( max-width: 425px ){
        padding: 1.5vw 3vw;
        padding-right: 0; 
        margin-top: 3vw;
        input{
            font-size: 12px;
            height: 8vw;
            padding: 0 2vw;
        }
    }
`