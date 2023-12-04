import { legacy_createStore as createStore } from "redux"
import { actionType_movies, actionType_movie, actionType_moviesLoading } from "../actions/actionType"

const initState = {
    movies: [],
    isLoading: true,
    movie: null
}


export default function moviesReducer(state = initState, action) {
    console.log("MOVIES REDUCER", action.payload);
    console.log("<<reducer")
    switch (action.type) {
        case actionType_movies:
            return { ...state, movies: action.payload }
        // case actionType_moviesLoading:
        //     return { ...state, isLoading: action.payload }
        case actionType_movie:
            return { ...state, movie: action.payload }
        default:
            return state
    }
}

// let store = createStore(moviesReducer)

// export default store