import React, { useState } from 'react';
import Navbar from './Navbar';
import Drawers from './Drawer';

const Navigation = () => {
    const[isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <>
            <Drawers isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    )
}
export default Navigation;