import React, { useState } from 'react';
import {TextInput, Button,Row,Col} from 'react-materialize';
import Login from './Login'
import axios from 'axios'

const Signup = function() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [success,setSuccess] = useState(false)

    const data = {
        'name':username,
        'age':age,
        'email':email,
        'password':password
    };

    console.log('Data: ',data)

    const handleInput =  (e) => {
        axios.post('http://localhost:8000/users',data)
        .then((res) => {
           console.log(res)
            // res.status == 201 ? setSuccess(true) : setSuccess(!true)
            if(res.status == 201) {
                localStorage.setItem("token", "Bearer " + res.data.token)
                setSuccess(true)
            }
        })
        .catch(e => console.log(e))
    }

    if(success) {
        window.location.replace("/welcome")
    }
    

    return (
        <div style={{width:'50vw', margin:'50px auto'}}>
                <Row>
                <Col s={12}>
                        <TextInput 
                        id="name"
                        label="Name"
                        m={6} s={6}
                        value={username}
                        onChange={
                            (e) => {
                                setUsername(e.target.value)
                            }
                        }
                        />
                         <TextInput 
                        id="age"
                        label="Age"
                        m={6} s={6}
                        value={age}
                        validate
                        onChange={
                            (e) => {
                                setAge(Number(e.target.value))
                            }
                        }
                        />
                    </Col>
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
                            node="a"
                            style={{
                            marginRight: '5px'
                            }}
                            waves="light"
                        >
                            Create an account
                        </Button>
                    </Col>
                    <Col style={{marginTop:'10px'}}>
                        <span>Don't Have an Account? </span>
                        <span><a href="#">Login
                         Here</a></span>
                    </Col>
                </Row>
        </div>
    );
}

export default Signup;