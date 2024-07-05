import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './Css Files/index.css'
import Form from './Form.jsx'
// import NotFoundPage from './NotFound.jsx'
import AppointmentPage from './appointPage.jsx'
// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
// import LoginPage from './LoginPage.jsx';
// import SignupPage from './SignUpPage.jsx';


// Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/schedule',
    element:
      <Form />
  },
  {
    path: '/appointments',
    element: <AppointmentPage />
  },
  // {
  //   path: '/login',
  //   element:
  //     <LoginPage />
  // },
  // {
  //   path: '/signUp',
  //   element:
  //     <SignupPage />
  // },
  // {
  //   path: "/login/sso-callback",
  //   element: <App />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
      <RouterProvider router={router} />
 
  </React.StrictMode>,
)
