import { createStore } from 'redux';

const SET_USERS = 'SET_USERS';

export const setUsers = value => ({
  type: SET_USERS, value
})

const initialState = {
  users: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERS: 
      return {
        ...state,
        users: action.value,
      }
      default:
        return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
