import {combineReducers, applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from 'redux-thunk'
import moviesReducer from "./reducers/moviesReducer"
const rootReducer = combineReducers({
    moviesReducer: moviesReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store