import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Dashboard() {

  const [username, setUsername] = useState('');

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setUsername(response.data.user[0].username);
      };
    });
  }, []);

  return (
    <div className='app'>
        <h1>Welkom, { username }</h1>
    </div>
  );
}

export default Dashboard;
