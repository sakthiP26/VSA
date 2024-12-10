
import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
    } else {
      setError('');
      
      console.log('Logging in with', { username, password });
    }
  };

  return (
    
    <div className="login-container">
        <h2 class="login-head">Software Academy Login</h2>
      <form className='f1' onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button class="btn-1" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
