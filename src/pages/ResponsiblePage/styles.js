import styled from 'styled-components'

export const Wrapper = styled.div `
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    min-height: calc(100vh - 195px);
    overflow: hidden;
    text-align: center;

    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        text-align: left;
        margin-bottom: 20px;

        @media only screen and (max-width:900px){
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    }

`   