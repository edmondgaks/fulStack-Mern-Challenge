import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend API for login
      const response = await axios.post('/api/users/login', formData);
      const token = response.data.token;
      // Store the JWT token in localStorage for authentication
      localStorage.setItem('token', token);
      alert('Login successful');
      // Clear form fields after successful login
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      alert('Incorrect email and password. Enter valid email/Pass');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form">
        {/* <div className="form-group"> */}
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        {/* </div> */}
        {/* <div className="form-group"> */}
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        {/* </div> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;