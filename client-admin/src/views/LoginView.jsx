import { useState } from "react"
import disneyLogo from "../assets/disney.png"
import { useDispatch } from "react-redux"
import { handleLogin } from "../store/actions/actionUser"
import { useNavigate } from "react-router"

export default function LoginView() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(form, "KENAPA TELAT 1 karakter");
    }
    async function handleSubmit(e) {
        try {
            e.preventDefault()
            console.log(form, "||||||");
            await dispatch(handleLogin(form))
            console.log("Succes Login");
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container-login">
                <div className="login-wrapper">
                    <div className="login">
                        <div className="login-form">
                            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="" />
                            <p>Sign in</p>
                            <form action="" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Enter email</label>
                                    <input id="email" name="email" value={form.email} onChange={handleForm} type="text" placeholder="EMAIL" />
                                </div>
                                <div>
                                    <label htmlFor="password">Enter password</label>
                                    <input id="password" name="password" value={form.password} onChange={handleForm} type="password" placeholder="PASSWORD" />
                                </div>
                                <button type="submit">Sign In</button>
                            </form>
                            {/* <h1>{JSON.stringify(form)}</h1> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}