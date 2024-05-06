import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isAddingUser, setIsAddingUser] = useState(false); // Track add user state

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5050/analysis/getOwner'); // Replace with your API endpoint
      setUsers(response.data);
    };

    fetchData();
  }, []);

  const handleEdit = async (userId) => {
    console.log(users);
    const response = await axios.get(`http://localhost:5050/analysis/getOwner/${userId}`);
    const user = response.data;
    setSelectedUser(user); // Update state to trigger form population (explained later)
  };

  const handleDelete = async (userId) => {
    console.log(userId);
    await axios.delete(`http://localhost:5050/analysis/deleteOwner/${userId}`);
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleAddUser = async (newUser) => {
    try {
      const response = await axios.post('http://localhost:5050/analysis/addOwner', newUser); // Replace with your API endpoint
      setUsers([...users, response.data]); // Add new user to state
      setIsAddingUser(false); // Reset add user state
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  const [selectedUser, setSelectedUser] = useState(null);

  const toggleAddUserForm = () => {
    setIsAddingUser(!isAddingUser); // Toggle add user state
  };

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>CID</th>
            <th>Contact No</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.cid}</td>
              <td>{user.ownername}</td>
              <td>{user.contactNo}</td>
              <td>{user.emailID}</td>
              <td>
                <button onClick={() => handleEdit(user._id)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && <UserForm initialUser={selectedUser} onSubmit={() => setSelectedUser(null)} />}
      {isAddingUser && ( // Conditionally render UserForm for adding
        <UserForm
          onSubmit={handleAddUser}
          onCancel={() => setIsAddingUser(false)} // Add a cancel function
        />
      )}
      <button onClick={toggleAddUserForm} disabled={isAddingUser}>
        {isAddingUser ? 'Close Add Form' : 'Add'}
      </button>
    </div>
  );
};

export default UserTable;
