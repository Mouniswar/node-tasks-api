import './App.css';
import Navbar from './NavBar/NavBar';
import Login from './Forms/Login';

const App = () => {
  const authToken = localStorage.getItem("token")

  const loginRenderer = authToken == null ? <Login></Login> : ''
  return (
    <div>
      <Navbar></Navbar>
      {loginRenderer}
    </div>
  )
}

export default App;
