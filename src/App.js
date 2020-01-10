import React from 'react';
import './App.css';
import UsersList from './UserList'
import users from './data/usersList'

export const getUsers = () => {
  return users['users']
};

const App = () => (
  <div className="App">
    <h1>Test</h1>
    <UsersList />
  </div>
);
export default App;
