import React from 'react';
import {TextInput, Row,Col, Button} from 'react-materialize';
const Login = () => {
    return (
            /* <Row m={6} s={12}>
            <TextInput 
                email
                id="email"
                label="Email"
                validate
                m={6} s={12}
            />
            </Row>
            <Row m={6} s={12}>
            <TextInput 
                password
                label="Password"
                id="password"
                m={6} s={12}
            />
            </Row>
            <Row m={6} s={12}>
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                    >
                    Login
                </Button>
            </Row> */
            <div style={{width:'50vw', margin:'50px auto'}}>

            
                <Row>
                    <Col s={12}>
                    <TextInput 
                    email
                    id="email"
                    label="Email"
                    validate
                    m={12} s={12}
                />
                    </Col>
                </Row>
            </div>
    )
}

export default Login;