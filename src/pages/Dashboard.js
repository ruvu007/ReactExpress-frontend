import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { useHistory } from "react-router-dom";

function Dashboard() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user[0].name);
        setUsername(response.data.user[0].username);
      } else {
        history.push("/login");
      };
    });
  }, [history]);

  return (
    <div className='app'>
        <h1>Welkom, { name }</h1>

        <h3>Email: { username }</h3>
    </div>
  );
}

export default Dashboard;
