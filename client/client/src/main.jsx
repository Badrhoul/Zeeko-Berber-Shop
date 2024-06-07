import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Form from './Form.jsx'
import NotFoundPage from './NotFound.jsx'
// import Appointments from './appointments.jsx'
import AppointmentPage from './appointPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/schedule',
    element: <Form />
  },
  {
    path: '/appointments',
    element:<AppointmentPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
