import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    city: '',
    zip: '',
    country: '',
    state: '',
    interests: [],
    profilePicture: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? (checked ? [...prevFormData.interests, value] : prevFormData.interests.filter((interest) => interest !== value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend API for registration
      await axios.post('/api/users/register', formData);
      alert('Registration successful');
      // Clear form fields after successful registration
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        city: '',
        zip: '',
        country: '',
        state: '',
        interests: [],
        profilePicture: '',
        password: '',
      });
    } catch (error) {
      alert('Error occurred during registration');
      console.log(error);
    }
  };

  return (
    <div className="login-form">

      <form className="form" onSubmit={handleSubmit}>
        
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
      
        
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
      
        
          <label>Gender</label>
          <div className="gender">
            <label>
              <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} required />
              Other
            </label>
          </div>
        
          <label htmlFor="dob">DOB</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        
          <label htmlFor="zip">Zip</label>
          <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
        
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
        
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
        
          <label>Area of Interest</label>
          <div className="gender">
            <label>
              <input type="checkbox" name="interests" value="Reading" checked={formData.interests.includes('Reading')} onChange={handleChange} />
              Reading
            </label>
            <label>
              <input type="checkbox" name="interests" value="Writing" checked={formData.interests.includes('Writing')} onChange={handleChange} />
              Writing
            </label>
            <label>
              <input type="checkbox" name="interests" value="Traveling" checked={formData.interests.includes('Traveling')} onChange={handleChange} />
              Traveling
            </label>
            <label>
              <input type="checkbox" name="interests" value="Playing" checked={formData.interests.includes('Playing')} onChange={handleChange} />
              Playing
            </label>
          </div>
        
        
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" name="profilePicture" onChange={handleChange} required />
      
        
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;