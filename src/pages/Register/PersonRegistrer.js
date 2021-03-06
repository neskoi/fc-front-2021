import React, {
  useState,
  useEffect,
} from 'react'

import { useHistory } from "react-router-dom"
import api from '../../utils/configApi'
import ContainerWhite from '../../components/ContainerWhite'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Inputs/Default'
import Select from '../../components/Inputs/Select'
import Button from '../../components/Button/Primary'
import Footer from '../../components/Footer/Footer'
import AvatarImg from '../../assets/img/avatar.png'
import StyledRegister from './styles'
import { BASE_URL } from '../../constants/URLs'
import { useProtectedPage } from '../../hooks/UseProtectedPage'

const PersonRegister = () => {
  useProtectedPage();
  const history = useHistory();
  const [estadosBR, setEstadosBR] = useState([])
  const [bancos, setBancos] = useState([])
  const [formState, setFormState] = useState({
    nome: '',
    cpf: '',
    rg: '',
    agencia: '',
    conta: '',
    fk_estado: 0,
    fk_banco: 0,
  })

  const handleForm = (key, value) => {
    setFormState({
      ...formState,
      [key]: value,
    })
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log('formState', formState)
    api().post(BASE_URL+'/pessoa/cadastro', formState)
    .then(res => {
      history.push("/cadastro/sucesso")
      })
      .catch(e => alert(`Não foi possivel Cadastrar suas informações: ${e.message}`))
  }

  const getStates = () => {
    api().get(BASE_URL+'/estado/buscar').then(res => {
      setEstadosBR(res.data.data)
    })
  }

  const getBanks = () => {
    api().get(BASE_URL+'/banco/buscar').then(res => {
      setBancos(res.data.data)
    })
  }

  useEffect(() => {
    getStates()
    getBanks()
  }, [])


  return (
    <ContainerWhite>
      <NavBar />
      <Header title="Responsável" />
      <StyledRegister.Avatar src={AvatarImg} alt="Avatar de Usúario" />
        <Form>
          <Input
            label="Nome do Responsável"
            value={formState.nome}
            onChange={(event) => handleForm('nome', event.target.value)}
          />
          <Input
            label="RG"
            value={formState.rg}
            onChange={(event) => handleForm('rg', event.target.value)}
          />
          <Input
            label="CPF"
            value={formState.cpf}
            onChange={(event) => handleForm('cpf', event.target.value)}
          />
          <Select
            label="Estado"
            defaultOption="Selecione um Estado"
            optionsList={estadosBR}
            value={formState.fk_estado}
            onChange={(event) => handleForm('fk_estado', parseInt(event.target.value))}

          />
          <StyledRegister.Divider />
          <StyledRegister.DividerText>
            Dados Bancários
          </StyledRegister.DividerText>
          <Select
            label="Banco"
            defaultOption="Selecione um Banco"
            optionsList={bancos}
            value={formState.fk_banco}
            onChange={(event) => handleForm('fk_banco', parseInt(event.target.value))}

          />
          <Input
            label="Agencia"
            value={formState.agencia}
            onChange={(event) => handleForm('agencia', event.target.value)}
          />
          <Input
            label="Conta"
            value={formState.conta}
            onChange={(event) => handleForm('conta', event.target.value)}
          />
          <StyledRegister.Divider />
          <Button
            type="submit"
            name="Salvar"
            onClick={submitForm}
          />
        </Form>
        <Footer />
    </ContainerWhite>
  )
}

export default PersonRegister;
