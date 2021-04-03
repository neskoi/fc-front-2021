import React, { useState } from 'react'
import api from '../../utils/configApi'
import ContainerWhite from '../../components/ContainerWhite'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Inputs/Default'
import Button from '../../components/Button/Primary'
import Footer from '../../components/Footer/Footer'
import AvatarImg from '../../assets/img/avatar.png'
import StyledRegister from './styles'

const PersonRegister = () => {
  const [formState, setFormState] = useState({
    nome: '',
    cpf: '',
    rg: '',
    agencia: '',
    conta: '',
    fk_estado: 3,
    fk_banco: 3,
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
    api().post('pessoa/cadastro', formState)
      .then(res => res)
      .catch(e => console.log(e.message))
  }

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
          <Input
            label="Estado"
          />
          <StyledRegister.Divider />
          <StyledRegister.DividerText>
            Dados Bancários
          </StyledRegister.DividerText>
          <Input
            label="Banco"
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
