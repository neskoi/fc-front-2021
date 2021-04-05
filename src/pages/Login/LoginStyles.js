import { Button, TextField } from '@material-ui/core'
import styled from 'styled-components'
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 465px;
    min-height: 31vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 15px;
    text-align: left;
    color: white;
`
export const LoginPageContainer = styled.div `
    height: 100%;
    min-height: 100vh;
`
export const StyledButton = styled(Button)`

`
export const StyledInput = styled(TextField)`

`
export const Title = styled.h1 `
    margin-bottom: 10px;
`