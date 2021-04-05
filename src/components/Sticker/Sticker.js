import React from 'react'
import { Avatar, Wrapper} from './styles'

const Sticker = (props) => {
    return(
        <Wrapper >
            <Avatar/>
            <div className="info-holder">
                <p>{props.name || 'Anónimo'}</p>
                <p>{props.email}</p>
            </div>
        </Wrapper>
    )
}

export default Sticker