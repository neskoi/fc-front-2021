import styled from 'styled-components'
const {BASE_URL}  = require('../../constants/URLs');

export const Wrapper = styled.div `
    position: fixed;
    left: ${props=> props.visible ? 0 : '-100vw'};
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: var(--white);
    transition: all 0.6s ease;
    overflow: scroll;
    & button {
        margin-bottom: 40px;
    }

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
`

export const TextField = styled.div `
    position: relative;
    width: 65%;
    background-color: var(--gray);
    border-radius: 4px;
    padding: 14px;
    text-align: left;
    color: var(--gray-text);
    margin: 10px;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`

export const FullAvatar = styled.div `
    position: relative;
    height: 375px;
    width: 100%;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
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

export const Heart = styled.div `
    position: absolute;
    top: 10px;
    right: 10px;
    height: 24px;
    width: 24px;
    background-image: url('${BASE_URL}/icones/favorite-heart-outline-button 1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: not-allowed;
`

export const Estimate = styled.img `
    height: 415px;
    width: 100%;
    border-radius: 10px;
`

export const EstimateHolder = styled.div `
    display: inline-block;
    position: relative;
    height: 415px;
    width: 65%;
    border-radius: 10px;
    margin: 40px auto;
`

export const Tap = styled.div `
    position: absolute;
    top: 15px;
    left: 15px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: var(--blue-transparent);
    background-image: url('${BASE_URL}/icones/tap 1.png');
    background-repeat: no-repeat;
    background-position: center;
`

export const TotalPrice  = styled.div `
    position: absolute;
    bottom: 10px;
    left: calc(50% - 100px);
    height: 65px;
    width: 200px;
    border-radius: 50px;
    color: var(--white);
    background-color: var(--blue-transparent);
    text-align: center;
    padding: 15px;
`

export const PayAmount = styled.div `
    height: 40px;
    width: 65%;
    margin: 40px;
    border-radius: 10px;
    text-align: center;
    padding: 12px;
    color: var(--white);
    background-color: var(--blue);
`

