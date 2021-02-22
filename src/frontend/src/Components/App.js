import './App.css';
import Navbar from './NavBar/NavBar';
import Login from './Forms/Login';
import Signup from './Forms/Signup'
import Route from './Route'
import Header from './NavBar/Header'
import Main from './NavBar/Main'
import axios from 'axios';


const App = () => {
  const authToken = localStorage.getItem("token")


  const haveAuthToken = authToken == null ? (
    <div>
      <Navbar></Navbar>
      <Login></Login>
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
        <Main></Main>
      </Route>
    </div>
  )
}

export default App;
