import {ADD_USER, GET_USER} from "../constants"

export const addUser = ({email, password, userName}) => {
  console.log("[ACTION ADD USER]", email, password, userName)
  return {
    type: ADD_USER,
    email: email,
    password: password,
    userName: userName,
  }
}

export const getUser = () => {
  const action = {
    type: GET_USER,
  }
  return action
}
