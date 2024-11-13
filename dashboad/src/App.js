import React from 'react';
import SignupForm from './SignupForm';
import './App.css';

function App() {
  return (
    <div className="signup-container">
      <div className="illustration-section">
        <img src="https://your-illustration-url.com/illustration.png" alt="Sign up illustration" />
        <h2>Sign Up to</h2>
        <p>Lorem Ipsum is simply</p>
        <p>If you already have an account, <a href="/login">Login here!</a></p>
      </div>
      <SignupForm />
    </div>
  );
}

export default App;
