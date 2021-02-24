import './App.css';
import NavBar from './NavBar/NavBar';
import LogIn from './Forms/LogIn';
import SignUp from './Forms/SignUp'
import { Redirect,  Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route'

const App = () => {
  const authToken = localStorage.getItem("token")
  const signUpToken = localStorage.getItem("token")

  const haveAuthToken = authToken == null ? (
    <div>
    
      <NavBar />
      <BrowserRouter>
      <Switch>
                <Route path='/login' exact component={LogIn} />
                <Route path='/signup' exact component={SignUp} />
                <Redirect to='/'/>
         </Switch>
      </BrowserRouter>
    </div>
  ): (
    <NavBar/>
  )


  // const signupRender = authToken == null ? (
  //   <div>
  //     <NavBar/>
  //     <SignUp/>
  //   </div>
  // ) : (
  //   <NavBar />
  // )


  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* {loginRenderer} */}
      {/* {signupRender} */}

      <Route path="/">
        {haveAuthToken}
      </Route>
      <Route path="/signup">
        {signUpToken}
      </Route>
      <Route path="/login">
        {haveAuthToken}
      </Route>
    </div>
  )
}

export default App;
