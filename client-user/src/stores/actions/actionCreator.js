import {
    actionType_movie,
    actionType_movieLoading,
    actionType_movies,
    actionType_moviesLoading
} from "./actionType";
const BASE_URL = "http://localhost:2023"
export function setMovie(payload) {
    return {
        type: actionType_movie,
        payload
    }
}
export function setMovieLoading(payload) {
    return {
        type: actionType_movieLoading,
        payload
    }
}
export function setMovies(payload) {
    return {
        type: actionType_movies,
        payload: payload
    }
}
export function setMoviesLoading(payload) {
    return {
        type: actionType_moviesLoading,
        payload
    }
}


export function getDataMovies() {
    return async function (dispatch) {
        try {
            console.log("MASUK FETCH MOVIES");
            // dispatch(setMoviesLoading(true))
            const jsonserver = await fetch
                (
                    BASE_URL + "/user/movies",
                    { method: "GET" }
                )
            const data = await jsonserver.json()
            console.log(data);
            if (!jsonserver.ok) {
                throw data
            }
            dispatch(setMovies(data))
        } catch (error) {
            console.log(error);
            throw error
        }

    }
}
export function getDataMovie(id) {
    return async function (dispatch) {
        try {
            console.log("MASUK FETCH MOVIE");
            const jsonserver = await fetch
                (
                    BASE_URL + "/user/movies/" + id,
                    { method: "GET" }
                )
            const data = await jsonserver.json()
            console.log(data);
            if (!jsonserver.ok) {
                throw data
            }
            dispatch(setMovie(data))
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}