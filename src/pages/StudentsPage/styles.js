import styled from 'styled-components'
import Fundo2 from '../../assets/img/fundo2.jpg'

export const ListContainer = styled.div `
    display: flex;
    /* flex-direction: column; */
    /* width: 80vw;
    max-width: 465px; */
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 15px;
    
`
export const PageContainer = styled.div `
    background-image: url(${Fundo2});
`
export const ResponsibleContainer = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 85vw;
    max-width: 414px;
    height: 94px;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    color: #C4C4C4;
`
export const ButtonContainer = styled.div `
    display: flex;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`