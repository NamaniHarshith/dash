import React from 'react';
import './SignInForm.css';

function SignInForm() {
  return (
    <div className="form-section">
      <h2>Sign in</h2>
      <input type="text" placeholder="Enter email or user name" />
      <input type="password" placeholder="Password" />
      <a href="/forgot-password" className="forgot-password">Forgot password?</a>
      <button className="login-button">Login</button>
      <p>or continue with</p>
      <div className="social-login">
        <button className="apple-login"></button>
        <button className="google-login">G</button>
      </div>
    </div>
  );
}

export default SignInForm;
