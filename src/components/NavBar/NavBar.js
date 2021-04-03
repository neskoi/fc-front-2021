import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer';
import DrawerMenu from './DrawerMenu'
import {NavBar, MenuCaller} from './styles'

const Navbar = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <NavBar>
            <a href="/">Equipa os Guri</a>
            <MenuCaller onClick={() => setOpenDrawer(true)} />
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <DrawerMenu onClose={() => setOpenDrawer(false)} />
            </Drawer>
        </NavBar>
    )
}

export default Navbar;