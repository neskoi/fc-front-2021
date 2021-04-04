import styled from 'styled-components'
const  {BASE_URL} = require('../../constants/URLs');
export const NavBar = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 75px;
        width: 100vw;
        padding: 0px 30px;
        
        color: var(--orange);
        background-color: var(--blue);
        
        & a {
            text-decoration: none;
            font-family: 'logoFont', sans-serif;
            font-size: 25px;
            color: var(--orange);
        } 
        & a:active {
            color: var(--orange);
        }
    `
export const MenuCaller = styled.a`
    height: 50px;
    width: 50px;
    background-image: url("${BASE_URL}/icones/menuSmall.png");
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;
    border-radius: 5px;
`