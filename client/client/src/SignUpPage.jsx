// src/SignupPage.jsx
import React from 'react';
import { SignUp } from '@clerk/clerk-react';


function SignUpPage(){
  return (
    <div className="auth-container">
      <SignUp path="/signup" routing="path" signInUrl="/login" />
    </div>
  );
};

export default SignUpPage;
