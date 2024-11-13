import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignupForm from './SignupForm';
import './App.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="auth-container">
      <div className="illustration-section">
        <img src="https://your-illustration-url.com/illustration.png" alt="Sign up illustration" />
        <h2>{showSignUp ? "Sign up to" : "Sign in to"}</h2>
        <p>Lorem Ipsum is simply</p>
        {showSignUp ? (
          <p>If you already have an account, <span className="toggle-link" onClick={toggleForm}>Login here!</span></p>
        ) : (
          <p>If you don’t have an account, <span className="toggle-link" onClick={toggleForm}>Register here!</span></p>
        )}
      </div>
      {showSignUp ? <SignupForm /> : <SignInForm />}
    </div>
  );
}

export default App;
