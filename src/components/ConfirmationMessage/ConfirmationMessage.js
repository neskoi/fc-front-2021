import React from 'react'
import styled from 'styled-components'


const ConfirmationMessage = (props) => {
    const Modal = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 110px;
        width: 350px;
        border: 1px solid var(--blue);
        border-radius: 20px;
        color: var(--blue);
        background-color: var(--white);
    `
    const Icon = styled.div `
        height: 38px;
        width: 38px;
        background-color: var(--blue);
        background-image: url("${props.icon}");
        background-repeat: no-repeat;
        background-position: center; 
    `

    return (
        <Modal>
            <Icon/>
            {props.message}
        </Modal>
    )
}

export default ConfirmationMessage;