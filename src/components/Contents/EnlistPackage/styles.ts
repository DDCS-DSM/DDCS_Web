import styled from 'styled-components'

export const Package = styled.div`
    
    display: flex;
    flex-direction: wrap;
    
    padding: 1.5vw 2vw;

    background-color: #F9F9F9;

    border-radius: 0.5vw;

    input, select{
        box-sizing: border-box;
        padding: 0vw 0.6vw;
        height: 2.5vw;
        border-radius: 0.2vw;
        outline: 0;
    }

    input{
        width: 45vw;
    }

    select{
        width: 20vw;
    }

    div{
        display: flex;
        justify-content: space-between;
    }
`