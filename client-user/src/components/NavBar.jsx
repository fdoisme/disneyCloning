import disney from "../assets/disney.png"
import { useNavigate } from "react-router-dom"

export default function HeaderBanner() {
    const navigate = useNavigate()
    function movieHandle(event) {
        event.preventDefault()
        localStorage.clear()
        navigate("/")
    }
    return (
        <>
            <div className="container-navbar">
                <div className="container-navbar-wrapper">
                    <div className="container-navbar-left">
                        <div className="logo-nav">
                            <a href="#" onClick={movieHandle}><img src={disney} alt="" /></a>
                        </div>
                        <p>DISNEY+HOTSTAR</p>
                        <a href="#" onClick={movieHandle}>MOVIES</a>
                        <p>PARKS</p>
                        <p>DISNEY100</p>
                    </div>
                    <div className="container-navbar-right">
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}