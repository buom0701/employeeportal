import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home';
import Employee from './component/Employee';
import Greeting from './component/Greeting';

import {BrowserRouter as Router, 
  Switch, 
  Route, 
  Link} from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <br></br>
    <h1 className = 'banner'>Employee Portal</h1>
    <br></br>
    <Router>
      <div className = 'container-lg'>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link"  to="/Home"> Home </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Employee"> Employee Registration </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Greeting"> Greet </Link>
            </li>
          
          
          </ul>
        </nav>
<Switch>
  <Route path="/Home">
    <Home />
  </Route>
  <Route path="/Employee">
    <Employee />
  </Route>
  <Route path="/Greeting">
    <Greeting />
  </Route>
</Switch>

      </div>
    </Router>         
    </header>
  </div>
    );
}



export default App;
