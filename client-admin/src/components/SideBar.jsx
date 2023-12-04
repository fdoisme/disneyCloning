import disneyLogo from "../assets/disney.png"
import {MdOutlineCategory, MdSpaceDashboard} from "react-icons/md"
import {BsPersonFillAdd} from "react-icons/bs"
import {RiLogoutBoxRFill} from "react-icons/ri"
import { NavLink, useNavigate } from "react-router-dom"

export default function SideBar() {
    const navigate = useNavigate()
    function logoutHandle(event) {
        event.preventDefault()
        localStorage.clear()
        navigate("/login")
    }
    return (
        <>
            <div className="container-sidebar">
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <div className="sidebar-img"><img src={disneyLogo} alt="" /></div>
                        <div className="navigation">
                            <div className="navigation-wrapper">
                                <NavLink to={"/"}><p><MdSpaceDashboard/>  Dashboard</p></NavLink>
                                <NavLink to={"/genres"}><p><MdOutlineCategory/>  Genres</p></NavLink>
                                <NavLink to={"/register"}><p><BsPersonFillAdd/>  Register Admin</p></NavLink>
                                <a href="#" onClick={logoutHandle}><RiLogoutBoxRFill/>  Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}