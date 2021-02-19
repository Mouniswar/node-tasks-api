import React, { Component } from 'react';
import { TextInput, Button, Link } from 'react-materialize';
import SignUp from '../Forms/SignUp'

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
            <TextInput
               icon="email"
               id="TextInput-4"
               label="Email"
            />            
            <TextInput
            value="Password"
            />
             <Button
             node="button"
              style={{
              marginRight: '5px'
              }}
              waves="light"
              >
                LogIn
             </Button>
            <p>Don't have an account <span><Button
             node="button"
              style={{
              marginRight: '5px'
              }}
              waves="light">
                SignUp Here
             </Button></span></p>
            </div>
        );
    }
}
 
export default LogIn;