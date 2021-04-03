import React from 'react'
import ContainerWhite from '../../components/ContainerWhite'
import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Inputs/Default'
import Button from '../../components/Button/Primary'
import AvatarImg from '../../assets/img/avatar.png'
import StyledRegister from './styles'

const PersonRegister = () => {
  return (
    <ContainerWhite>
      <Header title="Responsável" />
      <StyledRegister.Avatar src={AvatarImg} alt="Avatar de Usúario" />
        <Form>
          <Input label="Nome do Responsável" />
          <Input label="RG" />
          <Input label="CPF" />
          <Input label="Estado" />
          <StyledRegister.Divider />
          <StyledRegister.DividerText>
            Dados Bancários
          </StyledRegister.DividerText>
          <Input label="Banco" />
          <Input label="Agencia" />
          <Input label="Conta" />
          <StyledRegister.Divider />
          <Button name="Salvar" />
        </Form>
    </ContainerWhite>
  )
}

export default PersonRegister;
