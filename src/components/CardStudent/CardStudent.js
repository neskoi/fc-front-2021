// import React from 'react'
// import { StudentContainer } from "./styles"

// const CardStudent = (props) => {

//     return (
//         <StudentContainer>
//             <img src={props.avatar} alt={props.name} />
//             <p>Nome: {props.name}</p>
//             <p>Escola: {props.school}</p>
//             <p>Ano: {props.year}</p>
//         </StudentContainer>
//     )
// }

// export default CardStudent

import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar/ProgressBar';
import OrangeButton from '../OrangeButton/OrangeButton';
import { BASE_URL } from '../../constants/URLs';

const Wrapper = styled.div `
    position: relative;
    align-items: center;
    height: 207px;
    width: 30%;
    margin: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    button{
        position: absolute;
        bottom: 10px;
        right: 10px;
        margin: 0;
    }

    @media only screen and (max-width:900px){
        width: 90%;
    }
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

const CardStudent = (props) => {
    return(
        <Wrapper onClick={props.clicked} style={{backgroundImage: `url(${BASE_URL + props.img_avatar_url})`}}>
            <InfoHolder>
                <ProgressBar width="95%" progression="0%"/>
                <p className="name">{props.name || "Nome do Aluno"}</p>
                <p>{props.school || "E.E. Escola Escola"}</p>
                <OrangeButton width="120px" height={'40px'}>DETALHES</OrangeButton>
            </InfoHolder>
        </Wrapper>
    )
}

export default CardStudent