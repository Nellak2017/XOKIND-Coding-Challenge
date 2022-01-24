import React from 'react';
import { Navbar } from './Nav.elements';

const Nav = (props) => {
    return ( 
        <Navbar>
            {props.children}
        </Navbar>
     );
}
 
export default Nav;