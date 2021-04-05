import React from 'react'
import Styled from './styles'
const Default = (props) => {
  return(
    <Styled.Wrapper>
      <Styled.Label>{props.label}</Styled.Label>
      <Styled.Input value={props.value} onChange={props.onChange}/>
    </Styled.Wrapper>
  )
}

export default Default