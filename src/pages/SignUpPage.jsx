import React, { useState } from 'react';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      console.log({
        email,
        password,
        confirmPassword,
      });
    } catch (error) {
      console.error('Sign up failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page main-content">
      <div className="form-container visible">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <button className="google-auth-button">Sign Up with Google</button>
      </div>
    </div>
  );
}

export default SignUpPage;