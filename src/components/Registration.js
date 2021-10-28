import React, { useState } from 'react';
import Axios from 'axios';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './userValidation';

import PasswordMeter from './passwordMeter';

function Registration() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [roleReg, setRoleReg] = useState('');

    const [emailStatus, setEmailStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

    // Axios post om de opgegeven data van de frontend naar de backend te sturen
    const submitForm = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg, 
            password: passwordReg,
            role: roleReg
        }).then((response) => {
            if (response.data.message) {
                setEmailStatus(response.data.message);
            }
        });
    };

  return (
    <div className='app'>
        <form onSubmit={handleSubmit(submitForm)} className='registration'>
            <h1>Registratie</h1>

            <label>Emailadres</label>
            <input 
            type='text'
            name='username'
            {...register('username')}

            onChange={(e) => 
                {setUsernameReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.username?.message}</p>
            <p className='foutmelding'>{emailStatus}</p>

            <label>Wachtwoord</label>
            <input 
            type='password'
            name='password'
            {...register('password')}
            
            onChange={(e) => 
                {setPasswordReg(e.target.value)
            }} 
            />
            <PasswordMeter password={ passwordReg }/>
            <p className='register-error'>{errors.password?.message}</p>

            <label>Bevestig wachtwoord</label>
            <input 
            type='password' 
            name='confirmPassword'
            {...register('confirmPassword')}
            />
            <p className='register-error'>{errors.confirmPassword?.message}</p>

            <label>Gebruikers rol</label>
            <select
                onChange={(e) => 
                    {setRoleReg(e.target.value)
                }}
            >
                <option name='investor'>investeerder</option>
                <option name='broker'>makelaar</option>
            </select>

            <button>Registreer</button>
        </form>
    </div>
  );
}

export default Registration;
