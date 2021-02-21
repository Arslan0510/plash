import {ADD_TO_CART, GET_CART} from "../constants"

export const addToCart = (cart) => {
  return {
    type: ADD_TO_CART,
    payload: cart,
  }
}

export const getCart = () => {
  const action = {
    type: GET_CART,
  }
  return action
}
