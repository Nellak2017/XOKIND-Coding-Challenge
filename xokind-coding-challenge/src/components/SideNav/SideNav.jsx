import React from 'react';
import { Navbar } from './SideNav.elements';

const SideNav = (props) => {
    return ( 
        <Navbar>
            {props.children}
        </Navbar>
     );
}
 
export default SideNav;