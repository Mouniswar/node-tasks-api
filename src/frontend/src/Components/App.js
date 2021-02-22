import './App.css';
import NavBar from './NavBar/NavBar';
import LogIn from './Forms/Login';
import SignUp from './Forms/SignUp';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
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
  )
}

export default App;
