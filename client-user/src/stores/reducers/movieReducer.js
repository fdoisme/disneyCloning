import { legacy_createStore as  createStore } from "redux";
import { actionType_movie, actionType_movieLoading } from "../actions/actionType"

const initState = {
    movie: {},
    isLoading: true
}


function movieReducer(state = initState, action) {
    // console.log("MOVIE REDUCER", action.payload);
    switch (action.type) {
        case actionType_movie:
            console.log("Masuk sini MOVIE REDUCER");
            return { ...state, movie: action.payload }
        case actionType_movieLoading:
            console.log("MASUK SANA MOVIE REDUCER");
            return { ...state, isLoading: action.payload }
        default:
            console.log("MASUK DEFAULT MOVIE REDUCER");
            return state
    }
}

let stores = createStore(movieReducer)

export default stores