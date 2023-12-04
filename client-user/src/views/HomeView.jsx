import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import useFetch from "../hooks/useFetch";
// import { getDataMovies } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { getDataMovie, getDataMovies, setMovies, setMoviesLoading } from "../stores/actions/actionCreator";
const BASE_URL = "http://localhost:2023"


export default function HomeView() {
    /*
    // const {data:movies, loading:isLoading} = useFetch("Movie") // cara hooks
    cara sebelum hooks
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    async function fetchMovie() {
        try {
            const jsonserver = await fetch(
                "http://localhost:3000/Movie",
                {
                    method: "GET"
                }
            )
            const data = await jsonserver.json()
            console.log(data);
            setMovies(data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        console.log("MOUNTED");
        fetchMovie()
    }, [])*/
    
    console.log("homeee")
    const dispatch = useDispatch()
    const movies = useSelector((state) => {
        console.log(state);
        return state.moviesReducer.movies
    })

    const [loading, setLoading] = useState(false)
    const fetchData = async()=>{
        try {
            setLoading(true)
            await dispatch(getDataMovies())
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        // console.log("MOUNTED");
        // getDataMovies()
        fetchData()
    }, [])

    console.log(movies, "<<<<<<<")
    return (
        <>
            {/* <p>{movies}</p> */}
            <div className="container-home">
                <div className="container-home-wrapper">
                    <div className="wrapper-home">
                        <h1>Featured</h1>
                        <div className='container-movie'>
                            {
                                loading ? (<h1>LOADING...</h1>) :
                                    (movies.map((el, i) => {
                                        if (el.categoryId == 1) {
                                            return <CardMovie key={i} movie={el} />
                                        }
                                    }))
                            }
                        </div>
                    </div>
                    <div className="wrapper-home">
                        <h1>20th Century Studios</h1>
                        <div className='container-movie'>
                            {
                                loading ? (<h1>LOADING...</h1>) :
                                    (movies.map((el, i) => {
                                        if (el.categoryId == 2) {
                                            return <CardMovie key={i} movie={el} />
                                        }
                                    }))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}