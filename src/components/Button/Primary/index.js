import React from 'react'
import Button from './styles'

const Primary = (props) => {
  return (
    <Button.Container onClick={props.onClick}>
      {props.name}
    </Button.Container>
  )
}

export default Primary