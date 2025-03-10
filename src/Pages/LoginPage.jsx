import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};
    let isValid = true;

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log('Form submitted:', { email, password });
      // In a real app, you would send the data to a server here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;