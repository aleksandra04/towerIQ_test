import React from 'react';
import './App.css';
import UsersList from './UserList'
import users from './data/usersList'

export const uploadUsers = () => {
  return users['users']
};

const App = () => (
  <div className="App">
    <UsersList />
  </div>
);
export default App;
