import styled from 'styled-components'

export const Package = styled.div`
    
    display: flex;
    
    margin-top: 2vw;
    border: 1px solid #eee;
    padding: 1vw;

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
    }

    @media ( max-width: 425px ){
        padding: 1.5vw 3vw;
        margin-top: 3vw;
        input{
            font-size: 12px;
            height: 8vw;
            padding: 0 2vw;
        }
    }
`