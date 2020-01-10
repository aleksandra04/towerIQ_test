import React from 'react';
import { connect } from 'react-redux';
import {
  getUsersLength,
  getActivePage,
  getUsersOnPage,
  setActivePage
} from './store'


const Pagination = ({
  usersLength,
  activePage,
  usersOnPage,
  changeActivePage
}) => {
  const buttons = Array(Math.ceil(usersLength/usersOnPage))
    .fill('');

  const handleCHangegPage = (event) => {
    console.log(event.target.innerText);
    
    if(event.target.innerText === "Next") {
      changeActivePage(activePage+1 > buttons.length 
        ? buttons.length 
        : activePage+1)
    } else if(event.target.innerText === "Prev") {
      changeActivePage(activePage-1 < 1 ? 1 : activePage-1)
    } else {
      changeActivePage(+event.target.innerText)
    }
  }
  return (
    <div>
      <button
        onClick={handleCHangegPage}
        className='button'
      >
        Prev
      </button>
      {buttons.map((button, i) => (
        <button 
          onClick={handleCHangegPage}
          className={activePage === i+1 
            ? 'button button--active'
            : 'button'
          }
        >
          {i+1}
        </button>
      ))}
      <button
        onClick={handleCHangegPage}
        className='button'
      >
        Next
      </button>
    </div>
  )

}

const getExtraData = state => ({
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
)(Pagination);
