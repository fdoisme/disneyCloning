import { Outlet } from 'react-router-dom'
import SideBar from "./SideBar";

export default function Layout() {
    return (
        <>
            <div className='container'>
                <SideBar />
                <div style={{ width: "80%", minHeight: "100vh" }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}