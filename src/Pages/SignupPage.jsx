import React, { useState } from 'react';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    }

    if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
        isValid = false;
    }
    

    if (isValid) {
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}
          </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;