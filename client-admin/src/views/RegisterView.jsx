import { useState } from "react"
import { RiAddCircleFill, RiDeleteBin5Fill } from "react-icons/ri"
import { PiMonitorPlayFill } from "react-icons/pi"
import { MdEditDocument } from "react-icons/md"
import { BiShowAlt } from "react-icons/bi"
import { FcRating } from "react-icons/fc"


export default function RegisterView() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        phoneNumber: "",
        address: "",
    })
    function handleForm(e) {
        const { name, value } = e.target
        setForm(
            {
                ...form,
                [name]: value
            }
        )
        console.log(name, value);
    }
    function handleRegister() {
    }
    return (
        <>
            {/* <div>
                <form action="" onSubmit={handleRegister}>
                    <input onChange={handleForm} type="text" name="username" value={form.username} placeholder="username"/>
                    <input onChange={handleForm} type="text" name="email" value={form.email} placeholder="email"/>
                    <input onChange={handleForm} type="password" name="password" value={form.password} placeholder="password"/>
                    <input onChange={handleForm} type="text" name="role" value={form.role} placeholder="role"/>
                    <input onChange={handleForm} type="text" name="phoneNumber" value={form.phoneNumber} placeholder="phone number"/>
                    <input onChange={handleForm} type="text" name="address" value={form.address} placeholder="address"/>
                    <button type="submit">Sign Up</button>
                </form>
            </div> */}
            <div className="container-movies">
                <div className="movies-wrapper">
                    <div className="movies">
                        <div className="movies-header">
                            <h1>Register New Admin</h1>
                        </div>
                        <form action="">
                            <div className="movies-table">
                                <table className="register-table">
                                    <tr>
                                        <td className="header-register"><p className="p1">Personal Information</p><p>Keep subscribe to get exclusive movie</p></td>
                                    </tr>
                                </table>
                                <table className="register-table">
                                    <tr>
                                        <td className="label-register">Username</td>
                                        <td className="input-register"><div><input type="text" placeholder="username required" /></div></td>
                                    </tr>
                                    <tr>
                                        <td className="label-register">Email</td>
                                        <td className="input-register"><div><input type="text" placeholder="email required, uniq, email format" /></div></td>
                                    </tr>
                                    <tr>
                                        <td className="label-register">Password</td>
                                        <td className="input-register"><div><input type="text" placeholder="password min. 5 character" /></div></td>
                                    </tr>
                                    <tr>
                                        <td className="label-register">Phone Number</td>
                                        <td className="input-register"><div><input type="text" placeholder="opsional" /></div></td>
                                    </tr>
                                    <tr>
                                        <td className="label-register">Address</td>
                                        <td className="input-register"><div><input type="text" placeholder="opsional" /></div></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="register-foot">
                                <a href="" style={{border:"1px solid", backgroundColor:"white", color:"black"}}>Cancel</a>
                                <a href="">Save</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}