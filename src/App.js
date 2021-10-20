import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './app.css';

// Components
import Registration from './components/Registration';
import Login from './components/Login';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}></Route>

      <Route path="/registreer" component={Registration}></Route>

      <Route path="/login" component={Login}></Route>

      <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
