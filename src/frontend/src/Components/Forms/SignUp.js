import React, { Component } from 'react';
import { TextInput,Button} from 'react-materialize';

class SignUp extends Component {
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
            label="Password"
            />
            <TextInput
            label="Confirm Password"
            />
             <Button
             node="button"
              style={{
              marginRight: '5px'
              }}
                waves="light"
                href="/SignUp"
              >
                SignUp
             </Button>
             <p>Create An account <span><Button
             node="button"
              style={{
              marginRight: '5px'
              }}
              waves="light"
              >
                Create Account
             </Button></span></p>
            </div>
        );
    }
}
 
export default SignUp;