import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import Diagnostics from './screens/Diagnostics';

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Hello
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/diagnostics'>Diagnostics</Link>
          </li>
        </ul>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/diagnostics'>
          <Diagnostics />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
