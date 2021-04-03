import React from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../constants/URLs';
import ProgressBar from '../ProgressBar/ProgressBar';

const Wrapper = styled.div `
    position: relative;
    align-items: center;
    height: 207px;
    width: 90%;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    background-size: cover;
    background-position: center;
    bakground-repeat: no-repeat;
    margin: 10px;
`

const InfoHolder = styled.div `
    position: absolute;
    bottom: 0;
    height: 88px;
    width: 100%;
    padding: 12px;
    color: var(--white);
    background-color: var(--blue-transparent);
    & p:nth-of-type(1){
        margin: 8px 0 8px 10px;
        font-size: 20px;
    }
    & p:nth-of-type(2){
        font-size: 11px;
    }
`

const Icon = styled.div `
    position: absolute;
    top: 8px;
    right: 12px;
    height: 24px;
    width: 21px;
    background-image: url('${BASE_URL}/icones/angle-down.png');
`

const StudentsPage = (props) => {
    return(
        <Wrapper style={{backgroundImage: `url(${BASE_URL + props.img_avatar_url})`}}>
            <InfoHolder>
                <Icon/>
                <ProgressBar width="85%" progression="0%"/>
                <p>{props.name || "Nome do Aluno"}</p>
                <p>{props.school || "E.E. Escola Escola"}</p>
            </InfoHolder>
        </Wrapper>
    )
}

export default StudentsPage