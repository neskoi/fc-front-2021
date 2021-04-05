import styled from 'styled-components'
import { BASE_URL } from "../../constants/URLs"


export const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;

    input[type=file]{
        opacity: 0;
    }
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 465px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 15px;
`
export const StyledLabel = styled.label `
    color: #C4C4C4;
    margin-top: 10px;
`
export const TitleContainer = styled.div `
    display: flex;
    background-color: #1C6291;
    border-radius: 30px;
    color: white;
    align-items: center;
    height: 50px;
    margin-bottom: 20px;
    justify-content: center;
`
export const InsertImage = styled.input.attrs({type: 'file', accept:"image/*"})`
    opacity: 0;
`

export const InsertImageScreen = styled.label `
    position: relative;
    height: 340px;
    width: 340px;
    border-radius: 15px;
    background-color: rgba(28,98,145, 0.3);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    border: 1px solid var(--gray);
    border-radius: 50%;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin: 15px auto;
`

export const CamIcon = styled.div`
    position:absolute;
    top: 142.5px;
    left: calc(50% - 30px);
    height: 55px;
    width: 60px;
    background: url('${BASE_URL}/waitImage.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    z-index: -5;
`