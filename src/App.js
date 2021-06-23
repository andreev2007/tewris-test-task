import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Male from "./components/Male";
import Female from "./components/Female";
import All from "./components/All";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu">
          <Link className="menu__item" to="/all">All</Link>
          <Link className="menu__item" to="/male">Male</Link>
          <Link className="menu__item" to="/female">Female</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <h2>Hello</h2>
          </Route>
          <Route exact path="/male">
            <Male/>
          </Route>
          <Route exact path="/female">
            <Female/>
          </Route>
          <Route exact path="/all">
            <All/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
