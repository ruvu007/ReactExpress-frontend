import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='app'>
        <h1>Homepagina</h1>

        <div className='link'>
           <Link to="/registreer/makelaar">Registratie makelaar</Link> 
        </div>

        <div className='link'>
           <Link to="/registreer/investeerder">Registratie investeerder</Link> 
        </div>
        
        <div className='link'>
           <Link to="/login">Login</Link> 
        </div>
        
    </div>
  );
}

export default Home;
