import React from 'react';
import Cards from './Cards'
import Pagination from './Pagination'
import { connect } from 'react-redux';
import { uploadUsers } from './App'
import { setUsers, setActivePage, getUsers } from './store'

const UserList = ({ users, loadUsers }) => {

  const handleClick = () => {
    const loadedUsers = uploadUsers()
    loadUsers(loadedUsers)
  }

  return (
    <div>
      {users.length === 0
        && (
          <button
            type="button"
            className='load-button'
            onClick={handleClick}
          >
            Click to load Users
          </button>
        )}
      {users.length !== 0
        &&
        <div>
          <h1 className='header'>users cards</h1>
          <Cards />
          <Pagination />
        </div>
      }
    </div>
  )
}

const getExtraData = state => ({
  users: getUsers(state)
})

const getExtraMethods = dispatch => ({
  loadUsers: value => dispatch(setUsers(value)),
  changeActivePage: value => dispatch(setActivePage(value)),
})

export default connect(
  getExtraData,
  getExtraMethods
)(UserList);
