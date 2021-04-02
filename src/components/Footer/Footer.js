import React from 'react'
import styled from 'styled-components'


const Footer = (props) => {
    const Footer = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 195px;
        width: 100vw;
        color: var(--white);
        background-color: var(--blue);
        & a {
            text-decoration: none;
            color: var(--white);
        } & a:active {
            color: var(--white);
        }
    `

    return (
        <Footer>
            <a href="/">Quem Somos</a>
            <a href="/">Envolva-se</a>
            <a href="/">Fale Conosco</a>
            COPYRIGHT ©
        </Footer>
    )
}

export default Footer;