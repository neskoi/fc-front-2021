import React from 'react'
import Square from './styles'

const BlueSquare = (props) => {
  return (
    <Square>
      {props.children}
    </Square>
  )
}

export default BlueSquare