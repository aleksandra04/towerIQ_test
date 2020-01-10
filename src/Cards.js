import React from 'react';
import { connect } from 'react-redux';
import {
  getUsersLength,
  getUsers,
  getActivePage,
  getUsersOnPage,
  setActivePage
} from './store'

const Cards = ({ users, usersLength, activePage, usersOnPage }) => {
  const start = activePage * usersOnPage - usersOnPage + 1;
  const end = activePage * usersOnPage >= usersLength
    ? usersLength
    : activePage * usersOnPage

  return (
    <>
      
      <div className="cards-box">
        {users.map((user, i) => (
          i + 1 >= start && i + 1 <= end
           && (
              <div className='card'>
                <p className='name'>
                  {`${user.name} ${user.surname}`}
                </p>
                <p>{user.desc}</p>
              </div>
           )
        ))}
        
      </div>
      <p className='count'>
        {`${start} - ${end} of ${usersLength} users`}
      </p>
    </>
  )
}

const getExtraData = state => ({
  users: getUsers(state),
  usersLength: getUsersLength(state),
  activePage: getActivePage(state),
  usersOnPage: getUsersOnPage(state)
})

const getExtraMethods = dispatch => ({
  changeActivePage: value => dispatch(setActivePage(value)),
})

export default connect(
  getExtraData,
  getExtraMethods
)(Cards);