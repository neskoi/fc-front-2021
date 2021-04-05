import React from 'react'
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import Title from '../../components/Titlte/Title';
import {CamIcon, Cross, Icon,InsertImage,InsertImageScreen,TotalValue,ValueField,Wrapper} from './styles';

const StudentsPage = (props) => {

    return(
        <Wrapper visible={props.visible}>
            <Cross onClick={props.toClose}/>
            <Title width="90%">Insira o Orçamento</Title>
            <InsertImage id="insertImage" onChange={props.upFile}/>
            <InsertImageScreen id="insertImageScreen" htmlFor="insertImage"><CamIcon/></InsertImageScreen>
            <TotalValue onChange={props.changeValue}>
                <Icon/>
                <p>Valor da Lista</p>
                <p>R$</p><ValueField/>
            </TotalValue>
            <OrangeButton clicked={props.clicked} width="80%">Salvar Lista de Materiais</OrangeButton>
        </Wrapper>
    )
}

export default StudentsPage