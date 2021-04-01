import { Button, TextField } from "@material-ui/core"
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../constants/URLs';
import { useForm } from '../hooks/UseForm';
import { FormContainer, LoginPageContainer } from "./LoginStyles";

function Login() {
    const history = useHistory()
    const {form, onChange} = useForm({ email: "", password: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
        console.log(form)
    }
  
    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            "email": form.email,
            "password": form.password
        }
        console.log(body)
        
        axios.post(`${BASE_URL}/usuario/login`,body)
        .then((res)=> {
            console.log(res.data.data)
            localStorage.setItem('token',res.data.data.token)
            history.push('/students')
            alert("Login realizado com sucesso")
        })
        .catch((err)=> {
            console.log(err)
            alert("Desculpe. Houve algum erro")
        })
    }

    return (
        <LoginPageContainer>
        
            <FormContainer onSubmit={onSubmitForm}>
            <h1 style={{ color: '#FF692A' }}>Equipa os Guri</h1>
            
                <TextField 
                    label="E-mail"
                    color="primary"
                    style={{ backgroundColor: 'white' }}
                    variant="outlined"
                    name='email'
                    value={form.email}
                    type='email'
                    required
                    onChange={handleInputChange}
                />
                
                <TextField 
                    label="Senha"
                    color="primary"
                    style={{ backgroundColor: 'white' }}
                    variant="outlined"
                    name='password'
                    value={form.password}
                    type='password'
                    required
                    onChange={handleInputChange}
                />

                <Button type='submit' style={{ color: 'white', backgroundColor: '#FF692A' }} variant="contained">LOGIN</Button>
            

            <Button style={{ color: 'white' }} onClick={()=> history.push('/signup')}>CADASTRAR-SE</Button>
            <Button style={{ color: 'white' }}>ESQUECI A SENHA</Button>
      
        </FormContainer>
        </LoginPageContainer>
    );
}

export default Login;
