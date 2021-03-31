import React from 'react'
import { StudentContainer } from "./styles"

const CardStudent = (props) => {

    return (
        <StudentContainer>
            <img src={props.avatar} alt={props.avatar} />
            <p>Nome: {props.name}</p>
            <p>Escola: {props.school}</p>
            <p>Ano: {props.year}</p>
        </StudentContainer>
    )
}

export default CardStudent