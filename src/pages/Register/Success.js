import React from 'react'
import StyledRegister from './styles'
import Container from '../../components/Container'
import BlueSquare from '../../components/BlueSquare'

const FRegister = () => {
  return (
    <Container>
      <BlueSquare>
        <StyledRegister.Banner>
          <h2>Equipa os Guri</h2>
          <h3>Cadastro realizado com sucesso!</h3>  
          <StyledRegister.Icon />
        </StyledRegister.Banner>
      </BlueSquare>
    </Container>
  )
}

export default FRegister;
