import React from 'react'
import StyledRegister from './styles'
import Container from '../../components/Container'
import BlueSquare from '../../components/BlueSquare'
import PrimaryButton from '../../components/Button/Primary'
import { useHistory } from 'react-router'

const Register = () => {
  const history = useHistory()
  return (
    <Container>
      <BlueSquare>
        <StyledRegister.Banner>
          <h2>Equipa os Guri</h2>
          <h4>Selecione seu objetivo</h4>  
        </StyledRegister.Banner>
        <PrimaryButton name="Solicitar Doação" onClick={()=> history.push('/responsavel')}/>
        <PrimaryButton name="Realizar Doação" onClick={()=> history.push('/estudantes')}/>
      </BlueSquare>
    </Container>
  )
}

export default Register;
