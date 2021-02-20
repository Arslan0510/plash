import {createStore} from "redux"
import user_reducer from "./reducers"

export const store = createStore(user_reducer)
