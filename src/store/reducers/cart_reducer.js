import {ADD_TO_CART, GET_CART} from "../constants"

const initialState = {
  heading: "",
  details: "",
  price: 0.0,
  img: "",
}

const cart_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        heading: action.payload.heading,
        details: action.payload.details,
        price: action.payload.price,
        img: action.payload.img,
      }
    case GET_CART:
      return state
    default:
      return state
  }
}

export default cart_reducer
