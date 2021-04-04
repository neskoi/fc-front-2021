import styled from 'styled-components'
export const {BASE_URL}  = require('../../constants/URLs')

export const Wrapper = styled.div `
    position: ${props=> props.visible ? 'relative' : 'fixed'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    background-image: url('${BASE_URL}/background/background-texture.jpg');
    background-size: 100% 100%;
    background-attachment: fixed;
    overflow: hidden;
    transition: all 1s ease;
     & button {
        margin-bottom: 40px;
    }

    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;

        @media only screen and (max-width:900px){
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }


`

export const SearchHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0 10px 0;
    height:63px;
    width: 100%;
`

export const Search = styled.input.attrs({type:"text", placeholder: 'Pesquisar'})`
    height: 63px;
    width: 100%;
    outline:none;
    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
    color: var(--gray-text);
`

export const SearchGo = styled.div`

    position: absolute;
    right: 20px;
    top: 18px;

    height: 29px;
    width: 29px;
    background-image: url('${BASE_URL}/icones/searching-magnifying-glass 1.png');
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`

export const Filter = styled.div`

    height: 47px;
    width: 50px;
    background-image: url('${BASE_URL}/icones/Group 211.png');
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`

export const FilterRelative = styled.div`
    position: relative;
    height: 63px;
    width: 60%;
`
