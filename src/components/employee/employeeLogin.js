import React, { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

import { useHistory } from "react-router-dom";

function EmployeeLogin() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  // Axios post om de opgegeven data van de frontend naar de backend te sturen
  const employeelogin = () => {
    Axios.post('http://localhost:3001/employeelogin', {
        email: email, 
        password: password
      }).then((response) => {
        if (!response.data.loggedIn) {
            setLoginStatus(response.data.message);
        } else {
            history.push("/employee/dashboard");
        }
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/employeelogin').then((response) => {
      if (response.data.loggedIn === true) {
        history.push("/employee/dashboard");
      };
    });
  }, [history]);

  return (
    <div className='app'>
        <div className='login'>
            <h1>Login</h1>

            <label>Emailadres</label>
            <input type='text' 
            onChange={(e) => 
                {setEmail(e.target.value)
            }} 
            />

            <label>Wachtwoord</label>
            <input type='password' 
            onChange={(e) => 
                {setPassword(e.target.value)
            }} 
            />

            <button onClick={employeelogin}>Login</button>
            <h4 className='foutmelding'>{loginStatus}</h4>
        </div>
    </div>
  );
}

export default EmployeeLogin;
