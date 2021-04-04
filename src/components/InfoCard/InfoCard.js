import React from 'react'
import {Banner, Wrapper} from './style'

const InfoCard = (props) => {
    return (
       <Wrapper color={props.color}>
           <Banner color={props.color}>
               {props.title}
           </Banner>
           {props.children}
       </Wrapper>
    )
}

export default InfoCard;