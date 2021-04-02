import React from 'react'
import StyledRegister from './styles'
import Container from '../../components/Container'
import BlueSquare from '../../components/BlueSquare'
import PrimaryButton from '../../components/Button/Primary'

const Register = () => {
  return (
    <Container>
      <BlueSquare>
        <StyledRegister.Banner>
          <h2>Equipa os Guri</h2>
          <h4>Selecione seu objetivo</h4>  
        </StyledRegister.Banner>
        <PrimaryButton name="Solicitar Doação" />
        <PrimaryButton name="Realizar Doação" />
      </BlueSquare>
    </Container>
  )
}

export default Register;
