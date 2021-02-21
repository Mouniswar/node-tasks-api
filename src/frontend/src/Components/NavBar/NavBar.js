import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
import Login from '../Forms/Login';
import Signup from '../Forms/Signup';

const NavBar = () => {
  const [data, setData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authToken, setAuthtoken] = useState(localStorage.getItem("token"))

  console.log("Data: ", data)

  useEffect(() => {
    console.log("Auth token: ", authToken)
    console.log("I'm running ")
    if (authToken == null) {
      return;
    }
    else {
      const response = axios.get('http://localhost:8000/users/me', {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      }).then((res) => {
        // console.log(res)
        setData(res)
        setIsAuthenticated(!false)
        setAuthtoken(localStorage.getItem("token"))
      }).catch((e) => console.log(e))
    }
  },[])

  const navbarRender = (
    isAuthenticated == true && authToken!= null? (
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
        <NavItem href="" onClick={e => e.preventDefault()}>
          <Icon right>
            account_circle
          </Icon>
          Hi! {data.data.name}
        </NavItem>
        <NavItem href="" onClick={e => {
            e.preventDefault()
            localStorage.removeItem("token")
            window.location.replace("/")
          }
          }>
          <Icon right>
            power_settings_new
          </Icon>
          Logout
        </NavItem>
      </Navbar>
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
          <NavItem href="" onClick={e => {
            e.preventDefault()
            return <Login></Login>
          }}>
            Login
        </NavItem>
          <NavItem href="" onClick={e =>{
             e.preventDefault()
             console.log("event trigged")
             return <Signup></Signup>
             }}>
            Signup
        </NavItem>
        </Navbar>
      )
  )

  return(
    <div>
      {navbarRender}
    </div>
  )
}

export default NavBar;