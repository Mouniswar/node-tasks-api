import React from 'react';
import { NavItem, Navbar, Icon, Link } from 'react-materialize';



const NavBar = () => {
    return ( <div className="App">
    <div className="container-fluid">
      <div className="row">
      <Navbar
          style={{backgroundColor:'#1976D2'}}
          alignLinks="right"
          brand={<a className="brand-logo" href="#">Tasks</a>}
          id="mobile-nav">
          <NavItem  onClick={e => e.preventDefault()}>
              LogIn
          </NavItem>
          <NavItem  onClick={e => e.preventDefault()}>
              SignUp
          </NavItem>
        </Navbar>
      </div>
    </div>
  </div>  );
}
 
export default NavBar;