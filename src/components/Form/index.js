import React from 'react'
import Styled from './styles'

const Form = (props) => {
  return (
    <Styled.Form>
      {props.children}
    </Styled.Form>
  )
}

export default Form