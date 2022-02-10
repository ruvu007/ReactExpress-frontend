import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Components


import { useHistory } from "react-router-dom";

function EmployeeDashboard() {

  const history = useHistory();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/employeelogin').then((response) => {
      if (response.data.loggedIn === true) {
        setFullname(response.data.user[0].fullname);
        setEmail(response.data.user[0].email);
      } else {
        history.push("/werknemer/login");
      };
    });
  }, [history]);

  const logout = () => {
    Axios.post('http://localhost:3001/employeelogout').then((response) => {
      if (response.data.loggedIn === false) {
        history.push("/werknemer/login");
      };
    });
  };

  return (
    <div className='app'>
        <button onClick={logout}>Uitloggen</button>

        <h1>Welkom, { fullname }</h1>

        <h3>Email: { email }</h3>
    </div>
  );
}

export default EmployeeDashboard;
