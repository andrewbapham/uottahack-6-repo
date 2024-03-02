import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientType, setClientType] = useState('client');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClientTypeChange = (event) => {
    setClientType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Client Type:', clientType);
    // add more here
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="transparent-placeholder"></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="clientType"></label>
        <select id="clientType" value={clientType} onChange={handleClientTypeChange}>
          <option value="client">Client</option>
          <option value="recruiter">Recruiter</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
