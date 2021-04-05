import styled from 'styled-components';
const {BASE_URL} = require('../../constants/URLs');

export const Wrapper = styled.div `
    position: fixed;
    left: ${props=> props.visible ? 0 : '-150vw'};
    top: 0;
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding-top: 40px;
    background: var(--white);
    font-size: 1rem;
    transition: all 0.6s ease;
    & div:nth-child(7){
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
    }
    & div:nth-child(7) > label{
        margin: 0px 30px;
    }
    @media only screen and (max-width:900px){
        flex-direction: column;
        justify-content: space-between;
        right: ${props=> props.visible ? 0 : '-150vw'};
        left: auto;
        align-items: center;
        width: 100%;
        width: 100%;
    }
    
`

export const Title = styled.div `
    width: 90%;
    height: 50px;
    border-radius: 25px;
    padding: 16px;
    font-weight: 500;
    color:  var(--white);
    background-color: var(--blue);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`

export const Board = styled.div `
    width: 90%;
    background-color: var(--gray);
    border-radius: 4px;
    padding: 14px;
    margin: 20px;
    text-align: left;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    & > p {
        margin: 8px 0;
    }
    & p:nth-child(3){
        font-weight: 500;
    }
`

export const Cross = styled.div `
    position: absolute;
    top: 10px;
    left: 10px;
    height: 24px;
    width: 24px;
    background-image: url('${BASE_URL}/icones/close-button 1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`

export const PayMethod = styled.div `
    position: relative;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(33, 33, 33, 0.08);
    padding-top: 10px;
    & input[type=radio]{
        margin: 0px 20px;
    }
    & img{
        position: absolute;
        top: 5px;
        right: 16px;
        display: inline-block;
        height: 30px;
        width: 30px;
    }
`
