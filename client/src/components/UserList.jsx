import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of registered users from the backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        alert('Error fetching user list');
      }
    };
    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>City</th>
          <th>Zip</th>
          <th>Country</th>
          <th>State</th>
          <th>Interests</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.dob}</td>
            <td>{user.city}</td>
            <td>{user.zip}</td>
            <td>{user.country}</td>
            <td>{user.state}</td>
            <td>{user.interests.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;