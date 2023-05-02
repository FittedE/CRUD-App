import React, { useState } from 'react';

function Login({ onLoginFormSubmit, onCancel }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginFormSubmit(email, password);
  }

  return (
    <div className='login-form-overlay'>
      <div className='login-form-card'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
        <button className='close-button' onClick={onCancel}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Login;