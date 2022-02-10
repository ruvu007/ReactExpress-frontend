import React, { useState } from 'react';
import Axios from 'axios';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './userValidation2';

import PasswordMeter from '../passwordMeter';

function EditEmployees() {

    const [fullnameReg, setFullnameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [errorMessage, setErrorMessage] = useState("");

    Axios.defaults.withCredentials = true;

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

    // Axios post om de opgegeven data van de frontend naar de backend te sturen
    const submitForm = () => {
        Axios.post('http://localhost:3001/addemployee', {
            fullname: fullnameReg,
            email: emailReg,
            password: passwordReg, 
        }).then((response) => {
            if (response.data.message) {
                setErrorMessage(response.data.message);
            }
        });
    };

  return (
    <div className='app'>
        <p>Werknemers toevoegen</p>

        <form onSubmit={handleSubmit(submitForm)}>

            <label>Volledige naam</label>
            <input 
                type='text'
                name='fullname'
                {...register('fullname')}
                onChange={(e) => 
                    {setFullnameReg(e.target.value)
                }} 
            />
            <p className='register-error'>{errors.name?.message}</p>

            <label>Emailadres</label>
            <input 
                type='text'
                name='email'
                {...register('email')}
                onChange={(e) => 
                    {setEmailReg(e.target.value)
                }} 
            />
            <p className='register-error'>{errors.username?.message}</p>

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

            <button>Opslaan</button>
        </form>

        <p className='foutmelding'>{errorMessage}</p>
    </div>
  );
}

export default EditEmployees;
