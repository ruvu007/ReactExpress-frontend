import React, { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  // Axios post om de opgegeven data van de frontend naar de backend te sturen
  const login = () => {
    Axios.post('http://localhost:3001/login', {
        username: username, 
        password: password
      }).then((response) => {

        if (response.data.message) {
            setLoginStatus(response.data.message);
        } else {
            setLoginStatus(response.data[0].username);
        }
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      };
    });
  }, []);

  return (
    <div className='app'>
        <div className='login'>
            <h1>Login</h1>

            <label>Emailadres</label>
            <input type='text' 
            onChange={(e) => 
                {setUsername(e.target.value)
            }} 
            />

            <label>Wachtwoord</label>
            <input type='password' 
            onChange={(e) => 
                {setPassword(e.target.value)
            }} 
            />

            <button onClick={login}>Login</button>
            <h4 className='foutmelding'>{loginStatus}</h4>
        </div>
    </div>
  );
}

export default Login;
