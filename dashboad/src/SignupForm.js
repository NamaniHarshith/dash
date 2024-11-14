import React, { useState } from 'react';

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Enter Email" required />
        <input type="text" placeholder="Create Username" required />
        <input type="text" placeholder="Contact Number" required />
        <div className="password-container">
          <input type={showPassword ? "text" : "password"} placeholder="Password" required />
          <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
        </div>
        <div className="password-container">
          <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" required />
          <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>or continue with</p>
      <div className="social-login">
        <button>Google</button>
        <button>Apple</button>
      </div>
    </div>
  );
}

export default SignupForm;
