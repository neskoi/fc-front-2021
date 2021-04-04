import React from 'react'
import Styled from './styles'

const Select = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Label>{props.label}</Styled.Label>
      <Styled.Select value={props.value} onChange={props.onChange}>
        <option value={0} disabled>{props.defaultOption}</option>
        {
          props.optionsList.map(option => {
            const keyId = Object.keys(option)[0]
            const keyName = Object.keys(option)[1]
            return <option value={option[keyId]}>{option[keyName]}</option>
          })
        }
      </Styled.Select>
    </Styled.Wrapper>
  )
}

export default Select