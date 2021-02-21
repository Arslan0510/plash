import {combineReducers} from "redux"
import auth_reducer from "./auth_reducer"
import cart_reducer from "./cart_reducer"

const rootReducer = combineReducers({
  auth: auth_reducer,
  cart: cart_reducer,
})

export default rootReducer
