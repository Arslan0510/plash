import {ADD_USER, GET_USER} from "../constants"

export const addUser = (email, password, userName) => {
  return {
    type: ADD_USER,
    payload: {email, password, userName},
  }
}

export const getUser = () => {
  const action = {
    type: GET_USER,
  }
  return action
}
