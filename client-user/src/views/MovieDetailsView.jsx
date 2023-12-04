import { AiFillPlayCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useParams } from 'react-router-dom';
import { getDataMovie, setMovies, setMoviesLoading } from '../stores/actions/actionCreator';
import { useEffect } from 'react';
import { useState } from 'react';
const BASE_URL = "http://localhost:2023"

export default function MovieDetailsView() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const movie = useSelector((state) => {
        console.log(state);
        return state.moviesReducer.movie
    })
    console.log(id);
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        try {
            setLoading(true)
            await dispatch(getDataMovie(id))
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log("MOUNTED");
        // getDataMovies()
        fetchData()
    }, [])

    console.log(movie);
    return (
        <div className="container-details">
            <div className="details-wrapper">
                <div className="banner-movie">
                    <div className="banner-movie-img">
                        <img src={movie?.bannerUrl} alt="" />
                        <div className="banner-movie-button">
                            <a href={movie?.trailerUrl} target='_blank'>
                                <AiFillPlayCircle />
                                <div>
                                    <span>TONTON TRAILER {id}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='content-movie'>
                    <div className='content-movie-wrapper'>
                        <div className='content-movie-img'>
                            <img src={movie?.imgUrl} alt="" />
                        </div>
                        <div className='content-movie-detail'>
                            <h1>{movie?.title}</h1>
                            <div>Genre: {movie?.Genre.name}</div>
                            <div>{movie?.synopsis}</div>
                            <div>Rating : {movie?.rating}</div>
                            <div className='content-movie-cast'>
                                <div>Cast :</div>
                                {movie?.Casts.map((element) => {
                                    return (
                                        <>
                                            <div className='cast' key={element.id}>
                                                {/* <div>{element}</div> */}
                                                <div>{element.name}</div>
                                                <img src={element.profilePict} alt="" />
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}