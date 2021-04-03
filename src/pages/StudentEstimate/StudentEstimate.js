import React from 'react'
import {Cross, Estimate, EstimateHolder, FullAvatar, Heart, Icon, PayAmount, Tap, TextField, TotalPrice, Wrapper} from './styles'
import Footer from '../../components/Footer/Footer'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
const {BASE_URL}  = require('../../constants/URLs');



const StudentsPage = (props) => {
    return(
        <Wrapper visible={props.visible}>
            <div className="container">
                <FullAvatar style={{backgroundImage:`url(${BASE_URL + props.avatarUrl}`}}>
                    <Cross onClick={()=>{props.toClose();}}/>
                    <Heart/>
                </FullAvatar>
                <TextField>
                    <span className="icon"><img src={`${BASE_URL}/icones/round-account-button-with-user-inside 1.png`}/></span>
                    {props.name}
                </TextField>
                <TextField>
                    <span className="icon"><img src={`${BASE_URL}/icones/graduate-cap 1.png`}/></span>
                    {props.school} AAA Escola de Pilhas
                </TextField>
                <TextField>
                    <span className="icon"><img src={`${BASE_URL}/icones/clipboard-paste-button 1.png`}/></span>
                    {props.message} Por favo eu quero istuda, comu v prissizo. asdsakjdsadsads jadkhsajdhsad asdhskja dahsjkds sdash  dasdjhsadkjsah  dsadjhsakdhsa 
                </TextField>

                <EstimateHolder>
                    <Estimate src={`${BASE_URL + props.estimateUrl}`}/>
                    <span className="icon"><img src={`${BASE_URL}/icones/attachment-clip 1.png`}/></span>
                    <Tap/>
                    <TotalPrice>
                        <p>Valor Total</p>
                        <p> R$ {props.valorTotal}</p>
                    </TotalPrice>
                </EstimateHolder>

                <ProgressBar width='65%' progression="0%"/>

                <PayAmount>R$ {props.valorTotal}</PayAmount>

                <OrangeButton width="70%" icon>Fazer Doação</OrangeButton>
                <Footer/>
            </div>
        </Wrapper>
    )
}

export default StudentsPage