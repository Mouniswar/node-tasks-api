import React, { useState } from 'react';
import {NavItem, Navbar, Icon} from 'react-materialize';

const NavBar = () => {
    const [showNavbar, setNotShowNavbar] = useState(true);
    
    return (
        <Navbar
        style={{backgroundColor:'#1976D2'}}
        alignLinks="right"
        brand={<a className="brand-logo" href="#" style={{margin:'0 20px'}}>Tasks</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
        sidenav={
          <ul style={{textAlign: "center"}}>
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
          </ul>
          }
        >
        <NavItem href="" onClick={e => e.preventDefault()}>
          Login
        </NavItem>
        <NavItem href="" onClick={e => e.preventDefault()}>
          Sign up
        </NavItem>
      </Navbar>
     );
}
 
export default NavBar;