import React from 'react'
import Footer from '../../components/Footer/Footer'
import styled from 'styled-components'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
const {BASE_URL}  = require('../../constants/URLs');

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & button {
        margin-bottom: 40px;
    }
`

const TextField = styled.div `
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

const FullAvatar = styled.div `
    position: relative;
    height: 375px;
    width: 100%;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
`

const Cross = styled.div `
    position: absolute;
    top: 10px;
    left: 10px;
    height: 24px;
    width: 24px;
    background-image: url('${BASE_URL}/icones/close-button 1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const Heart = styled.div `
    position: absolute;
    top: 10px;
    right: 10px;
    height: 24px;
    width: 24px;
    background-image: url('${BASE_URL}/icones/favorite-heart-outline-button 1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

`

const Icon = styled.img `
    position: absolute;
    top: 10px;
    left: -40px;
    height: 29px;
    width: 29px;
`

const Estimate = styled.img `
    height: 415px;
    width: 100%;
    border-radius: 10px;
`

const EstimateHolder = styled.div `
    display: inline-block;
    position: relative;
    height: 415px;
    width: 65%;
    border-radius: 10px;
    margin: 40px auto;
`

const Tap = styled.div `
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

const TotalPrice  = styled.div `
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

const PayAmount = styled.div `
    height: 40px;
    width: 65%;
    margin: 40px;
    border-radius: 10px;
    text-align: center;
    padding: 12px;
    color: var(--white);
    background-color: var(--blue);
`

const StudentsPage = (props) => {
    return(
        <Wrapper>
            <FullAvatar style={{backgroundImage:`url(${BASE_URL}/imagens/leo-rivas-2iqKxsN659U-unsplash.jpg)`}}>
                <Cross/>
                <Heart/>
            </FullAvatar>
            <TextField>
                <Icon src={`${BASE_URL}/icones/round-account-button-with-user-inside 1.png`}/>
                {props.name} Serjão mata onça.
            </TextField>
            <TextField>
                <Icon src={`${BASE_URL}/icones/graduate-cap 1.png`}/>
                {props.escola} AAA Escola de Pilhas
            </TextField>
            <TextField>
                <Icon src={`${BASE_URL}/icones/clipboard-paste-button 1.png`}/>
                {props.mensagem} Por favo eu quero istuda, comu v prissizo. asdsakjdsadsads jadkhsajdhsad asdhskja dahsjkds sdash  dasdjhsadkjsah  dsadjhsakdhsa 
            </TextField>

            <EstimateHolder>
                <Estimate src={`${BASE_URL}/imagens/leo-rivas-2iqKxsN659U-unsplash.jpg`}/>
                <Icon src={`${BASE_URL}/icones/attachment-clip 1.png`}/>
                <Tap/>
                <TotalPrice>
                    <p>Valor Total</p>
                    <p> R$ 250,57</p>
                </TotalPrice>
            </EstimateHolder>

            <ProgressBar width='65%'/>

            <PayAmount>R$ 65,00</PayAmount>

            <OrangeButton width="70%" icon>Fazer Doação</OrangeButton>
            <Footer/>
        </Wrapper>
    )
}

export default StudentsPage