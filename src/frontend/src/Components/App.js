import './App.css';
import NavBar from './NavBar/NavBar';
import LogIn from './Forms/Login';
import SignUp from './Forms/SignUp';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const authToken = localStorage.getItem("token")
  const signUpToken = localStorage.getItem("token")

  const haveAuthToken = authToken == null ? (
    <div>
      <Router>
      <NavBar/>
            <Switch>
                <Route path='/LogIn' exact component={LogIn} />
                <Route path='/SignUp' exact component={SignUp} />
                <Redirect to='/'/>
         </Switch>
      </Router>
    </div>
  ): (
    <Navbar></Navbar>
  )


  const signupRender = authToken == null ? (
    <div>
      <Navbar></Navbar>
      <Signup></Signup>
    </div>
  ) : (
    <Navbar />
  )


  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* {loginRenderer} */}
      {/* {signupRender} */}

      <Route path="/">
        {haveAuthToken}
      </Route>
      <Route path="/signup">
        {signupRender}
      </Route>
      <Route path="/welcome">
        {haveAuthToken}
      </Route>
    </div>
  )
}

export default App;
