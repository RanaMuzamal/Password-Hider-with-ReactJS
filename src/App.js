
import { useState } from 'react';
import './App.css';

function App() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword,setShowPassword]=useState(true)
  return (
 
      
       <div className="container">
        <h2 className='title'>PASSWORD HIDER</h2>
        <input 
          type='text'
          placeholder='Enter Username'
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input 
          type={showPassword ? 'text':'password'}
          placeholder='Énter Password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <h2>{username}</h2>
        <h2>{showPassword ? password:"*".repeat(password.length)}</h2>
        <button onClick={(e)=>setShowPassword(!showPassword)}>Hide/Show Password</button>
 

    </div>
   
  );
}

export default App;
