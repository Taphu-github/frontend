
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ initialUser, onSubmit }) => {
  const [username, setUsername] = useState(initialUser ? initialUser.ownername : '');
  const [cid, setCid] = useState(initialUser ? initialUser.cid : '');
  const [contactNo, setContactNo] = useState(initialUser ? initialUser.contactNo : '');
  const [emailID, setEmailID] = useState(initialUser ? initialUser.emailID : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {  "cid": cid, "ownername":username, "contactNo":contactNo, "emailID":emailID };

    try {
      if (initialUser) {
        // Update existing user
        console.log("initial user");
        const response = await axios.put(`http://localhost:5050/analysis/updateOwner/${initialUser.id}`, user); // Replace with your API endpoint
        console.log('User updated successfully:', response.data);
      } else {
        // Create new user
        console.log(user);
        const response = await axios.post('http://localhost:5050/analysis/addOwner', user); // Replace with your API endpoint
        console.log('User created successfully:', response.data);
      }
      onSubmit(); // Clear form or trigger data refresh (depending on implementation)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialUser ? 'Edit User' : 'Add User'}</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        CID:
        <input type="text" value={cid} onChange={(e) => setCid(e.target.value)} />
      </label>
      <label>
        Contact No:
        <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
      </label>
      <label>
        Email ID:
        <input type="email" value={emailID} onChange={(e) => setEmailID(e.target.value)} />
      </label>
      <button type="submit">{initialUser ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default UserForm;