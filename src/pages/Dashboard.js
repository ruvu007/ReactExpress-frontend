import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { useHistory } from "react-router-dom";

function Dashboard() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [housenumber, setHousenumber] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [kvk, setKvk] = useState('');
  const [btw, setBtw] = useState('');
  const [bankaccount, setBankaccount] = useState('');

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user[0].name);
        setUsername(response.data.user[0].username);
        setCountry(response.data.user[0].country);
        setHousenumber(response.data.user[0].housenumber);
        setZip(response.data.user[0].zip);
        setPhone(response.data.user[0].phone);
        setKvk(response.data.user[0].kvk);
        setBtw(response.data.user[0].btw);
        setBankaccount(response.data.user[0].bankaccount);
      } else {
        history.push("/login");
      };
    });
  }, [history]);

  const logout = () => {
    Axios.post('http://localhost:3001/logout').then((response) => {
      if (response.data.loggedIn === false) {
        history.push("/login");
      };
    });
  };

  return (
    <div className='app'>
        <button onClick={logout}>Uitloggen</button>

        <h1>Welkom, { name }</h1>

        <h3>Email: { username }</h3>

        <h4>Telefoonnummer: { phone }</h4>
        <h4>Kvk: { kvk }</h4>
        <h4>Btw: { btw }</h4>
        <h4>Bankrekeningnummer: { bankaccount }</h4>

        <h5>{ housenumber }, { zip }</h5>
        <h5>{ country }</h5>
    </div>
  );
}

export default Dashboard;
