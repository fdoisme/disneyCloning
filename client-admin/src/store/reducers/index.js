import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import userReducer from "../reducers/userReducer"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    userReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store