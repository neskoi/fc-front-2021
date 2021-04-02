import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 17px;
`

const Bar = styled.div `
    height: 100%;
    width: 80%;
    border-radius: 50px;
    background-color: var(--gray-text);
    overflow: hidden;
`
const Fill = styled.div `
    height: 100%;
    border-radius: 50px;
    background-color: var(--light-gree);
`

const ProgressBar = (props) => {
    return (
       <Wrapper style={{width: props.width}}>
           <Bar><Fill style={{width: '50%'}}/></Bar>
           <label>100%</label>     
       </Wrapper>
    )
}

export default ProgressBar;