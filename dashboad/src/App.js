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
    <div className="app-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <h1>App Name</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Authentication Container */}
      <div className="auth-container">
        <div className="text-section">
          <h2>{showSignUp ? "Sign up to" : "Sign in to"}</h2>
          <p>Lorem Ipsum is simply</p>
          {showSignUp ? (
            <p>If you already have an account, <span className="toggle-link" onClick={toggleForm}>Login here!</span></p>
          ) : (
            <p>If you don’t have an account, <span className="toggle-link" onClick={toggleForm}>Register here!</span></p>
          )}
        </div>
        <div className="illustration-section">
          <img src="https://your-illustration-url.com/illustration.png" alt="Sign up illustration" />
        </div>
        {showSignUp ? <SignupForm /> : <SignInForm />}
      </div>
    </div>
  );
}

export default App;
