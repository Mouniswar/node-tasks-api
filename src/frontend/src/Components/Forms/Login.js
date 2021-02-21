import React, { useEffect, useState } from 'react';
import {TextInput, Row,Col,Button,Icon, NavItem} from 'react-materialize';
import axios from 'axios'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [authenticate,setAuthenticate] = useState(false);
    console.log("email: ", email);
    console.log("Password: ", password);
    console.log(authenticate)

    const data = {
        'email':email,
        'password':password
    }

    const handleInput =  (e) => {
        axios.post('http://localhost:8000/users/login',data)
        .then((res) => {
            // console.log(res)
            if(res.status == 200) {
                localStorage.setItem("token", "Bearer " + res.data.token)
                setAuthenticate(true)
            }
        })
        .catch(e => console.log(e))
    }
    
    if(authenticate) {
        window.location.replace("/welcome")
    }

    return (
            <div style={{width:'50vw', margin:'50px auto'}}>
                <Row>
                    <Col s={12}>
                        <TextInput 
                        email
                        id="email"
                        label="Email"
                        validate
                        m={12} s={12}
                        value={email}
                        validate
                        onChange={
                            (e) => {
                                setEmail(e.target.value)
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
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        />
                    </Col>
                    <Col s={12}>
                        <Button
                            onClick={handleInput}
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
                        <span><a href="#">Signup Here</a></span>
                    </Col>
                </Row>
            </div>
    )
}

export default Login;