import React from 'react'
import StyledContainer from './styles'

const ContainerWhite = (props) => {
  return (
    <StyledContainer.Container>
      {props.children}
    </StyledContainer.Container>
  )
}

export default ContainerWhite
