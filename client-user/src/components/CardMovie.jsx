import { useNavigate } from "react-router-dom"


export default function CardMovie({ movie }) {
    const navigate = useNavigate()
    function movieHandle(event) {
        event.preventDefault()
        localStorage.clear()
        navigate(`/details/${movie.id}`)
    }
    return (
        <>
            <a href="#" onClick={movieHandle} className='container-card'>
                <div className="image-container">
                    <img
                        src={movie.imgUrl}
                        alt="img url"
                    />
                </div>
                <h3 className="title">{movie.title}</h3>
            </a>
        </>
    )
}