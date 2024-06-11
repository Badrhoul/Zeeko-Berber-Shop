// src/LoginPage.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';



function LoginPage(){

    const navigate = useNavigate();

    function handleSignIn(){
        navigate('/')
    }

  return (
    <div className="auth-container">
      <SignIn path="/login"  afterSignIn={handleSignIn}/>
    </div>
  );
};

export default LoginPage;
