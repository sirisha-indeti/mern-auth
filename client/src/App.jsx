import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Navbar from './Components/Navbar.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'

export default function App() { 
  return (
    <div>
     
     
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>

      </Routes>

      
    </div>
  )
}

