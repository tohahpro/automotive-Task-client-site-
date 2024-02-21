import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import CreateRouter from './Components/Router/Router'
import AuthProvider from './Components/Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={CreateRouter}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
