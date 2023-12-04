import { actionType_login, actionType_register } from "../actions/actionType";

export default function userReducer(state = { user: null }, action) {
    switch (action.type) {
        case actionType_login:
            return { ...state, user: action.payload };
        case actionType_register:
            return { ...state, user: action.payload };
        default:
            return state
    }
}