import {ADD_USER, GET_USER} from "../constants"

const initialState = {
  email: "",
  password: "",
  userName: "",
}

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.userName,
      }
    case GET_USER:
      return state

    default:
      return state
  }
}

export default user_reducer
