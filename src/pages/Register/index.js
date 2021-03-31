import React from 'react'
import StyledRegister from './styles'
import Container from '../../components/Container'
import PrimaryButton from '../../components/Button/Primary'

const Register = () => {
  return (
    <Container>
      <StyledRegister.Banner />
      <PrimaryButton name="Solicitar Doação" />
      <PrimaryButton name="Realizar Doação" />
    </Container>
  )
}

export default Register;
