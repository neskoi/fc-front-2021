import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import Title from '../../components/Titlte/Title';
import styled from 'styled-components'
const {BASE_URL}  = require('../../constants/URLs');

const Wrapper = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & button {
        margin-bottom: 40px;
    }
`

const Cross = styled.div `
    height: 24px;
    width: 24px;
    margin: 15px 95% 10px 15px;
    background-image: url('${BASE_URL}/icones/close-button 1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const InsertImage = styled.input.attrs({type: 'file', accept:"image/*"})`
    opacity: 0;
`

const InsertImageScreen = styled.label `
    position: relative;
    decoration: none;
    height: 455px;
    width: 80%;
    border-radius: 15px;
    background-color: rgba(28,98,145, 0.3);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
`

const TotalValue = styled.div`
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

const Icon = styled.div`
    height: 20px;
    width: 20px;
    background-image: url('${BASE_URL}/icones/money 2.png');
`

const ValueField = styled.input.attrs({type:"text"})`
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

const CamIcon = styled.div`
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

const StudentsPage = (props) => {

    const swapBackgroundImage = (e) => {
        const insertImageScreen = document.querySelector('#insertImageScreen');
        const imageURL = URL.createObjectURL(e.target.files[0]);
        insertImageScreen.style.backgroundImage = `url(${imageURL})`;
    }

    return(
        <Wrapper>
            <NavBar/>
            <Cross/>
            <Title width="90%">Dependente</Title>
            <InsertImage id="insertImage" onChange={swapBackgroundImage}/>
            <InsertImageScreen id="insertImageScreen" htmlFor="insertImage"><CamIcon/></InsertImageScreen>
            <TotalValue>
                <Icon/>
                <p>Valor da Lista</p>
                <p>R$</p><ValueField/>
            </TotalValue>
            <OrangeButton width="80%">Salvar Lista de Materiais</OrangeButton>
            <Footer/>
        </Wrapper>
    )
}

export default StudentsPage