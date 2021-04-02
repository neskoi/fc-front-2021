import React from 'react';
import styled from 'styled-components';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
const {BASE_URL} = require('../../constants/URLs');

const Wrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding-top: 40px;
    background: var(--white);
    font-size: 1rem;
    & div:nth-child(7){
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
    }
    & div:nth-child(7) > label{
        margin: 0px 30px;
    }
    
`

const Title = styled.div `
    width: 90%;
    height: 50px;
    border-radius: 25px;
    padding: 16px;
    font-weight: 500;
    color:  var(--white);
    background-color: var(--blue);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`

const Board = styled.div `
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

const PayMethod = styled.div `
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

function Pay() {
    return (
        <Wrapper>
            <Cross/>

            <Title>Dados do Aluno Beneficiado</Title>

            <Board>
                <p>Marcus Vinícius Pereira e Sousa</p>
                <p>3ª Série do Ensino Fundamental</p>
                <p>R$ 250,57</p>
            </Board>

            <Title>Dados do Financeiros</Title>

            <Board style={{backgroundColor: 'var(--orange)', color: 'var(--white)'}}>
                <p>5% do valor doado será destinado para manter os custos da EQUIPA OS GURI.</p>
            </Board>

            <Board>
                <PayMethod >
                    <input type="radio" id="bill" name="pay_method" value="bill" disabled/>
                    <label>Boleto Bancário</label>
                    <img alt="bill" src={`${BASE_URL}/icones/bill.png`}/>
                </PayMethod>
                <PayMethod>
                    <input type="radio" id="creditCard" name="pay_method" value="creditCard"/>
                    <label>Cartão de Crédito</label>
                    <img alt="card" src={`${BASE_URL}/icones/cc.png`}/>
                </PayMethod>
                <PayMethod>
                    <input type="radio" id="pix" name="pay_method" value="pix" disabled/>
                    <label>PIX</label>
                    <img alt="pix" src={`${BASE_URL}/icones/pix.png`}/>
                </PayMethod>
            </Board>

            <Board>
                <img alt="pix" src={`${BASE_URL}/icones/coin.png`}/>
                <label>Valor</label>    
            </Board> 

            <OrangeButton width="90%" icon>Efetuar Pagamento</OrangeButton>
        </Wrapper>
        
    );
}

export default Pay;