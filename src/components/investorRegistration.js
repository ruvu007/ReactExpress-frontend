import React, { useState } from 'react';
import Axios from 'axios';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './userValidation';

import PasswordMeter from './passwordMeter';

function InvestorRegistration() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [nameReg, setNameReg] = useState('');
    const [countryReg, setCountryReg] = useState('');
    const [zipReg, setZipReg] = useState('');
    const [housenumberReg, setHousenumberReg] = useState('');
    const [phoneReg, setPhoneReg] = useState('');
    const [kvkReg, setKvkReg] = useState('');
    const [btwReg, setBtwReg] = useState('');
    const [bankaccountReg, setBankaccountReg] = useState('');

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
            name: nameReg,
            country: countryReg,
            zip: zipReg,
            housenumber: housenumberReg,
            phone: phoneReg,
            kvk: kvkReg,
            btw: btwReg,
            bankaccount: bankaccountReg,
            role: 'investor'
        }).then((response) => {
            if (response.data.message) {
                setEmailStatus(response.data.message);
            }
        });
    };

  return (
    <div className='app'>
        <form onSubmit={handleSubmit(submitForm)} className='registration'>
            <h1>Registratie investeerder</h1>

            <label>Bedrijfsnaam</label>
            <input 
            type='text'
            name='name'
            {...register('name')}
            onChange={(e) => 
                {setNameReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.name?.message}</p>

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

            <label>Land</label>
            <select
                onChange={(e) => 
                    {setCountryReg(e.target.value)
                }}
            >
                <option name='investor'>nederland</option>
                <option name='broker'>engeland</option>
            </select>

            <label>Postcode</label>
            <input 
            type='text'
            name='zip'
            {...register('zip')}
            onChange={(e) => 
                {setZipReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.zip?.message}</p>

            <label>Huisnummer</label>
            <input 
            type='text'
            name='housenumber'
            {...register('housenumber')}
            onChange={(e) => 
                {setHousenumberReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.housenumber?.message}</p>

            <label>Telefoonnummer</label>
            <input 
            type='text'
            name='phone'
            {...register('phone')}
            onChange={(e) => 
                {setPhoneReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.phone?.message}</p>

            <label>Kvk nummer</label>
            <input 
            type='text'
            name='kvk'
            {...register('kvk')}
            onChange={(e) => 
                {setKvkReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.kvk?.message}</p>

            <label>Btw nummer</label>
            <input 
            type='text'
            name='btw'
            {...register('btw')}
            onChange={(e) => 
                {setBtwReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.btw?.message}</p>

            <label>Bankrekening nummer</label>
            <input 
            type='text'
            name='bankaccount'
            {...register('bankaccount')}
            onChange={(e) => 
                {setBankaccountReg(e.target.value)
            }} 
            />
            <p className='register-error'>{errors.bankaccount?.message}</p>

            <button>Registreer</button>
        </form>
    </div>
  );
}

export default InvestorRegistration;
