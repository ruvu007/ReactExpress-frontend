import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './app.css';

// Components
import brokerRegistration from './components/brokerRegistration';
import investorRegistration from './components/investorRegistration';
import Login from './components/Login';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}></Route>

      <Route path="/registreer/makelaar" component={brokerRegistration}></Route>
      <Route path="/registreer/investeerder" component={investorRegistration}></Route>

      <Route path="/login" component={Login}></Route>

      <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
