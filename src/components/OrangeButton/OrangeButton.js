import React from 'react'
import {Button, Icon} from './styles'
import { BASE_URL } from '../../constants/URLs'

const OrangeButton = (props) => {
    return (
       <Button type={props.type || 'button'} className={props.className} onClick={props.clicked} style={{width: props.width, height: props.height || '60px'}}>
           {props.icon ? <Icon src={`${BASE_URL}/icones/Vector.png`}/> : null}
           {props.children}
       </Button>
    )
}

export default OrangeButton;
