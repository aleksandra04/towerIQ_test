import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from './App'
import { setUsers } from './store'

const UserList = ({ users, loadUsers }) => {

  const handleClick = () => {
    const loadedUsers = getUsers()
    loadUsers(loadedUsers)
  }
console.log('users11',users.users)
  return (
    <div>
      {users.length === 0
        && (
          <button
            type="button"
            onClick={handleClick}
          >
            Load
          </button>
        )}
      {users.length !== 0
        && users.map(user => (
          <div className="card">
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.desc}</p>
          </div>
        ))
      }
    </div>
  )
}

const getExtraData = state => ({
  users: state.users
})

const getExtraMethods = dispatch => ({
  loadUsers: value => dispatch(setUsers(value))
})

export default connect(
  getExtraData,
  getExtraMethods
)(UserList);
