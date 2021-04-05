import styled from "styled-components"

export const Button = styled.button `
    position: relative;
    border: none;
    border-radius: 100px;
    font-size: 1rem;
    color: var(--white);
    background: var(--black);
    cursor: pointer;
    background-color: var(--orange);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`

export const Icon = styled.img `
    position: absolute;
    top: 11px;
    left: 40px;
    height: 38px;
    width: 38px;
`