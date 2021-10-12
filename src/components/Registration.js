import React, { useState } from 'react';
import Axios from 'axios';

function Registration() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    Axios.defaults.withCredentials = true;

    // Axios post om de opgegeven data van de frontend naar de backend te sturen
    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg, 
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

  return (
    <div className='app'>
        <div className='registration'>
            <h1>Registratie</h1>

            <label>Emailadres</label>
            <input type='text' 
            onChange={(e) => 
                {setUsernameReg(e.target.value)
            }} 
            />

            <label>Wachtwoord</label>
            <input type='password' 
            onChange={(e) => 
                {setPasswordReg(e.target.value)
            }} 
            />

            <button onClick={register}>Registreer</button>
        </div>
    </div>
  );
}

export default Registration;
