import React, { useEffect, useState } from 'react';
import {TextInput, Row,Col,Button,Icon} from 'react-materialize';
import axios from 'axios'
import NavItem from '../NavBar/NavItem'


class Login extends React.Component {
    state = {
        email: '',
        password:'',
        authenticate:false
    }


    handleInput =  (e) => {
        e.preventDefault()
        const data = {
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:8000/users/login',data)
        .then((res) => {
            // console.log(res)
            if(res.status == 200) {
                localStorage.setItem("token", "Bearer " + res.data.token)
                this.setState({authenticate: true})

                if(this.state.authenticate === true) {
                    window.location.replace("/welcome")
                }
            }
            
        })
        .catch(e => console.log(e))
    }

    render() {
        return(
            <div style={{width:'50vw', margin:'50px auto'}}>
                <Row>
                    <Col s={12}>
                        <TextInput 
                        email
                        id="email"
                        label="Email"
                        validate
                        m={12} s={12}
                        value={this.state.email}
                        validate
                        onChange={
                            (e) => {
                                this.setState({email:e.target.value})
                            }
                        }
                        />
                    </Col>
                    <Col s={12}>
                        <TextInput 
                        password
                        id="password"
                        label="Password"
                        validate
                        m={12} s={12}
                        value={this.state.password}
                        onChange={(e) => {
                            this.setState({password: e.target.value})
                        }}
                        />
                    </Col>
                    <Col s={12}>
                        <Button
                            onClick={this.handleInput}
                            onKeyUp={(event) => {
                                if(event.keyCode === 13) {
                                    event.preventDefault();
                                    console.log("enter key was pressed")
                                }
                            }}
                            node="a"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                        >
                            Login
                        </Button>
                    </Col>
                    <Col style={{marginTop:'10px'}}>
                        <span>Don't Have an Account? </span>
                        <span><NavItem href="/signup">Sign Up
                         Here</NavItem></span>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Login;