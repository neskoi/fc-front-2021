import React from 'react'
import Styled from './styles'

const Header = (props) => {
  return (
    <Styled.Header>
      {props.title}
    </Styled.Header>
  )
}

export default Header