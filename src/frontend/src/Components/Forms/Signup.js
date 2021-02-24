import React, { useState } from 'react';
import {TextInput, Button,Row,Col} from 'react-materialize';
import axios from 'axios'
import NavItem from '../NavBar/NavItem';

class Signup extends React.Component {
    state = {
        email:'',
        password:'',
        username:'',
        age: '',
        success:false
    }


    handleInput =  (e) => {
        e.preventDefault()
        const userdata = {
            name:this.state.username,
            email:this.state.email,
            password:this.state.password,
            age:this.state.age
        };

        console.log(userdata)

        axios.post('http://localhost:8000/users',userdata)
        .then((res) => {
           console.log(res)
            // res.status == 201 ? setSuccess(true) : setSuccess(!true)
            if(res.status == 201) {
                localStorage.setItem("token", "Bearer " + res.data.token)
                this.setState({success:true})
                if(this.state.success == true) {
                    window.location.replace("/")
                }
            }
        })
        .catch(e => console.log(e))
    }

   
    render () {
        return (
            <div style={{width:'50vw', margin:'50px auto'}}>
                <Row>
                <Col s={12}>
                        <TextInput 
                        id="name"
                        label="Name"
                        m={6} s={6}
                        value={this.state.username}
                        onChange={
                            (e) => {
                                this.setState({username:e.target.value})
                            }
                        }
                        />
                         <TextInput 
                        id="age"
                        label="Age"
                        m={6} s={6}
                        value={this.state.age}
                        validate
                        onChange={
                            (e) => {
                                this.setState({age: Number(e.target.value)})
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
                            this.setState({password:e.target.value})
                        }}
                        />
                    </Col>
                    <Col s={12}>
                        <Button
                            onClick={this.handleInput}
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
                        <span><NavItem href="/login">Login
                         Here</NavItem></span>
                    </Col>
                </Row>
        </div>
        )
    }
}



export default Signup;