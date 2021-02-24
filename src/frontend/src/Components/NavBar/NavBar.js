import React from 'react';
import { NavItem, Navbar } from 'react-materialize';



const NavBar = () => {
    return ( <div className="App">
    <div className="container-fluid">
      <div className="row">
      <Navbar
          style={{backgroundColor:'#1976D2'}}
          alignLinks="right"
          brand={<a className="brand-logo" href="#">Tasks</a>}
          id="mobile-nav">
          <NavItem  onClick={e => e.preventDefault()} href="/login">
              LogIn
          </NavItem>
          <NavItem  onClick={e => e.preventDefault()} href="/signup">
              SignUp
          </NavItem>
        </Navbar>
      </div>
    </div>
  </div>  );
}

export default NavBar;