import React, { useState, useEffect } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleLogin,
      });

      google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' } 
      );
    }
  }, [clientId]);

  const handleGoogleLogin = (response) => {
    console.log('Google Login Response:', response);
    try {
        const decodedToken = JSON.parse(atob(response.credential.split('.')[1]));
        console.log('Decoded Token:', decodedToken);

        
    } catch (error) {
        console.error('Error decoding token:', error);
    }
  };
  
  
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log('Logging in with:', { email, password });
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
        <div id="google-signin-button" disabled={loading}>
        </div>
      
      </form>
    </div>
  );
}

export default LoginPage;