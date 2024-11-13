import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignupForm from './SignupForm';
import LandingPage from './LandingPage'; // Import the new LandingPage component
import './App.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignIn = () => {
    setAuthenticated(true); // Authenticate the user and show the landing page
  };

  if (authenticated) {
    // Render the landing page if authenticated
    return <LandingPage />;
  }

  // Render the sign-in or sign-up forms if not authenticated
  return (
    <div className="auth-container">
      <div className="illustration-section">
        <img src="https://your-illustration-url.com/illustration.png" alt="Sign up illustration" />
        <h2>{showSignUp ? "Sign up to BankDash" : "Sign in to BankDash"}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        {showSignUp ? (
          <p>If you already have an account, <span className="toggle-link" onClick={toggleForm}>Login here!</span></p>
        ) : (
          <p>If you don’t have an account, <span className="toggle-link" onClick={toggleForm}>Register here!</span></p>
        )}
      </div>
      <div className="form-section">
        {showSignUp ? <SignupForm /> : <SignInForm onSignIn={handleSignIn} />}
      </div>
    </div>
  );
}

export default App;
