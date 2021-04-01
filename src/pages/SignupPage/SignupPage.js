import { Button, TextField } from "@material-ui/core"
import axios from "axios"
import { useHistory } from "react-router"
import { BASE_URL } from "../../constants/URLs"
import { useForm } from "../../hooks/UseForm"
import { FormContainer, SignUpPageContainer } from "./styles"

const SignUpPage = () => {

    const history = useHistory()
    const {form, onChange} = useForm({ name: "", email: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }
  
    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            "email": form.email,
            "password": form.password
        }

        axios.post(`${BASE_URL}/usuario/cadastro`,body)
        .then((res)=> {
            console.log(res)
            alert("Cadastro realizado com sucesso")
            history.push('/')
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div>
            <SignUpPageContainer>   
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
                    <Button type='submit' style={{ color: 'white', backgroundColor: '#FF692A' }} variant="contained">Cadastrar</Button>
                    <Button style={{ color: 'white' }} onClick={()=> history.push('/')}>Voltar para tela de acesso</Button>    
                </FormContainer>
                
            </SignUpPageContainer>
        </div>
    )
}

export default SignUpPage