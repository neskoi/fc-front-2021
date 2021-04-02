import React from 'react'
import {NavBar, MenuCaller} from './styles'

const Navbar = (props) => {
    
    return (
        <NavBar>
            <a href="/">Equipa os Guri</a>
            <MenuCaller/>
        </NavBar>
    )
}

export default Navbar;