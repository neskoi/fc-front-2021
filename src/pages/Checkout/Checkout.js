import React from 'react';
import {Board, Cross, PayMethod, Title, Wrapper} from './styles';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
const {BASE_URL} = require('../../constants/URLs');

function Pay(props) {
    return (
        <Wrapper visible={props.visible}>
            <Cross onClick={props.toClose}/>

            <Title>Dados do Aluno Beneficiado</Title>

            <Board>
                <p className="name">{props.name}</p>
                <p>{props.ano}º Ano da {props.school}</p>
                <p>R$ {props.valorTotal}</p>
            </Board>

            <Title>Dados Financeiros</Title>

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
                <label>R$ {props.valorTotal}</label>    
            </Board> 

            <OrangeButton width="90%" icon>Efetuar Pagamento</OrangeButton>
        </Wrapper>
        
    );
}

export default Pay;