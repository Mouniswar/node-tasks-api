import './App.css';
import {NavItem, Navbar, Icon} from 'react-materialize';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
        <Navbar
            style={{backgroundColor:'#1976D2'}}
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Tasks</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
            sidenav={
              <ul style={{textAlign: "center"}}>
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>
              </ul>
              }
            >
            <NavItem href="" onClick={e => e.preventDefault()}>
              Login
            </NavItem>
            <NavItem href="" onClick={e => e.preventDefault()}>
              Sign up
            </NavItem>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default App;
