import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/URLs'

const Button = styled.button `
    position: relative;
    border: none;
    border-radius: 100px;
    margin: 0.5rem auto;
    font-size: 1rem;
    color: var(--white);
    background: var(--black);
    cursor: pointer;
    background-color: var(--orange);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`

const Icon = styled.img `
    position: absolute;
    top: 11px;
    left: 40px;
    height: 38px;
    width: 38px;
`

const OrangeButton = (props) => {
    return (
       <Button onClick={props.clicked} style={{width: props.width, height: props.height || '60px'}}>
           {props.icon ? <Icon src={`${BASE_URL}/icones/Vector.png`}/> : null}
           {props.children}
       </Button>
    )
}

export default OrangeButton;
