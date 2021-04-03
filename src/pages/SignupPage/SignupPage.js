import { Button, TextField } from "@material-ui/core"
import axios from "axios"
import { useHistory } from "react-router"
import BlueSquare from "../../components/BlueSquare"
import Container from "../../components/Container"
import { BASE_URL } from "../../constants/URLs"
import { useForm } from "../../hooks/UseForm"
import { FormContainer, SignUpPageContainer } from "./styles"
import { useUnprotectedPage } from '../../hooks/UseUnprotectedPage'
import Footer from "../../components/Footer/Footer"

const SignUpPage = () => {
    useUnprotectedPage()
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
            history.push('/login')
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div>
            <SignUpPageContainer>
                <Container>
                    <BlueSquare>
                    <h1 style={{ color: '#FF692A' }}>Equipa os Guri</h1>
                        <FormContainer onSubmit={onSubmitForm}>
                            <label>E-mail</label>
                            <TextField
                                color="primary"
                                style={{ backgroundColor: 'white' }}
                                variant="outlined"
                                name='email'
                                value={form.email}
                                type='email'
                                required
                                onChange={handleInputChange}
                            />
                            <label>Senha</label>
                            <TextField
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
                            <Button style={{ color: 'white' }} onClick={()=> history.push('/login')}>Voltar para tela de acesso</Button>    
                        </FormContainer>
                    </BlueSquare>
                </Container> 
            <Footer />
            </SignUpPageContainer>
        </div>
    )
}

export default SignUpPage