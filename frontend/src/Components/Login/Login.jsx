import React, { useState } from 'react';
import './Login.css';


function LoginClient() {
        const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>

    <div className="form-group">
      <div className='input-group'>

        <label htmlFor="email"></label>
        
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleUsernameChange}
          placeholder='Enter Email'
        />
        </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder='Enter Password'
        />
      </div>
      </div>

      <button type="submit">Login</button>
    </form>

  
  );
}

export default LoginClient;
