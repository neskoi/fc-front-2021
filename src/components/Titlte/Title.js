import React from 'react'
import styled from 'styled-components'

const Title = styled.div `
    height: 50px;
    border-radius: 25px;
    padding: 16px;
    text-align: center;
    color:  var(--white);
    background-color: var(--blue);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`

const title = (props) => {
    return(
        <Title style={{width: props.width}}>{props.children}</Title>
    )
}

export default title