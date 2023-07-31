import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user's details from the backend API based on the userId parameter
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        alert('Error fetching user details');
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>First Name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastName}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
      <p>
        <strong>DOB:</strong> {user.dob}
      </p>
      <p>
        <strong>City:</strong> {user.city}
      </p>
      <p>
        <strong>Zip:</strong> {user.zip}
      </p>
      <p>
        <strong>Country:</strong> {user.country}
      </p>
      <p>
        <strong>State:</strong> {user.state}
      </p>
      <p>
        <strong>Interests:</strong> {user.interests.join(', ')}
      </p>
      {/* Display other user details */}
    </div>
  );
};

export default UserProfile;