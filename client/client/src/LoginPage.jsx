// src/LoginPage.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './SignUpPage.css'

function LoginPage(){
  return (
    <div className="auth-container">
      <SignIn path="/login" routing="path" signUpUrl="/signup" />
    </div>
  );
};

export default LoginPage;
