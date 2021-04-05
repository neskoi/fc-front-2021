import styled from 'styled-components'
export const {BASE_URL}  = require('../../constants/URLs');

export const Wrapper = styled.form `
    position: fixed;
    left: ${props => props.visible ? 0 : '-150vw'};
    top: 0;
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    transition: all 0.6s ease;

    & button {
        margin-bottom: 40px;
    }
    @media only screen and (max-width:900px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`

export const Cross = styled.div `
    height: 24px;
    width: 24px;
    margin: 15px 95% 10px 15px;
    background-image: url('${BASE_URL}/icones/close-button 1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`

export const InsertImage = styled.input.attrs({type: 'file', accept:"image/*"})`
    opacity: 0;
`

export const InsertImageScreen = styled.label `
    position: relative;
    height: 455px;
    width: 80%;
    border-radius: 15px;
    background-color: rgba(28,98,145, 0.3);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    border: 1px solid var(--gray);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`

export const TotalValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 43px;
    width: 70%;
    margin: 20px;
    color: var(--orange);
    background-color: var(--light-gray);
    & p:nth-child(2){
        margin: 0px 20px;
    }
`

export const Icon = styled.div`
    height: 20px;
    width: 20px;
    background-image: url('${BASE_URL}/icones/money 2.png');
`

export const ValueField = styled.input.attrs({type:"text"})`
    width: 20%;
    outline: none;
    text-decoration: none;
    appearance: none;
    border: none;
    background: none;
    font-size: 16px;
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
`

export const CamIcon = styled.div`
    position:absolute;
    top: 200.5px;
    left: calc(50% - 30px);
    height: 55px;
    width: 60px;
    background: url('${BASE_URL}/waitImage.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    z-index: -5;
`