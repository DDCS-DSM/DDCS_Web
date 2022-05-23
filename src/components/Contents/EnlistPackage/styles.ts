import styled from 'styled-components'

export const Package = styled.div`
    
    display: flex;
    
    margin-top: 2vw;
    border: 1px solid #eee;
    padding-left: 1.5vw;

    background-color: #F9F9F9;

    border-radius: 1vh;

    input{
        box-sizing: border-box;
        padding: 0 0.6vw;
        height: 2.5vw;
        border-radius: 0.5vh;
        border: 1px solid #ccc;
        outline: 0;
        width: 100%;
        margin: 1.5vw 0;
    }

    @media ( max-width: 425px ){
        padding: 1.5vw 3vw;
        padding-right: 0; 
        margin-top: 3vw;
        input{
            font-size: 1.4vh;
            height: 8vw;
            padding: 0 2vw;
        }
    }
`
export const Close = styled.div`
    text-align: center;
    @media ( max-width: 425px ){
        width: 3vw;
        font-size: 3vw;
        padding: 0 1.5vw;
    }
`