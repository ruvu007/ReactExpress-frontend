import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './app.css';

// Components
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <Router>
        
      <Route path="/" exact component={Home}></Route>

      <Route path="/registreer" component={Registration}></Route>

      <Route path="/login" component={Login}></Route>

    </Router>
  );
}

export default App;
