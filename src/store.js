import { createStore } from 'redux';

const SET_USERS = 'SET_USERS';
const SET_ACTIVEPAGE = 'SET_ACTIVEPAGE';

export const setUsers = value => ({
  type: SET_USERS, value
});

export const setActivePage = value => ({
  type: SET_ACTIVEPAGE, value
});

export const getUsers = state => state.users;
export const getUsersLength = state => state.users.length;
export const getActivePage = state => state.activePage;
export const getUsersOnPage = state => state.usersOnPage;


const initialState = {
  users: [],
  activePage: 1,
  usersOnPage: 5,
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERS: 
      return {
        ...state,
        users: action.value,
      }
    case SET_ACTIVEPAGE:
      return {
        ...state,
        activePage: action.value,
      }
      default:
        return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
