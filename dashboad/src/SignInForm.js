import React from 'react';
import './SignInForm.css';

function SignInForm({ onSignIn }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate successful authentication
    onSignIn(); // Call the onSignIn function passed from App
  };

  return (
    <div className="form-section">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter email or user name" required />
        <input type="password" placeholder="Password" required />
        <a href="/forgot-password" className="forgot-password">Forgot password?</a>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>or continue with</p>
      <div className="social-login">
        <button className="apple-login"></button>
        <button className="google-login">G</button>
      </div>
    </div>
  );
}

export default SignInForm;
