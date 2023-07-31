import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route exact path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  )
}

export default App
