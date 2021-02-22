import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Icon, Dropdown, Divider } from 'react-materialize';
import NavItem from './NavItem'

class NavBar extends React.Component {
  state = {
    userData:[],
    isAuthenticated: false,
    authToken:localStorage.getItem("token")
  }

  componentDidMount() {
    if(this.state.authToken === null) {
      return;
    }
    else {
      const response = axios.get('http://localhost:8000/users/me', {
        headers:{
          'Authorization':localStorage.getItem("token")
        }
      }).then((res) => {
        this.setState({userData: res})
        this.setState({isAuthenticated: !false})
        this.setState({authToken: localStorage.getItem("token")})
      }).catch((e) => console.log(e))
    }
  }

  

  render() {
    const navbarRender = (
      this.state.isAuthenticated == true && this.state.authToken != null ? (
        <Navbar
          style={{ backgroundColor: '#1976D2' }}
          alignLinks="right"
          brand={<a className="brand-logo" href="#" style={{ margin: '0 20px' }}>Tasks</a>}
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
            <ul style={{ textAlign: "center" }}>
              <li><a href="#">Login</a></li>
              <li><a href="#">Signup</a></li>
            </ul>
          }
        >
          <NavItem href="" id="logout"  onClick={e => e.preventDefault()}>
            <Icon right>
              account_circle
            </Icon>
            Hi! {this.state.userData.data.name}
          </NavItem>
          
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={<a href="#!">{' '}<Icon right>arrow_drop_down</Icon></a>}
          >
            <a href="#" onClick={e => {
              e.preventDefault()
              localStorage.removeItem("token")
              window.location.replace("/")
            }}>
              <Icon>power_settings_new</Icon>
              Logout
            </a>
          </Dropdown>
        </Navbar >
      ) : (
    <Navbar
      style={{ backgroundColor: '#1976D2' }}
      alignLinks="right"
      brand={<a className="brand-logo" href="#" style={{ margin: '0 20px' }}>Tasks</a>}
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
        <ul style={{ textAlign: "center" }}>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      }
    >
      <NavItem href="/">
        Login
          </NavItem>
      <NavItem href="/signup">
        Signup
          </NavItem>
    </Navbar>
  )
    )

    return (
      <div>
        {navbarRender}
      </div>
    ) 
  }
}


export default NavBar;