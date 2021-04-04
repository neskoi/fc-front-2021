import styled from 'styled-components';
const {BASE_URL}  = require('../../constants/URLs');

export const Wrapper = styled.div `
    width: 100%;
    background-color: var(--white);
    transition: all 0.6s ease;
    overflow: hidden;
    background-image: url('${BASE_URL}/background/background-texture.jpg');
    
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .icon img {
        position: absolute;
        top: 10px;
        left: -40px;
        height: 29px;
        width: 29px;
    }

    .title{
        font-size: 30px;
        color: var(--white);
        font-family: 'logoFont';
    }

`

export const Splash = styled.div`
    position: relative;
    height: 469px;
    width: 100%;
    
    div.img{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        filter: saturate(2) brightness(60%);
        background-image: url('${BASE_URL}/background/background_theme.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: -0px;
    }   

    div.container{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    span.phrase{
        height: 40px;
        width: 100%;
        display: flex;
        align-items: end;
        justify-content: center;
        color: var(--orange);
        vertical-align: bottom;
        margin: 50px 0px;
    }

    .phrase > p {
        margin: 0px 5px;
    }

    .container > p{
        color: var(--white);
    }

    span.phrase > p:nth-child(odd){
        font-size: 40px;
    }
    span.phrase > p:nth-child(even){
        font-size: 20px;
        margin-bottom: 5px;
    }

    @media (max-width: 469px) {
        div.img{
            background-position-x: -170px;
        }
    }
`

export const Block = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-evenly;
    flex-direction:column;
    text-align:center;
    height: 373px;
    width: 100%;
    color: var(--white);
    background-color: var(--green);
    margin-bottom: 40px;

    & p:nth-child(1){
        color: var(--orange);
        margin: 20px;
        font-size: 35px;
    }
`

export const HashTageContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-evenly;
    flex-direction:column;
    text-align:center;
    height: 195px;
    width: 100%;
    color: var(--blue);
    background-color: var(--white);

    & p:nth-child(1){
        color: var(--orange);
        font-size: 30px;
        font-family: 'logoFont';
    }
    & p:nth-child(3){
        font-size: 30px;
        font-family: 'Josefin Sans', sans-serif;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px 0;
    @media only screen and (max-width:900px){
        flex-direction: column;
    }
`;